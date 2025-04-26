import { CompanyAccount } from "./DioBank/CompanyAccount.js";
import { PeopleAccount } from "./DioBank/PeopleAccount.js";

const contaUsuario : PeopleAccount = new PeopleAccount(2, 'Diogo Ferandes' );
contaUsuario.deposit(1000);
contaUsuario.withdraw(250);
contaUsuario.showInfo();

const contaFuncionario : CompanyAccount = new CompanyAccount('Henrique Simões');
contaFuncionario.deposit(8559);
contaFuncionario.withdraw(2368);
contaFuncionario.getLoan(1000)
contaFuncionario.showInfo();