import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data-service.service';
import { User } from 'app/model/user';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result;
  constructor(private dataService: DataService) {
    this.dataService = dataService;
    this.result = dataService.getData();
  }

  ngOnInit() {
  }

}
