import { Component, OnInit } from '@angular/core';
import { SgSelectComponentConfig } from 'songlasses';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  sgSelectComponentConfig: SgSelectComponentConfig = {
    name: 'select1',
    itemsValueField: 'value',
    itemsDescriptionField: 'description',
    items: [
      {
        value: 'value1',
        description: 'description1'
      },
      {
        value: 'value2',
        description: 'description2'
      }
    ]
  }

  value?: string = 'value2';

  constructor() { }

  ngOnInit(): void { }

}
