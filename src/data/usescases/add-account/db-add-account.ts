import { Encrypter } from '@/data/protocols/encrypter'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountModel } from '@/domain/usecases'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryper: Encrypter
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    await this.encryper.encrypt(account.password)
    return new Promise(resolve => { resolve(null) })
  }
}
