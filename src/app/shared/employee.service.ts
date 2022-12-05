import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {catchError, map, Observable, of, pipe} from "rxjs";

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient, private router: Router) {

  }

  createEmployee(employee) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.post('https://localhost:7015/api/employees', employee, options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  getEmployeeById(employeeId: string) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.get('https://localhost:7015/api/employees/' + employeeId, options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  updateEmployee(employee, employeeId){
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.put('https://localhost:7015/api/employees/' + employeeId, employee, options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  deleteEmployee(employeeId) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.delete('https://localhost:7015/api/employees/' + employeeId, options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  getEmployees(){
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.get('https://localhost:7015/api/employees', options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  getStatusEmployees(status: string) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.get('https://localhost:7015/api/employees/' + status, options)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
    )
  }

  getDepartmentEmployees(departmentId: any, status: any) {
    let options = {headers: new HttpHeaders({'Content-Type': 'application/json'})}
    return this.http.get('https://localhost:7015/api/department/' + departmentId + '/employees/' + status)
      .pipe(
        map((data) => {
          if (data != null) {
            return data
          }
          return catchError(this.handleError(''))
        })
      )
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T)
    }
  }
}
