import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactPage } from '../contact/contact';
import { TabsPage } from '../tabs/tabs';
import { EmergencyPage } from '../emergency/emergency';
import { HomePage } from '../home/home';
import { AddContactPage } from '../add-contact/add-contact';
import { AddEmergencyPage } from '../add-emergency/add-emergency';


@NgModule({
  declarations: [
    
    EmergencyPage
  ],
  imports: [
    IonicPageModule.forChild(EmergencyPage),
    
  ],
})
export class EmergencyPageModule {}
