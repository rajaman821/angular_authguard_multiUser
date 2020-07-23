import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.scss']
})
export class CandidateLoginComponent implements OnInit {
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
    let role = '2';
    localStorage.setItem('role', role);
    this.router.navigateByUrl('/candidate/candidate-dashboard');


  }
}
