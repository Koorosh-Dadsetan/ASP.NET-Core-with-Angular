import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  addEmployee: EmployeeModel = {
    id: 0,
    fullName: '',
    mobile: '',
    age: 0,
    address: ''
  }

  constructor(private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    console.log(this.addEmployee);
  }

  createEmployeeMethod() {
    this.employeesService.createEmployee(this.addEmployee)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        }
        , error: error => {
          console.log(error);
        }
      });
  }


}
