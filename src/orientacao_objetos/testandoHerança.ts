import { randomInt } from "crypto";

class ContaBancaria {
    saldo : number = 0;
    numeroConta : number = randomInt(29059);
}

class ContaPoupanca extends ContaBancaria{
    depositarPoupanca(valor : number){
        this.saldo  += valor;
        console.log(`Conta Poupanca : Saldo atual R$${this.saldo.toFixed(2)}`)
    }
    sacarPoupanca(valor : number){
        this.saldo  -= valor;
        console.log(`Conta Poupanca :Saldo atual R$${this.saldo.toFixed(2)}`)
    }
    mostrarConta(){
        console.log(`Sua conta Poupança é ${this.numeroConta} e o Seu saldo atual é ${this.saldo}`)
    }
}

const minhaConta : ContaPoupanca = new ContaPoupanca();
minhaConta.depositarPoupanca(2500);
minhaConta.sacarPoupanca(1147);
minhaConta.mostrarConta()