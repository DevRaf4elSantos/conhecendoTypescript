import { DioAccount } from "./DioAccount.js";

export class CompanyAccount extends DioAccount{
    constructor(name: string){
        super(name);
    };

    getLoan = (loanValue : number): void => {
        if(this.validateCollaborator() && loanValue > 0){
            this.deposit(loanValue);
        };
    };

    validateCollaborator = ():boolean => {
        if(this.getStatus){
            return true;
        };
    };
}