import { Component } from '@angular/core';
import { listCustomersDataSample } from './data/SampleUserData.data';
import { userTableConfigs } from './data/UserTableConfigs.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  public listCustomer = listCustomersDataSample;
  public userTableConfigs = userTableConfigs;

}
