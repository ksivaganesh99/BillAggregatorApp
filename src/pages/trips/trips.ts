import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddTripPage } from '../addtrip/addtrip';

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {

  constructor(public navCtrl: NavController) {

  }

  addtrip(){
   
    this.navCtrl.push(AddTripPage);
  }

}
