import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup;
  result: string;

  constructor(private fb: FormBuilder, private router: Router) {

  }
  ngOnInit() {

    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginSubmit(value) {
    console.log(value.username);
    if(value.username === 'venkat' && value.password === 'venkat') {
    this.router.navigate(['other']);
    }
  }
}
