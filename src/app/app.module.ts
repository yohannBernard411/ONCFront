import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';
import { ReverseButtonComponent } from './reverse-button/reverse-button.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReverseButtonComponent,
    AccueilComponent,
    BoutiqueComponent,
    ArticlesComponent
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
