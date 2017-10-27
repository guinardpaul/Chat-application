import { Injectable } from '@angular/core';

import { FlashMessagesService } from 'ngx-flash-messages';

@Injectable()
export class FlashMsgService {

  constructor(
    private _flashMessages: FlashMessagesService
  ) { }

  successMsg(message: string) {
    this._flashMessages.show(message, {
      classes: [ 'alert', 'alert-success' ],
      timeout: 3000
    });
  }

  errorMsg(message: string) {
    this._flashMessages.show(message, {
      classes: [ 'alert', 'alert-danger' ],
      timeout: 3000
    });
  }

}
