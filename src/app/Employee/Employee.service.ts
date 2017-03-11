import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/RX';
import { IEmployee } from './Employee.model'

@Injectable()
export class EmployeeService {

  constructor() { }

  GetEmployees() {
    let subject = new Subject()
    setTimeout(() => { subject.next(Employees), subject.complete() }, 100)
    return subject;
  }
  GetEmployee(Id: number): IEmployee {
    return Employees.find(e => e.Id === Id)
  }
}

const Employees: IEmployee[] = [
  {
    Id: 1,
    "FirstName": "Nancy",
    "LastName": "Davolio",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 2,
    "FirstName": "Andrew",
    "LastName": "Fuller",
    "Title": "Vice President, Sales",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 3,
    "FirstName": "Janet",
    "LastName": "Leverling",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 4,
    "FirstName": "Margaret",
    "LastName": "Peacock",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 5,
    "FirstName": "Steven",
    "LastName": "Buchanan",
    "Title": "Sales Manager",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 6,
    "FirstName": "Michael",
    "LastName": "Suyama",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 7,
    "FirstName": "Robert",
    "LastName": "King",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 8,
    "FirstName": "Laura",
    "LastName": "Callahan",
    "Title": "Inside Sales Coordinator",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  },
  {
    Id: 9,
    "FirstName": "Anne",
    "LastName": "Dodsworth",
    "Title": "Sales Representative",
    "BirthDate": new Date('1948-12-08'),
    "HireDate": new Date('1948-12-08')
  }
]