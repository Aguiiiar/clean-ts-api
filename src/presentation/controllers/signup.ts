export class SignUpController {
  handle (httpRequest: any): any {
    const requestFields = ['name', 'email']

    for (const field of requestFields) {
      if (!httpRequest.body[field]) {
        return {
          statusCode: 400,
          body: new Error(`Missing param: ${field}`)
        }
      }
    }
  }
}
