import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error500InternalServerError extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error500InternalServerError';
  }
}
