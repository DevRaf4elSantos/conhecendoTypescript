var Idiomas;
(function (Idiomas) {
    Idiomas[Idiomas["Ingles"] = 0] = "Ingles";
    Idiomas[Idiomas["Japon\u00EAs"] = 1] = "Japon\u00EAs";
    Idiomas[Idiomas["Italiano"] = 2] = "Italiano";
    Idiomas[Idiomas["Portugues"] = 3] = "Portugues";
})(Idiomas || (Idiomas = {}));
console.log(Idiomas[5]);
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana["Seg"] = "Segunda-Feira";
    DiasDaSemana["Ter"] = "Ter\u00E7a-Feira";
    DiasDaSemana["Qua"] = "Quarta-Feira";
    DiasDaSemana["Qui"] = "Quinta-Feira";
    DiasDaSemana["Sex"] = "Sexta-Feira";
    DiasDaSemana["Sab"] = "S\u00E1bado";
    DiasDaSemana["Dom"] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
console.log(DiasDaSemana.Seg);
let mercadoria = {
    Id: 22,
    nomeProduto: "Carrinho compras",
    status: "Pagamento Concluido com Sucesso"
};
function verificaStatus(compra) {
    if (compra.status == "Pagamento Concluido com Sucesso") {
        console.log(`Enviando e-mail com a mensagem: ${"Pagamento Concluido com Sucesso"}`);
    }
}
verificaStatus(mercadoria);
export {};
