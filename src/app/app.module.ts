import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireDatabaseModule } from 'angularfire2/database';


var config = {
    apiKey: "AIzaSyAPC6QZlSB-DlhThLVgplocqfMc1DmKoYY",
    authDomain: "bharatdronamaps-34a66.firebaseapp.com",
    databaseURL: "https://bharatdronamaps-34a66.firebaseio.com",
    projectId: "bharatdronamaps-34a66",
    storageBucket: "bharatdronamaps-34a66.appspot.com",
    messagingSenderId: "931822472715"
  };


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
