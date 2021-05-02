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
    itemMatching: 'startsWith',
    itemsValueField: SgSelectComponent.DEFAULT_ITEMS_VALUE_FIELD,
    itemsDescriptionField: SgSelectComponent.DEFAULT_ITEMS_DESCRIPTION_FIELD,
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

  // blur(event: Event) {
  //   this.valid = this.isValid();
  // }

  click(event: Event) {
    if (!this.showItems) {
      this.doShowItems();
    }
  }

  keydownArrowup(event: Event) {
    if (this.showItems) {
      this.selectPrevious();
    } else {
      this.selectPrevious();
      this.doShowItems();
    }
    return false;
  }

  keydownArrowdown(event: Event) {
    if (this.showItems) {
      this.selectNext();
    } else {
      this.selectNext();
      this.doShowItems();
    }
    return false;
  }

  keydownEnter(event: Event) {
    if (this.showItems) {
      this.doHideItems();
      return false;
    }
    return true;
  }

  keyup(event: Event) {
    this.doShowItems();
    return true;
  }

  keyupEsc(event: Event) {
    if (this.showItems) {
      this.toggleItems();
    }
    return true;
  }

  set value(value: any) {
    if (value !== undefined && value !== "") {
      if (this.internalValue !== value) {
        this.internalValue = value;
        if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
          if (!this.sgSelectComponentConfig.itemMatching || this.sgSelectComponentConfig.itemMatching === 'startsWith') {
            this.selectedItem = this.sgSelectComponentConfig.items
              .find((item: any) => item[this.sgSelectComponentConfig.itemsDescriptionField].search(new RegExp(value, "i")) === 0);
          } else if (this.sgSelectComponentConfig.itemMatching === 'contains') {
            this.selectedItem = this.sgSelectComponentConfig.items
              .find((item: any) => item[this.sgSelectComponentConfig.itemsDescriptionField].search(new RegExp(value, "i")) !== -1);
          }
          let externalValue: any = this.selectedItem ? this.selectedItem[this.sgSelectComponentConfig.itemsValueField] : null;
          this.onChange(externalValue);
          this.onTouched(externalValue);
        }
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
      this.value = item[this.sgSelectComponentConfig.itemsDescriptionField];
    }
    this.doHideItems();
    this.focusOnInputElement();
    // this.valid = this.isValid();
  }

  isSelectedItem(item: any): boolean {
    return this.sgSelectComponentConfig && this.selectedItem && 
            this.selectedItem[this.sgSelectComponentConfig.itemsValueField] === item[this.sgSelectComponentConfig.itemsValueField];
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

  // private hasValue(): boolean {
  //   return this.selectedItem ? true : false;
  // }

  // private isValid(): boolean {
  //   let valid: boolean = true;
  //   if (this.sgSelectComponentConfig.required && !this.hasValue()) {
  //     valid = false;
  //   }
  //   return valid;
  // }

  private focusOnInputElement(): void {
    if (this.inputElement) {
      this.inputElement.nativeElement.focus();
    }
  }

  private selectedIndex(): number {
    let index = -1;
    if (this.selectedItem && this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items) {
      for (let i=0; i<this.sgSelectComponentConfig.items.length; i++) {
        if (this.sgSelectComponentConfig.items[i][this.sgSelectComponentConfig.itemsDescriptionField] === 
            this.selectedItem[this.sgSelectComponentConfig.itemsDescriptionField]) {
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
        this.value = this.sgSelectComponentConfig.items[this.sgSelectComponentConfig.items.length - 1][this.sgSelectComponentConfig.itemsDescriptionField];
      } else if (index !== 0) {
        this.value = this.sgSelectComponentConfig.items[index - 1][this.sgSelectComponentConfig.itemsDescriptionField];
      }
    }
  }

  private selectNext(): void {
    if (this.sgSelectComponentConfig.items && this.sgSelectComponentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.value = this.sgSelectComponentConfig.items[0][this.sgSelectComponentConfig.itemsDescriptionField];
      } else if (index !== this.sgSelectComponentConfig.items.length - 1) {
        this.value = this.sgSelectComponentConfig.items[index + 1][this.sgSelectComponentConfig.itemsDescriptionField];
      }
    }
  }

}
