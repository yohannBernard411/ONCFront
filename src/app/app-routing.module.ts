import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccueilComponent } from './accueil/accueil.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { ArticlesComponent } from './articles/articles.component';


const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'articles', component: ArticlesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
