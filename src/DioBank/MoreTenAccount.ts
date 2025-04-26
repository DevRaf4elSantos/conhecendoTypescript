import { DioAccount } from "./DioAccount.js"


export class MoreTenAccount extends DioAccount {
    
    constructor(name : string){
        super(name);
    }

    deposit: (value: number) => void = (value : number) => {
        if(value > 0 && this.getStatus){
            let valueFull = value + 10;
            this.deposit(valueFull);
        } 
    };
}