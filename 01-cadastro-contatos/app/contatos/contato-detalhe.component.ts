import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalha.component.html',

})
export class ContatoDetalheComponent  implements OnInit {

    contato: Contato;
    private isNew: boolean = true;

    constructor(
        private contatoService : ContatoService,
        private route : ActivatedRoute,
        private location : Location
    ) {}

    ngOnInit(): void {
        console.log("on init");
        this.contato = new Contato(0, '', '', '');
        this.route.params.forEach((params: Params) => {
            let id : number = +params['id']; // o + é para converter string em número
            
            if (id) {
                this.isNew = false;
                console.log("id selecioado >> " +  id);
                this.contatoService.getContato(id).then((contato: Contato) => {
                console.log("get contato service contato"); 
                console.log(contato); 
                this.contato = contato;
                });
            }
        });
    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group' : true,
            'has-danger' : !isValid && !isPristine,
            'has-success' : isValid && !isPristine
        }
    }
    
    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control' : true,
            'form-control-danger' : !isValid && !isPristine,
            'form-control-success' : isValid && !isPristine
        }
    }

    onSubmit() : void {
        console.log(this.contato);
        console.log("novo >> " + this.isNew);

        let promise;

        if (this.isNew) {
            console.log("cadastra novo contato");
            promise = this.contatoService.create(this.contato);
        } else {
            console.log("alterar contato");
            promise = this.contatoService.update(this.contato);
        }

        promise.then(contato => this.location.back());
    }



}