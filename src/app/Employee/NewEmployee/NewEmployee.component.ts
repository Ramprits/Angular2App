import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

import { ToasterService } from '../Toaster.service';
@Component({
  templateUrl: './NewEmployee.component.html',
  styleUrls: ['./NewEmployee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  constructor(private router: Router, private toastr: ToasterService) { }
  Save() {
    this.toastr.success('Hello This is toastr test', 'Test')
  }
  Cancel() {
    this.router.navigate(['/Employees'])
  }
  ngOnInit() {
  }

}