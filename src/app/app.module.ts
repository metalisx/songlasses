import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SgSidebarMenuModule } from 'songlasses';
import { SgAppModule } from 'songlasses';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent,  } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    // songlasses
    SgAppModule,
    SgSidebarMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
