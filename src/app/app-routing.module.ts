import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhoComponent } from './who/who.component';
import { ConditionComponent } from '../../condition/condition.component';
import { ContactComponent } from './contact/contact.component';
import { LinComponent } from './lin/lin.component';
import { LabelComponent } from './label/label.component';


const routes: Routes = [
  { path: 'label', component: LabelComponent },
  { path: 'lin', component: LinComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'condition', component: ConditionComponent },
  { path: 'who', component: WhoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
