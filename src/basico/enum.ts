// Enum numéricos
enum Idiomas {
    Ingles,
    Japonês,
    Italiano,
    Portugues
}
// É possível tentar um atributo que não esteja setado em um Enum do tipo numérico
console.log(Idiomas[5]);

// Enum String
enum DiasDaSemana {
    Seg = "Segunda-Feira",
    Ter = "Terça-Feira",
    Qua = "Quarta-Feira", 
    Qui = "Quinta-Feira",
    Sex = "Sexta-Feira",
    Sab = "Sábado",
    Dom = "Domingo"
}
console.log(DiasDaSemana.Seg)

// Quando usar enums?
// Os enums são usados quando temos o objetivo de pegar valores predefinidos como status de um cadastro, compra e afins

const enum StatusCompra {
    CompraEmProcesso = "Cliente em Processo de Compra",
    ProcessandoPagamento = "Pagamento Sendo Processado",
    PagamentoConcluido = "Pagamento Concluido com Sucesso"
}

let mercadoria = {
    Id : 22,
    nomeProduto : "Carrinho compras",
    status : StatusCompra.PagamentoConcluido
}

function verificaStatus(compra)  {
    if(compra.status == StatusCompra.PagamentoConcluido){
        console.log(`Enviando e-mail com a mensagem: ${StatusCompra.PagamentoConcluido}`)
    } 
}

verificaStatus(mercadoria) 