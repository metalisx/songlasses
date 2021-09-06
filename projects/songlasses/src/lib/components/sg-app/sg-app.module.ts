import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgAppComponent } from './sg-app.component';
import { SgSidebarMenuComponent } from '../sg-sidebar-menu/sg-sidebar-menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SgAppComponent,
		SgSidebarMenuComponent
	],
	exports: [
		SgAppComponent,
		SgSidebarMenuComponent
	],
})
export class SgAppModule { }
