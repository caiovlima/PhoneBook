
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { ContactProvider } from '../../providers/contact/contact';
import { AngularFireDatabase } from 'angularfire2/database';
import { query } from '@angular/core/src/animation/dsl';
import { ContactPage } from './../contact/contact';

@IonicPage()
@Component({
  selector: 'page-add-contact',
  templateUrl: 'add-contact.html',
})
export class AddContactPage {

  title: string;
  form: FormGroup;
  contact: any;




  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private provider: ContactProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.contact = this.navParams.data || {};
      this.createForm();
      this.setupPageTitle();
  }

  private setupPageTitle(){
    this.title = this.navParams.data.contact ?'Alterando contato' : 'Novo Contato';
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.contact.key],
      name: [this.contact.name, Validators.required],
      tel: [this.contact.tel, Validators.required],

    });
  }

  onSubmit(){
    if(this.form.valid){
      this.provider.save(this.form.value)
      .then(() => {
        this.toast.create({message: 'Contact has been saved.', duration: 3000}).present();
        this.navCtrl.pop();
      })
      .catch((e)=>{
        this.toast.create({message: 'Error when try to saving yout contact.', duration: 3000}).present();
        console.error(e);
      });
    }
  }

 
}