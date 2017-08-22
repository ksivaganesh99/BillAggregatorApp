import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-addbill',
  templateUrl: 'addbill.html'
})
export class AddBillPage {
  public selected:string;
  constructor(public navCtrl: NavController) {
   this.selected = "addbill";
  }

}
