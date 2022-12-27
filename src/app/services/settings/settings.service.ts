import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  datePipe = new DatePipe("en-US");

  constructor() { }

  public CalculateAge(birthdate): number {
    return moment().diff(birthdate, "years");
  }

  public convertTodate(timestamp){
    return new Date(timestamp)
  }
}
