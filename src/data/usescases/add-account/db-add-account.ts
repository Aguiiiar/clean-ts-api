
import { Encrypter, AccountModel, AddAccount, AddAccountModel } from './db-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryper: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encryper.encrypt(account.password)
    return new Promise(resolve => { resolve(null) })
  }
}
