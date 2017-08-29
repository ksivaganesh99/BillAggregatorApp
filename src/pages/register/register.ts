import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { ToastController, LoadingController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { TripsPage } from '../trips/trips';
import { MainTabPage } from '../maintab/maintab';
import { config,CognitoIdentity,CognitoIdentityCredentials,CognitoIdentityServiceProvider } from 'aws-sdk';

declare let AWSCognito: any;

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})

export class RegisterPage {
 username:string;
 emailid:any;
 password1:any;
 userPool:any;
 cognitoUser:any;
private myForm1 : FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private _storage:Storage, public toastCtrl: ToastController,public loadingCtrl: LoadingController, private formBuilder:FormBuilder) {
    
     this.myForm1 = this.formBuilder.group({
    username: ['',Validators.required],
     emailid: ['', Validators.required],
    password: ['', Validators.required],
    
    });

        AWSCognito.config.region = 'ap-south-1';
     
var poolData = {
    UserPoolId : 'ap-south-1_HrQ0yIVPE', // your user pool id here
    ClientId : '5mfp9tqebsiuggf5ab9go10jt6' // your app client id here
};
 this.userPool = 
new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
  }
   presentLoading() {
   var load =  this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    load.present();
    return load;
  }
   presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
    toast.present();
  }
register(){
 let load = this.presentLoading();
  // alert(this.username);
   //this.navCtrl.push(MenuPage);
	 var attributeList = [];
   // alert("Password"+this.password1);
	var dataName = {
        Name : 'name',
        Value : this.username
    };
    var dataEmail = {
        Name : 'email',
        Value : this.emailid
    };
    
   
	
    var attributeName = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataName);
    var attributeEmail = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserAttribute(dataEmail);
	
    

   // attributeList.push(attributeName);
    attributeList.push(attributeEmail);
	//attributeList.push(attributePhoneNumber);
  //	attributeList.push(attributeMobileNumber);
	//attributeList.push(attributeMotherName);
	//attributeList.push(attributeStandard);
  console.log(attributeList);
    this.userPool.signUp(this.username.replace(/\s+/g, ''),this.password1, attributeList, null,(err, result) => {
        if (err) {
        load.dismiss();
        console.log("user signup error:"+ err);
         this.presentToast(err);
            //alert(err);
            return;
        }
        this.presentToast('Registered successfully. Please login');
        console.log(result.user);
        let cognitoUser = result.user;
        console.log(cognitoUser.username);
        console.log('user name is ' + cognitoUser.getUsername());
       // this.showAlert();
        this.navCtrl.setRoot(LoginPage);
        
    });
	
}



login(){
this.navCtrl.setRoot(LoginPage);
}

}
