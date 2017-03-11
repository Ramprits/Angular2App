import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Navigations',
  templateUrl: './Navigations.component.html',
  styles: [`li>a.activeLink{color:green}`]
})
export class NavigationsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}