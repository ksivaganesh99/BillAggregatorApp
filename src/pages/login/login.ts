import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams , LoadingController , ToastController} from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { TripsPage } from '../trips/trips';
import { MainTabPage } from '../maintab/maintab';
import { RegisterPage } from '../register/register';
import { config,CognitoIdentity,CognitoIdentityCredentials,CognitoIdentityServiceProvider } from 'aws-sdk';

declare let gapi: any;
declare let AWSCognito: any;

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage {
 public username:any;
 public password:any;
 public authent:any;
 public  googleUser = {};
 private myForm : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _storage:Storage,public loadingCtrl: LoadingController, private formBuilder:FormBuilder, public toastCtrl: ToastController) {
    this.authent = "";
    this.myForm = this.formBuilder.group({
    username: ['',Validators.required],
    password: ['', Validators.required],
    
    });
    
  }

  ionViewDidLoad() {
    this.startApp();
    console.log('ionViewDidLoad LoginPage');
  }
   presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  presentLoading() {
   var load =  this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    load.present();
    return load;
  }
  Login(){
   let load = this.presentLoading();
       
    var authenticationData = {
        Username : this.username,
        Password : this.password,
    };
    var authenticationDetails = new AWSCognito.CognitoIdentityServiceProvider.AuthenticationDetails(authenticationData);
   var poolData = {
    UserPoolId : 'ap-south-1_HrQ0yIVPE', // your user pool id here
    ClientId : '5mfp9tqebsiuggf5ab9go10jt6' // your app client id here
};
    var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
    var userData = {
        Username : this.username,
        Pool : userPool
    };
    var cognitoUser = new AWSCognito.CognitoIdentityServiceProvider.CognitoUser(userData);
    cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess:  (result) => {
            console.log('access token + ' + result.getAccessToken().getJwtToken());

            //POTENTIAL: Region needs to be set if not already set previously elsewhere.
            AWSCognito.config.region = 'ap-south-1';
            console.log(result);
            AWSCognito.config.credentials = new AWSCognito.CognitoIdentityCredentials({
                IdentityPoolId : 'ap-south-1:f30aa170-5ea2-44fd-ad5c-f1178aea3258', // your identity pool id here
                Logins : {
                    // Change the key below according to the specific region your user pool is in.
                    'cognito-idp.ap-south-1.amazonaws.com/ap-south-1_rWx2iAUs2' : result.getIdToken().getJwtToken()
                }
            });
                  load.dismiss();
                  console.log("username"+this.username);
                  this._storage.set('name', this.username);
                  this.navCtrl.setRoot(MainTabPage);
            // Instantiate aws sdk service objects now that the credentials have been updated.
            // example: var s3 = new AWS.S3();

        },

        onFailure: (err) => {
           load.dismiss();
           this.presentToast("Incorrect username or password");
            
        },

    });

  
   
  }
  Register(){

    this.navCtrl.push(RegisterPage);
  }

 
   public startApp() {
    gapi.load('auth2', ()=>{
      // Retrieve the singleton for the GoogleAuth library and set up the client.
      this.authent = gapi.auth2.init({
        client_id: '850213730550-6v8gm0t1ai81r5dll04oc6rof8j4m682.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        // Request scopes in addition to 'profile' and 'email'
        //scope: 'additional_scope'
      });
      this.attachSignin(document.getElementById('customBtn'));
    });
    
  }

   private attachSignin(element) {
    console.log(element.id);
    this.authent.attachClickHandler(element, {},
        (googleUser) => {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
                this._storage.set('name', googleUser.getBasicProfile().getName());
            this.navCtrl.setRoot(MainTabPage);

        }, function(error) {
          alert(JSON.stringify(error, undefined, 2));
        });
  }

 
 
 /* signinCallback(authResult) {
  if (authResult['status']['signed_in']) {

     // Add the Google access token to the Cognito credentials login map.
     config.credentials = new CognitoIdentityCredentials({
        IdentityPoolId: 'IDENTITY_POOL_ID',
        Logins: {
           'accounts.google.com': authResult['id_token']
        }
     });

     // Obtain AWS credentials
     config.credentials.get(function(){
        // Access AWS resources here.
     });
  }
}*/



}
