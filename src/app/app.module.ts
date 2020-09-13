import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'

var firebaseConfig = {
  apiKey: "AIzaSyBd2el9cVdQ8EtE_utGax2AbHv8ccb8g8s",
  authDomain: "forpup-ddfd9.firebaseapp.com",
  databaseURL: "https://forpup-ddfd9.firebaseio.com",
  projectId: "forpup-ddfd9",
  storageBucket: "forpup-ddfd9.appspot.com",
  messagingSenderId: "691100841226",
  appId: "1:691100841226:web:fa321588416639d8b9b6f3",
  measurementId: "G-Y7FFF87KQH"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig), AngularFireAuthModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
