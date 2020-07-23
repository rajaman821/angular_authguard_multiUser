import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-login',
  templateUrl: './company-login.component.html',
  styleUrls: ['./company-login.component.scss']
})
export class CompanyLoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public router: Router) { }

  ngOnInit() {
    this.initLogin()
  }

  initLogin() {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required]
    });
  }

  onSubmit() {
    // let loginObj = {
    //   "username": this.loginForm.value.username,
    //   "password": this.loginForm.value.password,
    //   "role":2
    // };
    let role = '1';
    localStorage.setItem('role', role);
    this.router.navigateByUrl('/company/company-dashboard');


  }

}
