
import { Encrypter, AccountModel, AddAccount, AddAccountModel, AddAccountRepository } from './db-account-protocols'

export class DbAddAccount implements AddAccount {
  constructor (
    private readonly encryper: Encrypter,
    private readonly addAccountRepository: AddAccountRepository
  ) {}

  async add (account: AddAccountModel): Promise<AccountModel> {
    const hashedPassword = await this.encryper.encrypt(account.password)
    const accountData = await this.addAccountRepository.add(Object.assign({}, account, {
      password: hashedPassword
    }))
    return accountData
  }
}
