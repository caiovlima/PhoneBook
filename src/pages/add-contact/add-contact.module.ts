import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddContactPage } from './add-contact';

import { EmergencyPage } from '../emergency/emergency';

import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';

import { AddEmergencyPage } from '../add-emergency/add-emergency';
import { ContactPage } from '../contact/contact';

@NgModule({
  declarations: [
    
    AddContactPage
  ],
  imports: [
    IonicPageModule.forChild(AddContactPage),
  ],
})
export class AddContactPageModule {}
