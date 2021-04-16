import { Component, Input, OnInit } from '@angular/core';
import { SgSelectComponentConfig } from '../../models/sg-select/sg-select-component-config.model';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss']
})
export class SgSelectComponent implements OnInit {

  private static DEFAULT_ITEMS_VALUE_FIELD: string = 'value';
  private static DEFAULT_ITEMS_DESCRIPTION_FIELD: string = 'description';

  @Input() sgSelectComponentConfig: SgSelectComponentConfig = {
    name: '',
    itemsValueField: SgSelectComponent.DEFAULT_ITEMS_VALUE_FIELD,
    itemsDescriptionField: SgSelectComponent.DEFAULT_ITEMS_DESCRIPTION_FIELD,
    items: []
  };

  @Input() value: any;

  selectedItem?: any;

  constructor() { }

  ngOnInit(): void {
  }

  select(item: any): void {
    this.selectedItem = item;
    if (this.sgSelectComponentConfig) {
      this.value = item[this.sgSelectComponentConfig.itemsValueField];
    }
  }

  modelChange(value: any): void {
    this.value = value;
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.items) {
      this.selectedItem = this.sgSelectComponentConfig.items
        .find((option: any) => option[this.sgSelectComponentConfig.itemsValueField] === value);
    }
  }

}
