import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgAppComponent } from './sg-app.component';
import { SgSidebarMenuComponent } from '../sg-sidebar-menu/sg-sidebar-menu.component';
import { SgSidebarHamburgerComponent } from '../sg-sidebar-hamburger/sg-sidebar-hamburger.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SgAppComponent,
		SgSidebarMenuComponent,
		SgSidebarHamburgerComponent
	],
	exports: [
		SgAppComponent,
		SgSidebarMenuComponent,
		SgSidebarHamburgerComponent
	],
})
export class SgAppModule { }
