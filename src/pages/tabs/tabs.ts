
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ContactPage } from '../contact/contact';


import { EmergencyPage } from './../emergency/emergency';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

tab1Root: any;
tab2Root: any;



constructor() {

 
  this.tab1Root = ContactPage;
  this.tab2Root = EmergencyPage;


}

}
