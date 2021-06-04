import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { SgSelectComponentConfigModel, SgSelectComponentService  } from 'songlasses';
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

  sgSelectComponentConfigModel: SgSelectComponentConfigModel = {
    name: 'select',
    required: true,
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  sgSelectComponentConfigModelStyled: SgSelectComponentConfigModel = {
    name: 'selectStyled',
    required: true,
    itemMatchStrategy: 'contains',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items,
    className: 'selectStyled'
  }

  sgSelectComponentConfigModelShowAndHide: SgSelectComponentConfigModel = {
    name: 'selectShowAndHide',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
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
              private rootComponentService: SgRootComponentService,
              private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.stylesSafeHtml = this.sanitizer.bypassSecurityTrustHtml(this.styles);
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ArrayUtils.clear(this.items);
      CopyUtils.copyArray(this.items, superheroes);
    });
  }

  private getSelectComponentServiceShowAndHide(): SgSelectComponentService | undefined {
    let selectComponentService: SgSelectComponentService | undefined;
    if (this.sgSelectComponentConfigModelShowAndHide.name) {
      return this.rootComponentService.getComponentService(this.sgSelectComponentConfigModelShowAndHide.name) as unknown as SgSelectComponentService;
    }
    return selectComponentService;
  }

  toggleShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== undefined && this.sgSelectComponentConfigModelShowAndHide.name) {
      selectComponentService.toggle();
    }
  }

  showShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== undefined && this.sgSelectComponentConfigModelShowAndHide.name) {
      selectComponentService.show();
    }
  }

  hideShowAndHide(): void {
    let selectComponentService: SgSelectComponentService | undefined = this.getSelectComponentServiceShowAndHide();
    if (selectComponentService !== undefined && this.sgSelectComponentConfigModelShowAndHide.name) {
      selectComponentService.hide();
    }
  }

}
