import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error511NetworkAuthenticationRequired extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error511NetworkAuthenticationRequired';
  }
}
