import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { EmailComponent } from './email/email.component';
import { LolComponent } from './lol/lol.component';
import { MailSystemComponent } from './mail-system/mail-system.component';
import { MeeshoComponent } from './meesho/meesho.component';
import { PizzaWebsiteComponent } from './pizza-website/pizza-website.component';
import { ValidationComponent } from './validation/validation.component';
import { YouTubeComponent } from './you-tube/you-tube.component';

const routes: Routes = [
  {
    path:'mail',
    component:MailSystemComponent
  },
  {
    path:'u',
    component:YouTubeComponent
  },
  {
    path:'book',
    component:BookComponent
  },
  {
    path:'meesho',
    component:MeeshoComponent
  },
  {
    path:'pizza',
    component:PizzaWebsiteComponent
  },
  {
    path:'email',
    component:EmailComponent
  },
  {
    path:'pwd',
    component:ValidationComponent
  },
  {
    path:'',
    component:LolComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }