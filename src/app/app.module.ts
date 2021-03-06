import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {AngularFireModule} from 'angularfire2';

import { AppComponent } from './app.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AboutComponent } from './about/about.component';

import {ContactService} from './contact.service';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

export const firebaseConfig = {
  apiKey: "AIzaSyCks_pUoLT9q8MRA42WCbZLLtwdnuHIhY8",
  authDomain: "contacts-troy.firebaseapp.com",
  databaseURL: "https://contacts-troy.firebaseio.com",
  storageBucket: "contacts-troy.appspot.com",
  messagingSenderId: "816795509968"
};

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    AboutComponent,
    ContactDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
