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

// Arrays
let alunos : String[] = [
    'Andersom Silva', 'Felipe Delta', "Fenando Presunto"
]
console.log(alunos)
