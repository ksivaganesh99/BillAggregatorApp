import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TripsPage } from '../trips/trips';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TripsPage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
