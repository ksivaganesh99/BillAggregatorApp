import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AddTripPage } from '../addtrip/addtrip';
import { LoginPage } from '../login/login';
import { BillsPage } from '../bills/bills';
 
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
 public name: string = "Australia Trip";
  constructor(public navCtrl: NavController , private _app: App) {
   
  }

  addtrip(){
   
    this.navCtrl.push(AddTripPage);
  }
 
  billspage(sample){
  this.navCtrl.push(BillsPage,{ name : sample});
  }

}
