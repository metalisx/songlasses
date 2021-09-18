import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgAppComponent } from './sg-app.component';
import { SgSidebarMenuModule } from '../sg-sidebar-menu/sg-sidebar-menu.module';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		SgSidebarMenuModule
	],
	declarations: [
		SgAppComponent
	],
	exports: [
		SgAppComponent
	],
})
export class SgAppModule { }
