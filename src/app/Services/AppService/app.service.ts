import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public currentTimeOut = 5000;
  constructor(private toastr: ToastrService) {
  }

  successmessage(title, message) {
    this.toastr.success(message, title, {
      positionClass: 'toast-bottom-right', timeOut: this.currentTimeOut,
      closeButton: true
    });
  }

  errormessage(title, message) {
    this.toastr.error(message, title, {
      positionClass: 'toast-bottom-right', timeOut: this.currentTimeOut,
      closeButton: true
    });
  }

  infomessage(title, message) {
    this.toastr.info(message, title, {
      positionClass: 'toast-bottom-right', timeOut: this.currentTimeOut,
      closeButton: true
    });
  }

  warningmessage(title, message) {
    this.toastr.warning(message, title, {
      positionClass: 'toast-bottom-right', timeOut: this.currentTimeOut,
      closeButton: true
    });
  }
}
