import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'app/model/user';
import { DataService } from 'app/data-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})

export class NotificationsComponent implements OnInit {

  myForm: FormGroup;
  user: User;

  constructor(private fb: FormBuilder, private dataService: DataService, private router: Router) {

  }

  ngOnInit() {
   // this.cities = ['Hyderabad', 'Bangalore', 'Pune', 'Chennai'];
    this.myForm = this.fb.group({
      type: [''],
      comment: [''],
      price: ['']
    });
  }

  save(model: User) {
    console.log(model);
    this.dataService.saveData(model);
    this.router.navigate(['other/result']);
  }
}
