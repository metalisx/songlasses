import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfig, SgSelectComponentService  } from 'songlasses';
import { ArrayUtils, CopyUtils, SgComponentServicesService } from 'songlasses';
import { SgGroupComponentConfig } from 'songlasses';
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
    name: 'select',
    required: true,
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  sgSelectComponentConfigStyled: SgSelectComponentConfig = {
    name: 'selectStyled',
    required: true,
    itemMatchStrategy: 'contains',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items,
    className: 'selectStyled'
  }

  sgSelectComponentConfigShowAndHide: SgSelectComponentConfig = {
    name: 'selectShowAndHide',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  sgGroupComponentConfigStyled: SgGroupComponentConfig = {
    name: 'groupComponentSelectStyled'
  }

  sgGroupComponentConfigShowAndHide: SgGroupComponentConfig = {
    name: 'groupComponentSelectShowHide'
  }

  value: string = 'JD';
  valueStyled: string = 'BW';
  valueShowAndHide: string = 'BW';

  public styles: string = `<style>
  .selectStyled.sg-select {
    width: 50%;
  }
  .selectStyled.sg-select sg-select-input {
    border: 1px solid #b07070;
  }
  .selectStyled.sg-select .sg-select-items {
    border: 1px solid #a06060;
  }
  .selectStyled.sg-select .sg-select-items .sg-select-item {
    background-color: #a06060;
    color: #fff;
  }
  .selectStyled.sg-select .sg-select-items .sg-select-item:hover {
    background-color: #904040;
    color: #fff;
  }
  .selectStyled.sg-select .sg-select-items .sg-select-selected-item-active {
    background-color: #702020;
    color: #fff;
  } 
</style>`;

  public stylesSafeHtml?: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer, 
              private componentServicesService: SgComponentServicesService,
              private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ArrayUtils.clear(this.items);
      CopyUtils.copyArray(this.items, superheroes);
    });
  }

  private getSelectComponentServiceShowAndHide(): SgSelectComponentService | null {
    let selectComponentService: SgSelectComponentService | null = null;
    if (this.sgSelectComponentConfigShowAndHide.name) {
      return this.componentServicesService.getComponentService(this.sgSelectComponentConfigShowAndHide.name) as SgSelectComponentService;
    }
    return selectComponentService;
  }

  toggleShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | null = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== null && this.sgSelectComponentConfigShowAndHide.name) {
      selectComponentService.toggle();
    }
  }

  showShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | null = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== null && this.sgSelectComponentConfigShowAndHide.name) {
      selectComponentService.show();
    }
  }

  hideShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | null = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== null && this.sgSelectComponentConfigShowAndHide.name) {
      selectComponentService.hide();
    }
  }

  componentServiceToggleAllSelectComponents(): void {
    this.componentServicesService.getComponentService('select')?.toggle();
    this.componentServicesService.getComponentService('selectStyled')?.toggle();
    this.componentServicesService.getComponentService('selectShowAndHide')?.toggle();
  }

  componentServiceToggleAllGroupComponents(): void {
    this.componentServicesService.getComponentService('groupComponentSelectStyled')?.toggle();
    this.componentServicesService.getComponentService('groupComponentSelectShowHide')?.toggle();
  }
  
  componentServicesServiceLog(): void {
    this.componentServicesService.log();
  }

}
