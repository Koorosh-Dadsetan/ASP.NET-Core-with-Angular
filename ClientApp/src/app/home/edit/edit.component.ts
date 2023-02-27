import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  updateEmployee: EmployeeModel = {
    id: 0,
    fullName: '',
    mobile: '',
    age: 0,
    address: ''
  }

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if (id) {
          this.employeesService.getEmployeeById(id)
            .subscribe({
              next: (employees) => {
                this.updateEmployee = employees;
              },
              error: (Response) => {
                console.log(Response);
              }
            });
        }
      }
    })
  }

  editEmployeeMethod() {
    this.employeesService.editEmployee(this.updateEmployee.id, this.updateEmployee)
      .subscribe({
        next: (response) => {
          this.router.navigate(['/']);
        },
        error: (error) => {
          console.log(error);
        }
      });
  }

}
