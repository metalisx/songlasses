import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SgSelectComponentConfig } from '../../models/sg-select/sg-select-component-config.model';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SgSelectComponent),
      multi: true
    }
  ]    
})
export class SgSelectComponent implements ControlValueAccessor, OnInit {

  private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
  private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';

  @Input() sgSelectComponentConfig: SgSelectComponentConfig = {
    name: '',
    itemsValueField: SgSelectComponent.DEFAULT_ITEMS_VALUE_FIELD,
    itemsDescriptionField: SgSelectComponent.DEFAULT_ITEMS_DESCRIPTION_FIELD,
    items: []
  };

  private internalValue: any;

  selectedItem?: any;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  set value(value: any){
    if (value !== undefined && this.internalValue !== value) {
      this.internalValue = value;
      if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
        this.selectedItem = this.sgSelectComponentConfig.items
          .find((item: any) => item[this.sgSelectComponentConfig.itemsValueField] === value);
        let externalValue: any = this.selectedItem ? this.selectedItem[this.sgSelectComponentConfig.itemsValueField] : null;
        this.onChange(externalValue);
        this.onTouched(externalValue);
      }
    }
  }

  get value() {
    return this.internalValue;
  }

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(disabled: boolean): void {
    this.disabled = disabled;
  }

  select(item: any): void {
    if (this.sgSelectComponentConfig) {
      this.value = item[this.sgSelectComponentConfig.itemsValueField];
    }
  }


}
