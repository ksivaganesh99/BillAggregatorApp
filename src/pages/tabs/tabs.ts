import { Component } from '@angular/core';

import { AddBillPage } from '../addbill/addbill';
import { AddBillPhotoPage } from '../addbillphoto/addbillphoto';
import { AddBillUploadPage } from '../addbillupload/addbillupload';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddBillPage;
  tab2Root = AddBillPhotoPage;
  tab3Root = AddBillUploadPage;

  constructor() {

  }
  
}
