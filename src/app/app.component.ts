import { Component } from '@angular/core';

//<app-EmployeeDetail></app-EmployeeDetail>
@Component({
  selector: 'app-root',
  template: `<app-Navigations></app-Navigations>
            <router-outlet></router-outlet>
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
