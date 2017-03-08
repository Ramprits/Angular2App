import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'
@Component({
  templateUrl: './NewEmployee.component.html',
  styleUrls: ['./NewEmployee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private router: Router) { }
  Save() {
    alert('Save successfully')
  }
  Cancel() {
    this.router.navigate(['/Employees'])
  }
  ngOnInit() {
  }

}