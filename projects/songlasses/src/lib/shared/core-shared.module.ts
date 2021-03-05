import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * A shared module with common modules, components, directives and pipes to be imported by only the modules that
 * uses them. They are not app-wide like the CoreModule and for this reason it is not allowed to specify providers.
 * See https://angular.io/guide/ngmodule-faq#q-why-bad.
 */
@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ]
})
export class CoreSharedModule { }
