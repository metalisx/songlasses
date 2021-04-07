import { Component, OnInit } from '@angular/core';
import { SgOptionMetadata } from '../../models/sg-select/sg-option-metadata.model';

@Component({
  selector: 'sg-select',
  templateUrl: './sg-select.component.html',
  styleUrls: ['./sg-select.component.scss']
})
export class SgSelectComponent implements OnInit {

  selectedValue?: any;

  sgOptionMetadata: SgOptionMetadata = {
    valueField: 'value',
    descriptionField: 'description'
  }

  options: any = [
    {
      value: 'value1',
      description: 'description1'
    },
    {
      value: 'value2',
      description: 'description2'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  select(selectedValue: any): void {
    this.selectedValue = selectedValue;
  }

}
