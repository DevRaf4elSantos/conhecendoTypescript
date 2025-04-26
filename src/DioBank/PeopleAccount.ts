import { DioAccount } from './DioAccount.js'

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string){
    super(name)
    this.doc_id = doc_id
  }
  
}