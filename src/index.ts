import { PeopleAccount } from "./DioBank/PeopleAccount.js";

const contaUsuario : PeopleAccount = new PeopleAccount(2, 'Diogo Ferandes' );
contaUsuario.deposit(1000);
contaUsuario.withdraw(250);
contaUsuario.showInfo();