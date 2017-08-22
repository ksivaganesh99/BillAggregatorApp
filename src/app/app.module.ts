import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicStorageModule } from '@ionic/storage';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';


import { TripsPage } from '../pages/trips/trips';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AddTripPage } from '../pages/addtrip/addtrip';
import { BillsPage } from '../pages/bills/bills';
import { AddBillPage } from '../pages/addbill/addbill';
import { MainTabPage } from '../pages/maintab/maintab';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



@NgModule({
  declarations: [
    MyApp,
    TripsPage,
    TabsPage,
    LoginPage,
    AddTripPage,
    BillsPage,
    AddBillPage,
    MainTabPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TripsPage,
    TabsPage,
    LoginPage,
    AddTripPage,
    BillsPage,
    AddBillPage,
    MainTabPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
