import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from './../tabs/tabs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  backgrounds = [
    'assets/imgs/background-1.jpg',
    'assets/imgs/background-2.jpg',
    'assets/imgs/background-3.jpg',
    'assets/imgs/background-4.jpg',
    'assets/imgs/background-5.jpg',
    'assets/imgs/background-6.jpg'
  ];

  constructor(public navCtrl: NavController) {

  }

  goToTabs(){
    this.navCtrl.push(TabsPage);
  }

}
