import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SgSelectComponent } from './sg-select.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	declarations: [
		SgSelectComponent
	],
	exports: [
		SgSelectComponent
	],
})
export class SgSelectModule { }
