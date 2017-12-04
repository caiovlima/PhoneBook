
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ContactProvider } from '../../providers/contact/contact';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { Observable } from 'rxjs/Observable';
import { AddContactPage } from './../add-contact/add-contact';




@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  contacts: Observable<any>;
  
  
    constructor(
      private provider: ContactProvider,
      private toast: ToastController,
      public navCtrl: NavController) {
        this.contacts = this.provider.getAll();
  
    }
  
    

    newContact(){
      this.navCtrl.push('AddContactPage');
    }
  
    editContact(contact: any){
      this.navCtrl.push('AddContactPage', {contact: contact});
    }
  
    removeContact(key: string){
      this.provider.remove(key)
      .then(()=>{
        this.toast.create({message: 'Contact was removed.', duration: 3000}).present();
  
      })
      .catch((e)=>{
        this.toast.create({message: 'Error occured when try to remove contact.', duration: 3000}).present();
      });
  
    }
  }
