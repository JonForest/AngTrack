import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { TaskCaptureComponent } from './task-capture/task-capture.component';

// Initialize Firebase
export const firebaseConfig =  {
  apiKey: "AIzaSyDEHO98P-6dL6--a1AWbEcTDGoRnWw8OkY",
  authDomain: "angtask-83a25.firebaseapp.com",
  databaseURL: "https://angtask-83a25.firebaseio.com",
  storageBucket: "angtask-83a25.appspot.com",
  messagingSenderId: "491654909051"
};

@NgModule({
  declarations: [
    AppComponent,
    TaskCaptureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
