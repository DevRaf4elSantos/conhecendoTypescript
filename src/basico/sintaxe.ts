// Objetos e Funções: 
function criarObjeto(m : string, mc : string , km : number, placa : string){
    // Crio a tipo (estrutura) do objeto.
    let carro : {
        modelo : string;
        marcar : string;
        quilometragem : number;
        placa : string
    }
    
    carro = {modelo : m , marcar: mc, placa : placa, quilometragem : km }
    console.log(carro)
}


