import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfig, SgSelectComponentService  } from 'songlasses';
import { ObjectUtils, SgComponentServicesService } from 'songlasses';
import { SuperheroesService } from '../../services/superheroes.service';
import { Superhero } from '../../models/superhero.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  private items: Superhero[] = [];

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

  sgSelectComponentConfigShowAndHide: SgSelectComponentConfig = {
    name: 'selectShowHide',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  value?: string = 'JD';
  valueStyled?: string = 'BW';
  valueShowAndHide?: string = 'BW';

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
  
  private selectComponentServiceShowAndHide!: SgSelectComponentService;

  constructor(private sanitizer: DomSanitizer, 
              private componentServicesService: SgComponentServicesService,
              private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ObjectUtils.clearArray(this.items);
      ObjectUtils.copyArray(this.items, superheroes);
    });
  }

  getSelectComponentServiceShowAndHide() {
    if (this.selectComponentServiceShowAndHide === undefined && this.sgSelectComponentConfigShowAndHide.name) {
      this.selectComponentServiceShowAndHide = this.componentServicesService.getComponentService(this.sgSelectComponentConfigShowAndHide.name) as SgSelectComponentService;
    }
  }

  isVisible(): boolean {
    this.getSelectComponentServiceShowAndHide();
    let visible: boolean = false;
    if (this.sgSelectComponentConfigShowAndHide.name) {
      visible = this.selectComponentServiceShowAndHide.getSelect().selectComponentConfig.show || false;
    }
    return visible;
  }

  show(): void {
    this.getSelectComponentServiceShowAndHide();
    if (this.sgSelectComponentConfigShowAndHide.name) {
      this.selectComponentServiceShowAndHide.show();
    }
  }

  hide(): void {
    this.getSelectComponentServiceShowAndHide();
    if (this.sgSelectComponentConfigShowAndHide.name) {
      this.selectComponentServiceShowAndHide.hide();
    }
  }
}
