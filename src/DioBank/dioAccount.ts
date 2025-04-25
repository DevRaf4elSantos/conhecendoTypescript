import { error} from "console";
import { randomInt } from "crypto";

export abstract class DioAccount {
    private name : string;
    private readonly accountNumber : number;
    private balance : number = 0;
    private status : boolean = false;

    constructor(nome : string){
        this.name = nome;
        this.accountNumber = randomInt(588999982);
    }

    getName = () => {
        return this.name;
    }

    setName = (newName : string) => {
        if(newName != '' && newName != null && newName != undefined && newName.length > 2){
            this.name = newName;
            console.log(`Nome alterado com sucesso, é um prazer sr.(ª) ${this.name} `)
        }else {
            console.log('Infelizmente não foi possível alterar o nome gravado, tente novamente!')
        }
    }

    getStatus = ():boolean =>{
        return this.status;
    }

    private validationAccount = () => {
        if(this.status != false ){
            return this.status;
        }
        throw new error("Conta Inválida - Tente Novamente");
    };

    deposit = (valor : number):void => {
        if(this.validationAccount() && valor > 0){
            this.balance += valor;
            console.log(`Deposito Realizado com sucesso, seu saldo atual é de R$${this.balance.toFixed(2)}`);
        } else {
            console.log('Valor digitado é inválido ou você ainda não está cadastrado');
        }
    }

    withdraw = (valor : number): void => {
        if(this.validationAccount() && valor > 0 && valor <= this.balance){
            this.balance -= valor;
            this.successMessage("Saque", this.balance);
        } else {
            this.errorMessage();
        }
    }
    
    getBalance = (): void => {
        if(this.validationAccount()){
            console.log(`Seu saldo atual é de R$ ${this.balance}`)
        } else {
            console.log('Primeiro é preciso se cadastrar para ter acesso ao saldo');
        }
    }
    
    
    private successMessage = (operation : string, value : number):void => {
        console.log(`${operation} Realizado com sucesso, seu saldo atual é de R$${value.toFixed(2)}`);
        
    }

    private errorMessage = ():void => {
        console.log('Valor digitado é inválido ou você ainda não está cadastrado');
        
    }
   
}