import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from '../../models/employee.model';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsEmployee: EmployeeModel = {
      id: 0,
      fullName: '',
      mobile: '',
      age: 0,
      address: ''
  }

  constructor(private route: ActivatedRoute, private employeesService: EmployeesService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get("id");

        if (id) {
          this.employeesService.getEmployeeById(id).subscribe({
            next: (employee) => {
              this.detailsEmployee = employee;
            },
            error: (error) => {
              console.log(error);
            }
          });
        }
      }
    });
  }

}
