import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { EmergencyPage } from '../emergency/emergency';
import { HomePage } from '../home/home';
import { AddContactPage } from '../add-contact/add-contact';

import { AddEmergencyPage } from '../add-emergency/add-emergency';
import { ContactPage } from './contact';


@NgModule({
  declarations: [
    ContactPage
  ],
  imports: [
    IonicPageModule.forChild(ContactPage),
    
  ],
})
export class ContactPageModule {}
