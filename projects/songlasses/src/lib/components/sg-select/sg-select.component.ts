import { Component, ElementRef, forwardRef, HostListener, Input, OnInit } from '@angular/core';
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
    items: [],
    className: ''
  };

  private internalValue: any;

  selectedItem?: any;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  showItems: boolean = false;

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.elementRef.nativeElement.contains(event.target) && this.showItems === true) {
      this.doHideItems();
    }
  }

  private selectedIndex(): number {
    let index = -1;
    if (this.selectedItem && this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items) {
      for (let i=0; i<this.sgSelectComponentConfig.items.length; i++) {
        if (this.sgSelectComponentConfig.items[i][this.sgSelectComponentConfig.itemsValueField] === 
            this.selectedItem[this.sgSelectComponentConfig.itemsValueField]) {
              index = i;
              break;
        }
      }
    }
    return index;
  }

  private selectPrevious(): void {
    let index = this.selectedIndex();
    if (index !== -1 && index !== 0) {
      this.value = this.sgSelectComponentConfig.items[index - 1][this.sgSelectComponentConfig.itemsValueField];
    }
  }

  private selectNext(): void {
    let index = this.selectedIndex();
    if (index !== -1 && this.sgSelectComponentConfig.items && index != this.sgSelectComponentConfig.items.length -1) {
      this.value = this.sgSelectComponentConfig.items[index + 1][this.sgSelectComponentConfig.itemsValueField];
    }
  }

  keydownArrowup(event: any) {
    if (this.showItems === true) {
      this.selectPrevious();
      return false;
    }
    return;
  }

  keydownArrowdown(event: any) {
    if (this.showItems === true) {
      this.selectNext();
      return false;
    }
    return;
  }

  keyupEsc(event: any){
    this.toggleItems();
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
    this.doHideItems();
  }

  toggleItems(): void {
    this.showItems == true ? this.doHideItems() : this.doShowItems();
  }

  doShowItems(): void {
    this.showItems = true;
  }

  doHideItems(): void {
    this.showItems = false;
  }

}
