import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfig } from 'songlasses';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private items: any[] = [
    {
      id: 'BMB',
      name: 'Barbara Morse Barton',
      superheroName: 'Mockingbird'
    },
    {
      id: 'BW',
      name: 'Bruce Wayne',
      superheroName: 'Batman'
    },
    {
      id: 'CK',
      name: 'Clark Kent',
      superheroName: 'Superman'
    },
    {
      id: 'DSS',
      name: 'Dr. Stephen Strange',
      superheroName: 'Doctor Strange'
    },
    {
      id: 'JD',
      name: 'Jessica Drew',
      superheroName: 'Spider-Woman'
    },
    {
      id: 'KD',
      name: 'Kara Danvers',
      superheroName: 'Supergirl'
    },
    {
      id: 'LC',
      name: 'Luke Cage',
      superheroName: 'Power Man'
    },
    {
      id: 'OM',
      name: 'Ororo Monroe',
      superheroName: 'Storm'
    },
    {
      id: 'PD',
      name: 'Princess Diana',
      superheroName: 'Wonder Woman'
    },
    {
      id: 'PP',
      name: 'Peter Parker',
      superheroName: 'Spider-Man'
    },
    {
      id: 'SP',
      name: 'Samantha Parrington',
      superheroName: 'Valkyrie'
    },
    {
      id: 'T',
      name: 'T\'Challa',
      superheroName: 'Black Panther'
    }
  ]

  sgSelectComponentConfig: SgSelectComponentConfig = {
    name: 'select1',
    itemsValueField: 'id',
    itemsDescriptionField: 'name',
    items: this.items
  }

  sgSelectComponentConfigStyled: SgSelectComponentConfig = {
    name: 'select2',
    itemMatching: 'contains',
    itemsValueField: 'id',
    itemsDescriptionField: 'name',
    items: this.items,
    className: 'select2'
  }

  value?: string = 'Jessica Drew';
  valueStyled?: string = 'Bruce Wayne';

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
  .select2.sg-select .sg-select-items .sg-select-item-active {
    background-color: #702020;
    color: #fff;
  }
  .select2.sg-select .sg-select-items .sg-select-item:hover {
    background-color: #904040;
    color: #fff;
  }
</style>`;
  public stylesSafeHtml?: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
   }

}
