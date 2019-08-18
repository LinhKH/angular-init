import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EmployeeserviceService } from 'src/app/shared/services/employeeservice.service';
import { Employee } from 'src/app/shared/defines/employee';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  regForm: FormGroup;
  datasaved = false;
  massage: string;
  constructor(private formbuilder: FormBuilder, private employeeservice: EmployeeserviceService) { }

  ngOnInit() {
    this.setFormState();
  }
  setFormState(): void {
    this.regForm = this.formbuilder.group({
      lastName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      emailId: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {

    let employee = this.regForm.value;

    this.createemployee(employee);
    this.regForm.reset();
  }
  createemployee(employee: Employee) {
    this.employeeservice.createemployee(employee).subscribe(
      () => {
        this.datasaved = true;
        this.massage = "User Created";
        this.regForm.reset();
      }
    )
  }

}
