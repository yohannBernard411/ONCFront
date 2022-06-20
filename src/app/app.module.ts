import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { WhoComponent } from './who/who.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConditionComponent } from '../../condition/condition.component';
import { ContactComponent } from './contact/contact.component';
import { LinComponent } from './lin/lin.component';
import { LabelComponent } from './label/label.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhoComponent,
    NavbarComponent,
    ConditionComponent,
    ContactComponent,
    LinComponent,
    LabelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
