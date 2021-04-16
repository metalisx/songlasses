import { Component, Input, OnInit } from '@angular/core';
import { SgSelectComponentConfig } from '../../models/sg-select/sg-select-component-config.model';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss']
})
export class SgSelectComponent implements OnInit {

  private static DEFAULT_VALUE_FIELD: string = 'value';
  private static DEFAULT_DESCRIPTION_FIELD: string = 'description';

  @Input() sgSelectComponentConfig: SgSelectComponentConfig = {
    name: '',
    valueField: SgSelectComponent.DEFAULT_VALUE_FIELD,
    descriptionField: SgSelectComponent.DEFAULT_DESCRIPTION_FIELD,
    options: []
  };
  @Input() value: any;

  selectedOption?: any;

  constructor() { }

  ngOnInit(): void {
  }

  select(selectedOption: any): void {
    this.selectedOption = selectedOption;
    if (this.sgSelectComponentConfig) {
      this.value = selectedOption[this.sgSelectComponentConfig.valueField];
    }
  }

  modelChange(value: any): void {
    this.value = value;
    if (this.sgSelectComponentConfig && this.sgSelectComponentConfig.options) {
      this.selectedOption = this.sgSelectComponentConfig.options
        .find((option: any) => option[this.sgSelectComponentConfig.valueField] === value);
    }
  }

}
