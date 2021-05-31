import { Component, OnInit } from '@angular/core';
import { SgRootComponentService } from 'songlasses';
import { SgGroupComponentConfig, SgSelectComponentConfig } from 'songlasses';
import { ArrayUtils, CopyUtils } from 'songlasses';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-root-component-service',
  templateUrl: './root-component-service.component.html',
  styleUrls: ['./root-component-service.component.scss']
})
export class RootComponentServiceComponent implements OnInit {
  
  private items: Superhero[] = [];
  
  sgGroupComponentConfigLevel1: SgGroupComponentConfig = {
    name: 'groupComponentLevel1'
  }

  sgGroupComponentConfigLevel2_1: SgGroupComponentConfig = {
    name: 'groupComponentLevel2_1'
  }

  sgGroupComponentConfigLevel2_2: SgGroupComponentConfig = {
    name: 'groupComponentLevel2_2'
  }

  sgSelectComponentConfig2_1: SgSelectComponentConfig = {
    name: 'select2_1',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  sgSelectComponentConfig2_2: SgSelectComponentConfig = {
    name: 'select2_2',
    itemValueField: 'id',
    itemDescriptionField: 'name',
    items: this.items
  }

  value2_1: string = 'JD';
  value2_2: string = 'BW';

  constructor(private rootComponentService: SgRootComponentService, private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ArrayUtils.clear(this.items);
      CopyUtils.copyArray(this.items, superheroes);
    });
  }

  componentServiceToggleGroupComponentLevel1(): void {
    this.rootComponentService.getComponentService('groupComponentLevel1')?.toggle();
  }

  componentServiceToggleGroupComponentLevel2_1(): void {
    this.rootComponentService.getComponentService('groupComponentLevel2_1')?.toggle();
  }
  
  componentServiceToggleAllSelectComponents(): void {
    this.rootComponentService.getComponentService('select2_1')?.toggle();
    this.rootComponentService.getComponentService('select2_2')?.toggle();
  }

  componentServiceToggleSelectComponent2_1(): void {
    this.rootComponentService.getComponentService('select2_1')?.toggle();
  }

  rootComponentServiceLog(): void {
    this.rootComponentService.log();
  }

}
