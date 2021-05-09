import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
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

  valid: boolean = true;
  
  @Input() sgSelectComponentConfig?: SgSelectComponentConfig;

  @ViewChild('input') inputElement?: ElementRef;

  private internalValue: any;

  item?: any;
  selectedItem?: any;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  showItems: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.sgSelectComponentConfig = this.sgSelectComponentConfig || {
      name: 'name',
      required: true,
      itemMatchStrategy: 'startsWith',
      itemValueField: SgSelectComponent.DEFAULT_ITEMS_VALUE_FIELD,
      itemDescriptionField: SgSelectComponent.DEFAULT_ITEMS_DESCRIPTION_FIELD,
      items: [],
      className: ''
    };
  }

  isRequired() {
    let required = true;
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.required !== undefined && this.sgSelectComponentConfig.required === true) {
      required = true;
    }
    return required;
  }

  click(event: Event) {
    if (!this.showItems) {
      this.doShowItems();
    }
  }

  keydown(event: KeyboardEvent) {
    let returnValue = true;
    switch(event.key) {
      case 'ArrowDown': {
        this.keydownArrowdown();
        returnValue = false;
        break;
      }
      case 'ArrowUp': {
        this.keydownArrowup();
        returnValue = false;
        break;
      }
      case 'Tab': {
        this.doHideItems();
        break;
      }
      default: {
        break;
      }
    }
    return returnValue;
  }

  keyup(event: KeyboardEvent) {
    let returnValue: boolean = true;
    switch(event.key) {
      case 'Enter': {
        if (this.showItems) {
          this.setValueFromSelectedItem();
          this.doHideItems();
        }
        break;
      }
      case 'Escape': {
        this.doHideItems();
        break;
      }
      default: {
        break;
      }
    }
    return returnValue;
  }

  set value(value: any) {
    if (value !== undefined && value !== "") {
      if (this.internalValue !== value) {
        this.internalValue = value;
        this.setItemByDescription(value);
        this.setExternalValue(value);
        if (this.showItems) {
          this.setSelectedItem(value);
        }
      }
    } else {
      this.item = null;
      this.internalValue = null;
      let externalValue: any = null;
      this.onChange(externalValue);
      this.onTouched(externalValue);
    }
  }

  get value() {
    return this.internalValue;
  }

  writeValue(value: any): void {
    this.setItemByValue(value);
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField && this.item) {
       this.value = this.item[this.sgSelectComponentConfig.itemDescriptionField];
    }
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
    this.selectedItem = item;
    this.setValueFromSelectedItem();
    this.doHideItems();
    this.focusOnInputElement();
  }

  private setValueFromSelectedItem() {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField && this.selectedItem) {
      this.value = this.selectedItem[this.sgSelectComponentConfig.itemDescriptionField];
    }
  }

  isItem(item: any): boolean {
    return this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemValueField && this.item && 
            this.item[this.sgSelectComponentConfig.itemValueField] === item[this.sgSelectComponentConfig.itemValueField];
  }

  isSelectedItem(item: any): boolean {
    return this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemValueField && this.selectedItem && 
            this.selectedItem[this.sgSelectComponentConfig.itemValueField] === item[this.sgSelectComponentConfig.itemValueField];
  }

  doShowItems(): void {
    this.setSelectedItem(this.value);
    this.showItems = true;
  }

  doHideItems(): void {
    this.selectedItem = null;
    this.showItems = false;
  }

  private keydownArrowup() {
    if (!this.showItems) {
      this.doShowItems();
    } else {
      this.selectPrevious();
    }
  }

  private keydownArrowdown() {
    if (!this.showItems) {
      this.doShowItems();
    } else {
      this.selectNext();
    }
  }

  private setItemByValue(value: any) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemValueField) {
      this.setItemByProperty(value, this.sgSelectComponentConfig.itemValueField)
    }
  }

  private setItemByDescription(value: any) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField) {
      this.setItemByProperty(value, this.sgSelectComponentConfig.itemDescriptionField)
    }
  }

  private setItemByProperty(value: any, property: string) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
      this.item = this.sgSelectComponentConfig.items
        .find((item: any) => item[property] === value);
    }
  }

  private setSelectedItem(value: any) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
      let itemDescriptionField: string | undefined = this.sgSelectComponentConfig.itemDescriptionField;
      if (!this.sgSelectComponentConfig.itemMatchStrategy || 
          this.sgSelectComponentConfig.itemMatchStrategy === 'startsWith') {
        this.selectedItem = this.sgSelectComponentConfig.items
          .find((item: any) => {
              if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField) {
                return item[this.sgSelectComponentConfig.itemDescriptionField].search(new RegExp(value, "i")) === 0;
              }
              return undefined;
            });
      } else if (this.sgSelectComponentConfig.itemMatchStrategy === 'contains') {
        this.selectedItem = this.sgSelectComponentConfig.items
          .find((item: any) => {
              if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField) {
                return item[this.sgSelectComponentConfig.itemDescriptionField].search(new RegExp(value, "i")) !== -1
              }
              return undefined;
            });
      }
    }
  }

  private setExternalValue(value: any) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemValueField) {
      let externalValue: any = this.item ? this.item[this.sgSelectComponentConfig.itemValueField] : null;
      this.onChange(externalValue);
      this.onTouched(externalValue);
    }
  }

  private focusOnInputElement(): void {
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }

  private selectedIndex(): number {
    let index = -1;
    if (this.selectedItem && this.sgSelectComponentConfig && this.sgSelectComponentConfig.itemDescriptionField && 
      this.sgSelectComponentConfig.items && 
        this.sgSelectComponentConfig.items) {
      for (let i=0; i<this.sgSelectComponentConfig.items.length; i++) {
        if (this.sgSelectComponentConfig.items[i][this.sgSelectComponentConfig.itemDescriptionField] === 
            this.selectedItem[this.sgSelectComponentConfig.itemDescriptionField]) {
              index = i;
              break;
        }
      }
    }
    return index;
  }

  private selectPrevious(): void {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.selectedItem = this.sgSelectComponentConfig.items[this.sgSelectComponentConfig.items.length - 1];
      } else if (index !== 0) {
        this.selectedItem = this.sgSelectComponentConfig.items[index - 1];
      }
    }
  }

  private selectNext(): void {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.selectedItem = this.sgSelectComponentConfig.items[0];
      } else if (index !== this.sgSelectComponentConfig.items.length - 1) {
        this.selectedItem = this.sgSelectComponentConfig.items[index + 1];
      }
    }
  }

}
