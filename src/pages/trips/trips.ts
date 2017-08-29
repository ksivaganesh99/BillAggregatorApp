import { Component } from '@angular/core';
import { NavController , App } from 'ionic-angular';
import { AddTripPage } from '../addtrip/addtrip';
import { LoginPage } from '../login/login';
import { BillsPage } from '../bills/bills';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api-provider';
 
@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
 public name: string = "Australia Trip";
 public loggedname:string;
 public tripdata;
  constructor(public navCtrl: NavController , private _app: App, private _storage:Storage, private apiprovider:ApiProvider) {
     this.apiprovider.apicall('trips','get','PavanAllu@tcs.com').then(data=>{ this.tripdata = data});
   console.log("tripdata"+this.tripdata);
  }
 ionViewDidLoad() {
    this._storage.get('name').then((val)=>{this.loggedname = val});
  }
  addtrip(){
    
    this.navCtrl.push(AddTripPage,{userid : this.loggedname});
  }
 
  billspage(sample){
  this.navCtrl.push(BillsPage,{ name : sample});
  }

}
