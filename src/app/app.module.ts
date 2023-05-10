import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UsageComponent } from './components/usage/usage.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormGroup, FormControl } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    UsageComponent,
    FooterComponent,
    FormControl,
    FormGroup

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
