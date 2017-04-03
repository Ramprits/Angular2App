import { Component, OnInit } from '@angular/core';
import { AuthService } from "../user/auth.service";

@Component({
  selector: 'app-Navigations',
  templateUrl: './Navigations.component.html',
  styles: [`li>a.activeLink{color:green}`]
})
export class NavigationsComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

}