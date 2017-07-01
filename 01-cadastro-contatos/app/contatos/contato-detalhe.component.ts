import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import { Contato } from "./contato.model";
import { ContatoService } from "./contato.service";

@Component({
    moduleId: module.id,
    selector: 'contato-detalhe',
    templateUrl: 'contato-detalha.component.html'
})
export class ContatoDetalheComponent  implements OnInit {

    contato: Contato;

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
                console.log("id selecioado >> " +  id);
                this.contatoService.getContato(id).then((contato: Contato) => {
                console.log("get contato service contato"); 
                console.log(contato); 
                this.contato = contato;
                });

            }



        });
    }

    teste(form) : void {
        console.log(form);
        console.log(this.contato);
    }

}