import { Injectable } from '@angular/core';
import { IUser } from "./user.module";

@Injectable()
export class AuthService {
     currentUser: IUser
     constructor() { }
     loginUser(userName: string, password: string) {
          this.currentUser = {
               id: 1,
               firstName: 'Ramprit',
               lastName: 'Sahani',
               userName: userName
          }

     }
     isAuthenticated() {
          return !!this.currentUser;
     }
}