import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../defines/employee';
import { Loginemployee } from '../defines/loginemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {


  url = "http://localhost/";

  constructor(private http: HttpClient) { }

  createemployee(employee: Employee): Observable<any> {

    return this.http.post(this.url + 'api/employeemasters', employee)
  }
  
  loginemployee(loginEmployee: Loginemployee): Observable<any> {
    return this.http.post(this.url + 'api/login', loginEmployee)
  }
}
