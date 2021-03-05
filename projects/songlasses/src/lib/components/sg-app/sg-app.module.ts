import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgAppComponent } from './sg-app.component';
import { SgAppFooterComponent } from '../sg-app-footer/sg-app-footer.component';
import { SgAppHeaderComponent } from '../sg-app-header/sg-app-header.component';
import { SgSidebarComponent } from '../sg-sidebar/sg-sidebar.component';
import { SgSidebarHamburgerComponent } from '../sg-sidebar-hamburger/sg-sidebar-hamburger.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SgAppComponent,
		SgAppFooterComponent,
		SgAppHeaderComponent,
		SgSidebarComponent,
		SgSidebarHamburgerComponent
	],
	exports: [
		SgAppComponent,
		SgAppFooterComponent,
		SgAppHeaderComponent,
		SgSidebarComponent,
		SgSidebarHamburgerComponent
	],
})
export class SgAppModule { }
