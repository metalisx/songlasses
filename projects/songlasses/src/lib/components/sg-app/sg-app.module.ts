import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SgAppComponent } from './sg-app.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule
	],
	declarations: [
		SgAppComponent
	],
	exports: [
		SgAppComponent
	],
})
export class SgAppModule { }
