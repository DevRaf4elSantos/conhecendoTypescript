class Pessoa{
    nome : string;
    idade : number;
    seApresentar(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos de idade!`)
    }
}
const felipe : Pessoa = new Pessoa();
felipe.nome = "Felipe";
felipe.idade = 23;
felipe.seApresentar();