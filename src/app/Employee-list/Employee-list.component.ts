import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Employee-list',
  templateUrl: './Employee-list.component.html',
  styleUrls: ['./Employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  cancel() {
    window.confirm('Are you sure want to cancel !');
  }
}