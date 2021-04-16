import { Component, OnInit } from '@angular/core';
import { SgSelectComponentConfig } from 'songlasses';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  items: any[] = [
    {
      value: 'value1',
      description: 'description1'
    },
    {
      value: 'value2',
      description: 'description2'
    }
  ]

  sgSelectComponentConfig: SgSelectComponentConfig = {
    name: 'select1',
    itemsValueField: 'value',
    itemsDescriptionField: 'description',
    items: this.items
  }

  constructor() { }

  ngOnInit(): void { }

}
