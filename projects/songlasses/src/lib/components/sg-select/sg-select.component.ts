import { APP_INITIALIZER, Component, ElementRef, forwardRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
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
  
  @Input() sgSelectComponentConfig: SgSelectComponentConfig = {
    name: '',
    required: true,
    itemMatchStrategy: 'startsWith',
    itemValueField: SgSelectComponent.DEFAULT_ITEMS_VALUE_FIELD,
    itemDescriptionField: SgSelectComponent.DEFAULT_ITEMS_DESCRIPTION_FIELD,
    items: [],
    className: ''
  };

  @ViewChild('input') inputElement?: ElementRef;

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
  clickout(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target) && this.showItems) {
      this.doHideItems();
    }
  }

  isRequired() {
    let required = true;
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.required !== undefined && this.sgSelectComponentConfig.required === true) {
      required = true;
    }
    return required;
  }

  blur(event: Event) {
    //this.setExternalValue(this.internalValue);
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
        this.select(this.selectedItem);
        this.doHideItems();
        break;
      }
      case 'Escape': {
        this.doHideItems();
        break;
      }
      case 'Tab': {
        break;
      }
      default: {
        this.doShowItems();
        break;
      }
    }
    return returnValue;
  }

  set value(value: any) {
    if (value !== undefined && value !== "") {
      if (this.internalValue !== value) {
        this.internalValue = value;
        this.setSelectedItemByDescription(value);
        this.setExternalValue(value);
      }
    } else {
      this.selectedItem = null;
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
    this.setSelectedItemByValue(value);
    if (this.sgSelectComponentConfig && this.selectedItem) {
       this.value = this.selectedItem[this.sgSelectComponentConfig.itemDescriptionField];
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
    if (this.sgSelectComponentConfig) {
      this.value = item[this.sgSelectComponentConfig.itemDescriptionField];
    }
    this.doHideItems();
    this.focusOnInputElement();
  }

  isSelectedItem(item: any): boolean {
    return this.sgSelectComponentConfig && this.selectedItem && 
            this.selectedItem[this.sgSelectComponentConfig.itemValueField] === item[this.sgSelectComponentConfig.itemValueField];
  }

  doShowItems(): void {
    this.showItems = true;
  }

  doHideItems(): void {
    this.showItems = false;
  }

  private keydownArrowup() {
    if (this.showItems) {
      this.selectPrevious();
    } else {
      this.selectPrevious();
      this.doShowItems();
    }
  }

  private keydownArrowdown() {
    if (this.showItems) {
      this.selectNext();
    } else {
      this.selectNext();
      this.doShowItems();
    }
  }

  private setSelectedItemByValue(value: any) {
    if (this.sgSelectComponentConfig) {
      this.setSelectedItemByProperty(value, this.sgSelectComponentConfig.itemValueField)
    }
  }

  private setSelectedItemByDescription(value: any) {
    if (this.sgSelectComponentConfig) {
      this.setSelectedItemByProperty(value, this.sgSelectComponentConfig.itemDescriptionField)
    }
  }

  private setSelectedItemByProperty(value: any, property: string) {
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
      if (!this.sgSelectComponentConfig.itemMatchStrategy || 
          this.sgSelectComponentConfig.itemMatchStrategy === 'startsWith') {
        this.selectedItem = this.sgSelectComponentConfig.items
          .find((item: any) => item[property].search(new RegExp(value, "i")) === 0);
      } else if (this.sgSelectComponentConfig.itemMatchStrategy === 'contains') {
        this.selectedItem = this.sgSelectComponentConfig.items
          .find((item: any) => item[property].search(new RegExp(value, "i")) !== -1);
      }
    }
  }

  private setExternalValue(value: any) {
    if (this.sgSelectComponentConfig) {
      let externalValue: any = this.selectedItem ? this.selectedItem[this.sgSelectComponentConfig.itemValueField] : null;
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
    if (this.selectedItem && this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items) {
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
    if (this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.value = this.sgSelectComponentConfig.items[this.sgSelectComponentConfig.items.length - 1][this.sgSelectComponentConfig.itemDescriptionField];
      } else if (index !== 0) {
        this.value = this.sgSelectComponentConfig.items[index - 1][this.sgSelectComponentConfig.itemDescriptionField];
      }
    }
  }

  private selectNext(): void {
    if (this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.value = this.sgSelectComponentConfig.items[0][this.sgSelectComponentConfig.itemDescriptionField];
      } else if (index !== this.sgSelectComponentConfig.items.length - 1) {
        this.value = this.sgSelectComponentConfig.items[index + 1][this.sgSelectComponentConfig.itemDescriptionField];
      }
    }
  }

}
