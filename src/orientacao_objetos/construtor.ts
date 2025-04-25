enum cores {
    blue = 'Azul',
    Red = 'Vermelho',
    Black = 'Preto',
    Silver = 'Prata',
    White = 'Branco'
}

class carro {
    velMax : number;
    modelo : string;
    marca : string;
    cor : cores;
    apresentarSe(){
        console.log(`Modelo : ${this.modelo} - Marca : ${this.marca} - Cor : ${this.cor}`)
    }
    constructor(md : string, mc : string, c: cores){
        this.modelo = md;
        this.marca = mc;
        this.cor = c;
    };

}


const caiene = new carro('Caiene', 'Porshe', cores.White);
const c2 = new carro('f1', 'Ferrari', cores.Silver);
caiene.apresentarSe();
c2.apresentarSe()