import { Component } from '@angular/core';
import { NavController, NavParams , App} from 'ionic-angular';
import { AddBillPage } from '../addbill/addbill';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {
  public pagehead:string;
  constructor(public navCtrl: NavController, public navParams: NavParams,  private _app : App) {
 
  if(this.navParams.get('name')){
    this.pagehead = this.navParams.get('name');
  }else{
    this.pagehead = "Trip";
  }
  }
addbill(){
 //this._app.getActiveNav().setRoot(AddBillPage);
  this.navCtrl.push(AddBillPage);
}


}
