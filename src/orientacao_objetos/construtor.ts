enum cores {
    blue = 'Azul',
    Red = 'Vermelho',
    Black = 'Preto',
    Silver = 'Prata',
    White = 'Branco'
}

class carro {
    private velMax : number = 250;
    private velocidadeAtual : number = 187;
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
    acelerar(){
        if(this.velocidadeAtual + 15 <= this.velMax){
            this.velocidadeAtual += 15;
            
        }else {
            this.velocidadeAtual = this.velMax;
        }
        console.log('Velocidade atual : ' + this.velocidadeAtual + 'km/h')
    }

}


const caiene = new carro('Caiene', 'Porshe', cores.White);
const c2 = new carro('f1', 'Ferrari', cores.Silver);
caiene.apresentarSe();
c2.apresentarSe()
c2.acelerar()
c2.acelerar()
c2.acelerar()
c2.acelerar()
c2.acelerar()