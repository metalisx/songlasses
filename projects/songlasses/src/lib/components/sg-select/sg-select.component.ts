import { Component, Input, OnInit } from '@angular/core';
import { SgOptionsMetadata } from '../../models/sg-select/sg-options-metadata.model';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss']
})
export class SgSelectComponent implements OnInit {

  private static DEFAULT_VALUE_FIELD: string = 'value';
  private static DEFAULT_DESCRIPTION_FIELD: string = 'description';

  @Input() sgOptionsMetadata: SgOptionsMetadata = {
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
    if (this.sgOptionsMetadata) {
      this.value = selectedOption[this.sgOptionsMetadata.valueField];
    }
  }

  modelChange(value: any): void {
    if (this.sgOptionsMetadata && this.sgOptionsMetadata.options) {
      this.selectedOption = this.sgOptionsMetadata.options.find((option: any) => option[this.sgOptionsMetadata.valueField] === value);
    }
  }

}
