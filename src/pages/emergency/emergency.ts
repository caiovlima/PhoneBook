import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { EmergencyProvider } from '../../providers/emergency/emergency';



@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  emergencys: Observable<any>;

  constructor(
    private provider: EmergencyProvider,
    private toast: ToastController,
    public navCtrl: NavController) {
      this.emergencys = this.provider.getAll();

  }

  

  newEmergency(){
    this.navCtrl.push('AddEmergencyPage');
  }

  editEmergency(emergency: any){
    this.navCtrl.push('AddEmergencyPage', {emergency: emergency});
  }

  removeEmergency(key: string){
    this.provider.remove(key)
    .then(()=>{
      this.toast.create({message: 'emergency was removed.', duration: 3000}).present();

    })
    .catch((e)=>{
      this.toast.create({message: 'Error occured when try to remove emergency.', duration: 3000}).present();
    });

  }
}