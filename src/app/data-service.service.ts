import { Injectable } from '@angular/core';
import { User } from 'app/model/user';

@Injectable()
export class DataService {

  sharingData: User;
  
  constructor() { }

  saveData(model) {
    this.sharingData = model;
  }

  getData() {
    return this.sharingData;
  }
}
