import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';

export const firebaseConfig = {
    apiKey: "AIzaSyBZ9Wd6jQLx48MmR6q97NKzujKymhIBEj4",
    authDomain: "torrid-heat-2560.firebaseapp.com",
    databaseURL: "https://torrid-heat-2560.firebaseio.com",
    projectId: "torrid-heat-2560",
    storageBucket: "torrid-heat-2560.appspot.com",
    messagingSenderId: "256059146284"
};

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
