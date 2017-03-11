import { Injectable } from '@angular/core';

declare let toastr: any

@Injectable()
export class ToasterService {

     success(messege: string, title?: string) {
          toastr.success(messege, title)
     }
     info(messege: string, title?: string) {
          toastr.info(messege, title)
     }
     warning(messege: string, title?: string) {
          toastr.warning(messege, title)
     }
     danger(messege: string, title?: string) {
          toastr.danger(messege, title)
     }

}