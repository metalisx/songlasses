import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfig, SgSelectComponentService  } from 'songlasses';
import { ArrayUtils, CopyUtils, SgRootComponentService } from 'songlasses';
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

  sgSelectComponentConfigManipulateValue: SgSelectComponentConfig = {
    name: 'selectManipulateValue',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  value: string = 'JD';
  valueStyled: string = 'BW';
  valueShowAndHide: string = 'LC';
  valueManipulateValue: string = 'SP';
  currentValueManipulateValue: String| null = null;

  public styles: string = `<style>
  .selectStyled.sg-select {
    width: 50%;
  }
  .selectStyled.sg-select sg-select-input {
    border: 1px solid #b07070;
  }
  .selectStyled.sg-select .sg-select-dropdown {
    border: 1px solid #a06060;
    background-color: #a06060;
  }
  .selectStyled.sg-select .sg-select-dropwdown-items {
    background-color: #a06060;
  }
  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item {
    color: #fff;
  }
  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-item:hover {
    background-color: #904040;
    color: #fff;
  }
  .selectStyled.sg-select .sg-select-dropdown-items .sg-select-dropdown-selected-item-active {
    background-color: #702020;
    color: #fff;
  }
  .selectStyled.sg-select .sg-select-dropdown-paging {
    background-color: #a06060;
  } 
</style>`;

  public stylesSafeHtml?: SafeHtml;
  
  constructor(private sanitizer: DomSanitizer, 
              private rootComponentService: SgRootComponentService,
              private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ArrayUtils.clear(this.items);
      CopyUtils.copyArray(this.items, superheroes);
    });
  }

  private getSelectComponentService(name: string | undefined): SgSelectComponentService | undefined {
    let selectComponentService: SgSelectComponentService | undefined;
    if (name !== undefined) {
      return this.rootComponentService.getComponentService(name) as unknown as SgSelectComponentService;
    }
    return selectComponentService;
  }

  toggleShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);
    if (selectComponentService !== undefined) {
      selectComponentService.toggle();
    }
  }

  showShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);
    if (selectComponentService !== undefined) {
      selectComponentService.show();
    }
  }

  hideShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigShowAndHide.name);
    if (selectComponentService !== undefined) {
      selectComponentService.hide();
    }
  }

  clearManipulateValue(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);
    if (selectComponentService !== undefined) {
      selectComponentService.clearValue();
    }
  }

  getManipulateValue(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);
    if (selectComponentService !== undefined) {
      this.currentValueManipulateValue = selectComponentService.getValue();
    }
  }

  setManipulateValue(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);
    if (selectComponentService !== undefined) {
      selectComponentService.setValue('OM');
    }
  }

  hasValueManipulateValue(): boolean {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentService(this.sgSelectComponentConfigManipulateValue.name);
    if (selectComponentService !== undefined) {
      return selectComponentService.hasValue;
    }
    return false;
  }

}
