import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../models/employee.model';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private employeesService: EmployeesService) { }

  employees: EmployeeModel[] = [];

  ngOnInit(): void {
    this.employeesService.getAllEmployees()
      .subscribe({
        next: (employees) => {
          this.employees = employees;
        },
        error: (Response) => {
          console.log(Response);
        }
      });
  }

}
