import { Component } from '@angular/core';
import { NavController , App} from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TripsPage } from '../trips/trips';
import { LoginPage } from '../login/login';

declare let gapi: any;

@Component({
  selector : 'page-maintab',
  templateUrl: 'maintab.html'
})
export class MainTabPage {
  public auth2:any;

  rootPage = TripsPage;
  tab2Root = TripsPage;
  tab3Root = TripsPage;

  constructor(public navCtrl: NavController, private _app : App , private _storage:Storage) {
    this._storage.get('name').then((val)=>{console.log(val);});
  }
  openPage(page){
 this._app.getActiveNav().setRoot(page);

  }
   logout(){
    //const root = this._app.getRootNavById('root-nav');
   // root.

     this.auth2 = gapi.auth2.getAuthInstance();
     console.log(this.auth2);
     this.auth2.disconnect();
    this.auth2.signOut().then( ()=> {
      console.log('User signed out.');
       this.navCtrl.setRoot(LoginPage);
       window.location.reload();
    });
  
   
    //this.navCtrl.setRoot(LoginPage);
    //window.location.reload();
   // this.navCtrl.push(LoginPage);
  }
  
}
