import { Component } from '@angular/core';
import { URLSearchParams , Headers} from "@angular/http"
import { NavController , NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api-provider';

@Component({
  selector: 'page-addtrip',
  templateUrl: 'addtrip.html'
})
export class AddTripPage {
public tripname:string;
public tripdate;
public userid;
  constructor(public navCtrl: NavController, private apiprovider:ApiProvider,  public navParams: NavParams) {
       if (!this.navParams.get('userid')) {
    this.userid = 'Have some ice cream =)';
  } else {
    this.userid = 'empty';
  }
  }
  savetrip(){
      var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let urlSearchParams = new URLSearchParams();
        urlSearchParams.append('user_id', 'PavanAllu@tcs.com');
        urlSearchParams.append('trip_name', this.tripname);
        urlSearchParams.append('trip_date', this.tripdate);
    console.log(this.tripname);
    
     let body = urlSearchParams.toString()
    console.log(body);
    this.apiprovider.apicall('trips','post',body).then(data=>{console.log(data);})
  }


}
