import { AddAccountModel, AccountModel } from '@/data/usescases/add-account/db-account-protocols'

export interface AddAccountRepository {
  add: (account: AddAccountModel) => Promise<AccountModel>
}
