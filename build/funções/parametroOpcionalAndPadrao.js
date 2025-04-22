function nomeOpcional(name) {
    if (name) {
        console.log(`Olá ${name}`);
    }
    else {
        console.log("Ol@ Jovem!");
    }
}
nomeOpcional();
nomeOpcional("Felipe");
function nomePadrao(name = "Sergio Lopes") {
    console.log(`Ola ${name}`);
}
nomePadrao("Aguero Fernadez");
nomePadrao();
export {};
