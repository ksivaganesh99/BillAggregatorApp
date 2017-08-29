import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-addbill',
  templateUrl: 'addbill.html'
})
export class AddBillPage {
  public selected:string;
  public option: CameraOptions;
  constructor(public navCtrl: NavController,private camera: Camera) {
  this.option = {
  quality: 100,
  destinationType: this.camera.DestinationType.DATA_URL,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
  };
   this.selected = "addbill";
  }
  capturepic(){
    this.camera.getPicture(this.option).then((imageData)=>{
      let base64Image = 'data:image/jpeg;base64,'+ imageData;
    },(err)=>{
      alert(err);
    });
  }


}
