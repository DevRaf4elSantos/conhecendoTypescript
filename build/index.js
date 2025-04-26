import { PeopleAccount } from "./DioBank/PeopleAccount.js";
const contaUsuario = new PeopleAccount(2, 'Diogo Ferandes');
contaUsuario.deposit(1000);
contaUsuario.withdraw(250);
contaUsuario.showInfo();
