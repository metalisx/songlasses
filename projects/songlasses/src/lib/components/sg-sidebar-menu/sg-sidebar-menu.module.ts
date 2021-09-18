import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgSidebarMenuComponent } from './sg-sidebar-menu.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SgSidebarMenuComponent
	],
	exports: [
		SgSidebarMenuComponent
	],
})
export class SgSidebarMenuModule { }
