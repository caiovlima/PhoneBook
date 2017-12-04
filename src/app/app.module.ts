

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';

import { ContactPage } from '../pages/contact/contact';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { EmergencyPage } from '../pages/emergency/emergency';
import { TabsPage } from './../pages/tabs/tabs';
import { ContactProvider } from '../providers/contact/contact';
import { EmergencyProvider } from '../providers/emergency/emergency';

import { AddEmergencyPage } from '../pages/add-emergency/add-emergency';

import { AddContactPage } from './../pages/add-contact/add-contact';

@NgModule({
  declarations: [
    
    MyApp,
    HomePage,
    TabsPage,
    ContactPage,
    EmergencyPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCA3tF4Ko8ZLYZ03YKuTwjOzw-kJmE5fBg",
      authDomain: "phonebook-bb188.firebaseapp.com",
      databaseURL: "https://phonebook-bb188.firebaseio.com",
      projectId: "phonebook-bb188",
      storageBucket: "phonebook-bb188.appspot.com",
      messagingSenderId: "790501174980"

    }),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    ContactPage,
    EmergencyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactProvider,
    EmergencyProvider,
   
    
  ]
})
export class AppModule {}
