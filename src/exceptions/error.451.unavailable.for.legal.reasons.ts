import RestClientBaseException, { RestClientExceptionData } from './base.exception';

export default class Error451UnavailableForLegalReasons extends RestClientBaseException {
  constructor(response: RestClientExceptionData) {
    super(response);
    this.name = 'Error451UnavailableForLegalReasons';
  }
}
