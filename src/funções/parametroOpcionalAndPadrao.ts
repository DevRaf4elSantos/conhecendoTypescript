// Parametro Opcional basta colocar o ?
function nomeOpcional(name ?: string){
    if(name){
        console.log(`Olá ${name}`);
    }else {
        console.log("Ol@ Jovem!");
    }
}
nomeOpcional();
nomeOpcional("Felipe");

// Parametro com valores padrões
function nomePadrao(name : string = "Sergio Lopes"){
    console.log(`Ola ${name}`);
}

nomePadrao("Aguero Fernadez");
nomePadrao();