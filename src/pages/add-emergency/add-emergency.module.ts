import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { EmergencyPage } from '../emergency/emergency';

import { TabsPage } from '../tabs/tabs';
import { HomePage } from '../home/home';
import { AddEmergencyPage } from './add-emergency';

import { AddContactPage } from '../add-contact/add-contact';

@NgModule({
  declarations: [
    
    AddEmergencyPage
  ],
  imports: [
    IonicPageModule.forChild(AddEmergencyPage),
    
  ],
})
export class AddEmergencyPageModule {}
