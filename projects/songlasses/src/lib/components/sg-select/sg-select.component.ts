import { Component, ElementRef, forwardRef, HostListener, Input, OnInit, Optional, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { SgSelectComponentConfigModel } from '../../models/sg-component/sg-select-component-config.model';
import { SgSelectComponentModel } from '../../models/sg-component/sg-select-component.model';
import { SgGroupComponentService } from '../../services/sg-component/sg-group-component.service';
import { SgRootComponentService } from '../../services/sg-component/sg-root-component.service';
import { SgSelectComponentService } from '../../services/sg-component/sg-select-component.service';
import { CopyUtils } from '../../utils/copy-utils';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss'],
  providers: [
    SgSelectComponentService,
    { 
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SgSelectComponent),
      multi: true
    }
  ]    
})
export class SgSelectComponent implements ControlValueAccessor, OnInit {

  valid: boolean = true;
  
  @Input() componentConfig: SgSelectComponentConfigModel = {};

  @ViewChild('input') inputElement!: ElementRef;
  @ViewChildren('item') liElements!: QueryList<ElementRef>;

  private internalValue: any;

  item?: any;
  selectedItem?: any;

  onChange: any = () => {};
  onTouched: any = () => {};
  disabled = false;
  showItems: boolean = false;

  observerable: Observable<SgSelectComponentModel> | undefined;

  @HostListener('document:click', ['$event'])
  clickout(event: Event) {
    if(!this.elementRef.nativeElement.contains(event.target) && this.showItems) {
      this.doHideItems();
    }
  }
  
  constructor(private elementRef: ElementRef, 
    private selectComponentService: SgSelectComponentService, 
    @Optional() private groupComponentService: SgGroupComponentService | null,
    private rootComponentService: SgRootComponentService) { 
  }

  ngOnInit(): void {
    CopyUtils.merge(this.componentConfig, this.selectComponentService.getDefaults());
    if (this.componentConfig && this.componentConfig.name) {
      this.selectComponentService.setComponentModel({
        name: this.componentConfig.name,
        componentConfig: this.componentConfig,
        value: this.value
      })
      if (this.groupComponentService !== null) {
        this.groupComponentService.register(this.selectComponentService);
      } else {
        this.rootComponentService.register(this.selectComponentService);
      }
      this.observerable = this.selectComponentService.getComponentModelObservable();
      if (this.observerable) {
        this.observerable.subscribe(sgSelectComponentModel => {
          this.componentConfig = sgSelectComponentModel.componentConfig as SgSelectComponentConfigModel;
          this.validateSelectComponentConfig();
        });
      }
      this.validateSelectComponentConfig();
    }
  }

  ngOnDestroy(): void {
    if (this.groupComponentService !== null) {
      this.groupComponentService.unregister(this.selectComponentService);
    } else {
      this.rootComponentService.unregister(this.selectComponentService);
    }
  }

  validateSelectComponentConfig() {
    if (!this.hasItemValueField()) {
      console.warn("Items are missing value field: " + this.componentConfig?.itemValueField + ". " +
                    "Did you specify the right itemValueField?");
    }
    if (!this.hasItemDescriptionField()) {
      console.warn("Items are missing description field: " + this.componentConfig?.itemDescriptionField + ". " +
                    "Did you specify the right itemDescriptionField?");
    }
  }
  
  hasItemDescriptionField() {
    return this.componentConfig && this.componentConfig.itemDescriptionField && this.componentConfig.items && 
            this.componentConfig.items.length > 0 && 
            this.componentConfig.items[0][this.componentConfig.itemDescriptionField] ? true : false;
  }

  hasItemValueField() {
    return this.componentConfig && this.componentConfig.itemValueField && this.componentConfig.items && 
            this.componentConfig.items.length > 0 && 
            this.componentConfig.items[0][this.componentConfig.itemValueField] ? true : false;
  }

  isRequired() {
    let required = true;
    if (this.componentConfig && this.componentConfig.required !== undefined && this.componentConfig.required === false) {
      required = false;
    }
    return required;
  }

  click(event: Event) {
    if (!this.showItems) {
      this.doShowItems();
    }
  }

