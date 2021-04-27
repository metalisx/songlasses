import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
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

  sgSelectComponentConfigStyled: SgSelectComponentConfig = {
    name: 'select2',
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
    ],
    className: 'select2'
  }

  value?: string = 'value2';
  valueStyled?: string = 'value2';

  public styles: string = `
  <style>
    .select2.sg-select {
      width: 50%;
    }
    .select2.sg-select sg-select-input {
      border: 1px solid #904040;
    }
    .select2.sg-select .sg-select-items {
      border: 1px solid #904040;
    }
    .select2.sg-select .sg-select-items .sg-select-item {
      background-color: #904040;
      color: #fff;
    }
    .select2.sg-select .sg-select-items .sg-select-item:hover {
      background-color: #803030;
      color: #fff;
    }
  </style>
  `;
  public stylesSafeHtml?: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
   }

}
