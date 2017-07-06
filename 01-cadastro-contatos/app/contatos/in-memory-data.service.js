"use strict";
class InMemoryDataService {
    createDb() {
        let contatos = [
            { id: 1, nome: 'Fulano', email: '@@@', telefone: '1111' },
            { id: 2, nome: 'Beltrano', email: '@@@', telefone: '222' },
            { id: 3, nome: 'Ciclano', email: 'c@com', telefone: '3333' },
            { id: 4, nome: 'Haitinano', email: 'h@h.com', telefone: '333334444' },
            { id: 5, nome: 'Xixpetano', email: 'x@x.com', telefone: '55555' }
        ];
        return { contatos };
    }
}
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map