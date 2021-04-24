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
    .sg-select.select2 {
      width: 50%;
    }
    .sg-select.select2 input {
      border: 1px solid green;
    }
    .sg-select.select2 ul {
      border: 1px solid red';
    }
    .sg-select.select2 ul li {
      background-color: #904040;
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
