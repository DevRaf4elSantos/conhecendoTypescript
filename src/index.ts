import { CompanyAccount } from "./DioBank/CompanyAccount.js";
import { MoreTenAccount } from "./DioBank/MoreTenAccount.js";
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

const contaDepositoMaisDez : MoreTenAccount = new MoreTenAccount('Chrisse Tiro Certo');
contaDepositoMaisDez.deposit(250);
contaDepositoMaisDez.withdraw(60);
contaDepositoMaisDez.deposit(90);
contaDepositoMaisDez.showInfo();