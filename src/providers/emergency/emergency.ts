
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class EmergencyProvider {

  private PATH='emergencys/';

  constructor(private db: AngularFireDatabase) {
   
  }

  getAll(){
    return this.db.list(this.PATH)
    .snapshotChanges()
    .map(changes => {
      return changes.map( e => ({
        key: e.payload.key, ...e.payload.val()

      }));
    })
  }

  get(key: string){
    return this.db.object(this.PATH + key)
    .snapshotChanges()
    .map(e => {
      return {key: e.key, ...e.payload.val()};
    })
  }

  save(emergency: any){
    return new Promise((resolve, reject ) => {
      if(emergency.key){
        this.db.list(this.PATH)
        .update(emergency.key, {name: emergency.name, tel: emergency.tel})
        .then(()=> resolve())
        .catch((e) => reject(e));
      }

      else{
        this.db.list(this.PATH)
        .push({name: emergency.name, tel: emergency.tel})
        .then(()=> resolve());
      }

    });
  }

  remove(key: string){
    return this.db.list(this.PATH).remove(key);
  }

}
