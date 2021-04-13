import { Component, OnInit } from '@angular/core';
import { SgOptionsMetadata } from 'songlasses';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  options: any[] = [
    {
      value: 'value1',
      description: 'description1'
    },
    {
      value: 'value2',
      description: 'description2'
    }
  ]

  sgOptionsMetadata: SgOptionsMetadata = {
    valueField: 'value',
    descriptionField: 'description',
    options: this.options
  }

  constructor() { }

  ngOnInit(): void { }

}
