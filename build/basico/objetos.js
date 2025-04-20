const usuario = {
    nome: "Felipe Sans",
    idade: 25,
    sexo: "masculino",
    f: (p) => { console.log(p); },
    greeting: () => { console.log(`Meu nome é ${usuario.nome}, eu tenho ${usuario.idade} anos e meu sexo é ${usuario.sexo} `); }
};
usuario.f("Misericordia");
usuario.greeting();
export {};
