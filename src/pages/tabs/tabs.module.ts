import { AddEmergencyPage } from './../add-emergency/add-emergency';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabsPage } from './tabs';
import { ContactPage } from '../contact/contact';
import { EmergencyPage } from '../emergency/emergency';
import { HomePage } from '../home/home';
import { AddContactPage } from '../add-contact/add-contact';

@NgModule({
  declarations: [
    TabsPage,
    HomePage,
    EmergencyPage,
    ContactPage,
    AddContactPage,
    AddEmergencyPage
    
  ],
  imports: [
    IonicPageModule.forChild(TabsPage),
  ],
})
export class TabsPageModule {}
