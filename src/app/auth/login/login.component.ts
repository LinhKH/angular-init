import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from 'src/app/shared/services/employeeservice.service';
import { Router } from '@angular/router';
import { Loginemployee } from 'src/app/shared/defines/loginemployee';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  massage: string;
  Error = false;
  constructor(private employeeservice: EmployeeserviceService, private formbuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.loginForm = this.formbuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }
  onSubmit() {
    let login = this.loginForm.value;
    this.login(login);
  }
  login(loginEmployee: Loginemployee) {
    this.employeeservice.loginemployee(loginEmployee).subscribe(
      employee => {
        var succ = employee;
        if (succ) {
          this.loginForm.reset();
          localStorage.setItem("Employee", JSON.stringify(succ));
          this.router.navigate(['dashboard']);
        } else {
          this.Error = true;
          this.massage = "User ID/Password Wrong";
        }
      }
    )
  }

}
