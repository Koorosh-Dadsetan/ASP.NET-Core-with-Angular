import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private router: Router) { }

  employee: EmployeeModel = {
    id: 0,
    fullName: '',
    mobile: '',
    age: 0,
    address: ''
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if (id) {
          this.employeesService.getEmployeeById(id)
            .subscribe({
              next: (employee) => {
                this.employee = employee;
              },
              error: (Response) => {
                console.log(Response);
              }
            });
        }
      }
    })
  }

  deleteEmployeeMethod() {
    this.employeesService.deleteEmployee(this.employee.id)
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
