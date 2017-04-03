import { Component, OnInit } from '@angular/core';
import { AuthService } from "./auth.service";
import { Router } from '@angular/router';

@Component({
     moduleId: module.id,
     selector: 'login',
     templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

     constructor(private authService: AuthService, private route: Router) { }

     ngOnInit() {

     }
     login(formValues) {
          this.authService.loginUser(formValues.userName, formValues.password);
          this.route.navigate(['/Welcome']);
     }
     cancel() {
          window.confirm('Are you sure want to cancel !');
     }
}