const usuario : {nome : string, idade : number, sexo : string, f : Function, greeting : Function} = {
    nome : "Felipe Sans",
    idade : 25,
    sexo : "masculino",
    f : (p: string) => {console.log(p)},
    greeting : () => {console.log(`Meu nome é ${usuario.nome}, eu tenho ${usuario.idade} anos e meu sexo é ${usuario.sexo} `)}
}

usuario.f("Misericordia");
usuario.greeting();