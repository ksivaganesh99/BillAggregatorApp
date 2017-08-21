import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AddBillPage } from '../addbill/addbill';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-bills',
  templateUrl: 'bills.html'
})
export class BillsPage {
  public pagehead:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  if(this.navParams.get('name')){
    this.pagehead = this.navParams.get('name');
  }else{
    this.pagehead = "Trip";
  }
  }
addbill(){
  this.navCtrl.push(TabsPage);
}


}
