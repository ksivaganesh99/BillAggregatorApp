import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TripsPage } from '../trips/trips';



@Component({
  selector : 'page-maintab',
  templateUrl: 'maintab.html'
})
export class MainTabPage {

  rootPage = TripsPage;
  tab2Root = TripsPage;
  tab3Root = TripsPage;

  constructor(public navCtrl: NavController) {

  }
  openPage(page){
 this.navCtrl.setRoot(page);

  }
  
}
