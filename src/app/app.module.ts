import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SgAppModule } from 'songlasses';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // songlasses
    SgAppModule	
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