  keydown(event: KeyboardEvent) {
    switch(event.key) {
      case 'ArrowDown': {
        this.keydownArrowdown();
        event.preventDefault();
        break;
      }
      case 'ArrowUp': {
        event.preventDefault();
        this.keydownArrowup();
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
  }

  keyup(event: KeyboardEvent) {
    switch(event.key) {
      case 'Enter': {
        if (this.showItems) {
          event.preventDefault();
          this.setValueFromSelectedItem();
          this.doHideItems();
        }
        break;
      }
      case 'Escape': {
        event.preventDefault();
        this.doHideItems();
        break;
      }
      default: {
        break;
      }
    }
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
    if (this.componentConfig && this.componentConfig.itemDescriptionField && this.item) {
       this.value = this.item[this.componentConfig.itemDescriptionField];
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
    if (this.componentConfig && this.componentConfig.itemDescriptionField && this.selectedItem) {
      this.value = this.selectedItem[this.componentConfig.itemDescriptionField];
    }
  }

  isItem(item: any): boolean {
    return this.componentConfig && this.componentConfig.itemValueField && this.item && 
            this.item[this.componentConfig.itemValueField] === item[this.componentConfig.itemValueField];
  }

  isSelectedItem(item: any): boolean {
    return this.componentConfig && this.componentConfig.itemValueField && this.selectedItem && 
            this.selectedItem[this.componentConfig.itemValueField] === item[this.componentConfig.itemValueField];
  }

  doShowItems(): void {
    this.setSelectedItem(this.value);
    this.showItems = true;
  }

  doHideItems(): void {
    this.selectedItem = null;
    this.showItems = false;
  }

  // TODO: make scroll into view work better
  private scrollIntoView(alignToTop: boolean) {
    this.liElements.forEach(el => {
      if (el.nativeElement.classList.contains('sg-select-selected-item-active')) {
        el.nativeElement.scrollIntoView({ behavior: "nearest"});
        //el.nativeElement.scrollIntoView({ behavior: "smooth", block: alignToTop ? "start" : "end"});
      }
    });
  }

  private keydownArrowup() {
    if (!this.showItems) {
      this.doShowItems();
    } else {
      this.selectPrevious();
    }
    //this.scrollIntoView(false);
  }

  private keydownArrowdown() {
    if (!this.showItems) {
      this.doShowItems();
    } else {
      this.selectNext();
    }
    //this.scrollIntoView(true);
  }

  private setItemByValue(value: any) {
    if (this.componentConfig && this.componentConfig.itemValueField) {
      this.setItemByProperty(value, this.componentConfig.itemValueField)
    }
  }

  private setItemByDescription(value: any) {
    if (this.componentConfig && this.componentConfig.itemDescriptionField) {
      this.setItemByProperty(value, this.componentConfig.itemDescriptionField)
    }
  }

  private setItemByProperty(value: any, property: string) {
    if (this.componentConfig && this.componentConfig.items) {
      this.item = this.componentConfig.items
        .find((item: any) => item[property] === value);
    }
  }

  private setSelectedItem(value: any) {
    if (this.componentConfig && this.componentConfig.items) {
      if (!this.componentConfig.itemMatchStrategy || 
          this.componentConfig.itemMatchStrategy === 'startsWith') {
        this.selectedItem = this.componentConfig.items
          .find((item: any) => {
              if (this.componentConfig && this.componentConfig.itemDescriptionField) {
                return item[this.componentConfig.itemDescriptionField].search(new RegExp(value, "i")) === 0;
              }
              return undefined;
            });
      } else if (this.componentConfig.itemMatchStrategy === 'contains') {
        this.selectedItem = this.componentConfig.items
          .find((item: any) => {
              if (this.componentConfig && this.componentConfig.itemDescriptionField) {
                return item[this.componentConfig.itemDescriptionField].search(new RegExp(value, "i")) !== -1
              }
              return undefined;
            });
      }
    }
  }

  private setExternalValue(value: any) {
    if (this.componentConfig && this.componentConfig.itemValueField) {
      let externalValue: any = this.item ? this.item[this.componentConfig.itemValueField] : null;
      this.onChange(externalValue);
      this.onTouched(externalValue);
    }
  }

  private focusOnInputElement(): void {
    this.inputElement.nativeElement.focus();
  }

  private selectedIndex(): number {
    let index = -1;
    if (this.selectedItem && this.componentConfig && this.componentConfig.itemDescriptionField && 
      this.componentConfig.items && 
        this.componentConfig.items) {
      for (let i=0; i<this.componentConfig.items.length; i++) {
        if (this.componentConfig.items[i][this.componentConfig.itemDescriptionField] === 
            this.selectedItem[this.componentConfig.itemDescriptionField]) {
              index = i;
              break;
        }
      }
    }
    return index;
  }

  private selectPrevious(): void {
    if (this.componentConfig && this.componentConfig.items && this.componentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.selectedItem = this.componentConfig.items[this.componentConfig.items.length - 1];
      } else if (index !== 0) {
        this.selectedItem = this.componentConfig.items[index - 1];
      }
    }
  }

  private selectNext(): void {
    if (this.componentConfig && this.componentConfig.items && this.componentConfig.items.length > 0) {
      let index = this.selectedIndex();
      if (index === -1) {
        this.selectedItem = this.componentConfig.items[0];
      } else if (index !== this.componentConfig.items.length - 1) {
        this.selectedItem = this.componentConfig.items[index + 1];
      }
    }
  }

}
