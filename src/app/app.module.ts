import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailComponent } from './email/email.component';
import { MailSystemComponent } from './mail-system/mail-system.component';
import { YouTubeComponent } from './you-tube/you-tube.component';
import { BookComponent } from './book/book.component';
import { MeeshoComponent } from './meesho/meesho.component';
import { DemoComponent } from './demo/demo.component';
import { PizzaWebsiteComponent } from './pizza-website/pizza-website.component';
import { ValidationComponent } from './validation/validation.component';
import { LolComponent } from './lol/lol.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    EmailComponent,
    MailSystemComponent,
    YouTubeComponent,
    BookComponent,
    MeeshoComponent,
    DemoComponent,
    PizzaWebsiteComponent,
    ValidationComponent,
    LolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
