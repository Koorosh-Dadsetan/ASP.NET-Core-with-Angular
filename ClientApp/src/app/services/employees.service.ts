import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl: string = 'https://localhost:7209';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(this.baseApiUrl + '/api/employees');
  }

  getEmployeeById(id: string): Observable<EmployeeModel> {
    return this.http.get<EmployeeModel>(this.baseApiUrl + '/api/employees/GetEmployee/' + id);
  }

  createEmployee(addEmployee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.baseApiUrl + '/api/employees/create', addEmployee);
  }

  editEmployee(id: number, updateEmployee: EmployeeModel): Observable<EmployeeModel> {
    return this.http.put<EmployeeModel>(this.baseApiUrl + '/api/employees/edit/' + id , updateEmployee);
  }

  deleteEmployee(id: number): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(this.baseApiUrl + '/api/employees/delete/' , id);
  }
}
