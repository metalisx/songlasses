import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfig } from 'songlasses';
import { Superhero } from 'src/app/models/superhero.model';
import { SUPERHEROES } from '../../mocks/mock-superheroes';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private items: Superhero[] = SUPERHEROES;

  sgSelectComponentConfig: SgSelectComponentConfig = {
    name: 'select1',
    required: true,
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  sgSelectComponentConfigStyled: SgSelectComponentConfig = {
    name: 'select2',
    required: true,
    itemMatchStrategy: 'contains',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items,
    className: 'select2'
  }

  value?: string = 'JD';
  valueStyled?: string = 'BW';

  public styles: string = `<style>
  .select2.sg-select {
    width: 50%;
  }
  .select2.sg-select sg-select-input {
    border: 1px solid #b07070;
  }
  .select2.sg-select .sg-select-items {
    border: 1px solid #a06060;
  }
  .select2.sg-select .sg-select-items .sg-select-item {
    background-color: #a06060;
    color: #fff;
  }
  .select2.sg-select .sg-select-items .sg-select-item:hover {
    background-color: #904040;
    color: #fff;
  }
  .select2.sg-select .sg-select-items .sg-select-selected-item-active {
    background-color: #702020;
    color: #fff;
  } 
</style>`;

  public stylesSafeHtml?: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
   }

}
