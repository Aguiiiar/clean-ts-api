export interface Encrypter {
  encrypt: (value) => Promise<string>
}
