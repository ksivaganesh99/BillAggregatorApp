import { Component } from '@angular/core';

import { AddBillPage } from '../addbill/addbill';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AddBillPage;
  tab2Root = AddBillPage;
  tab3Root = AddBillPage;

  constructor() {

  }
  
}
