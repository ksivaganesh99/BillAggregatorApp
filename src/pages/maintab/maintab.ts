import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { TripsPage } from '../trips/trips';
import { LoginPage } from '../login/login';


@Component({
  selector : 'page-maintab',
  templateUrl: 'maintab.html'
})
export class MainTabPage {

  rootPage = TripsPage;
  tab2Root = TripsPage;
  tab3Root = TripsPage;

  constructor(public navCtrl: NavController, private _app : App) {

  }
  openPage(page){
 this._app.getActiveNav().setRoot(page);

  }
   logout(){
    //const root = this._app.getRootNavById('root-nav');
   // root.
    this.navCtrl.setRoot(LoginPage);
    //this.navCtrl.setRoot(LoginPage);
    //window.location.reload();
   // this.navCtrl.push(LoginPage);
  }
  
}
