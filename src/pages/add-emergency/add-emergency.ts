import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { EmergencyProvider } from '../../providers/emergency/emergency';



@IonicPage()
@Component({
  selector: 'page-add-emergency',
  templateUrl: 'add-emergency.html',
})
export class AddEmergencyPage {

  title: string;
  form: FormGroup;
  emergency: any;




  constructor(
    private db: AngularFireDatabase,
    private formBuilder: FormBuilder,
    private toast: ToastController,
    private provider: EmergencyProvider,
    public navCtrl: NavController, 
    public navParams: NavParams) {

      this.emergency = this.navParams.data || {};
      this.createForm();
      this.setupPageTitle();
  }

  private setupPageTitle(){
    this.title = this.navParams.data.emergency ?'Edit Emergency Contact' : 'New Emergency Contact';
  }

  createForm(){
    this.form = this.formBuilder.group({
      key: [this.emergency.key],
      name: [this.emergency.name, Validators.required],
      tel: [this.emergency.tel, Validators.required],

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