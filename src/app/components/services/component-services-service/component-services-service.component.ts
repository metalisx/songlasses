import { Component, OnInit } from '@angular/core';
import { SgComponentServicesService } from 'songlasses';
import { SgGroupComponentConfig, SgSelectComponentConfig } from 'songlasses';
import { ArrayUtils, CopyUtils } from 'songlasses';
import { Superhero } from 'src/app/models/superhero.model';
import { SuperheroesService } from 'src/app/services/superheroes.service';

@Component({
  selector: 'app-component-services-service',
  templateUrl: './component-services-service.component.html',
  styleUrls: ['./component-services-service.component.scss']
})
export class ComponentServicesServiceComponent implements OnInit {
  
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

  constructor(private componentServicesService: SgComponentServicesService, private superheroesService: SuperheroesService) { }

  ngOnInit(): void {
    this.superheroesService.getSuperheroes().subscribe(superheroes => {
      ArrayUtils.clear(this.items);
      CopyUtils.copyArray(this.items, superheroes);
    });
  }

  componentServiceToggleGroupComponentLevel1(): void {
    this.componentServicesService.getComponentService('groupComponentLevel1')?.toggle();
  }

  componentServiceToggleGroupComponentLevel2_1(): void {
    this.componentServicesService.getComponentService('groupComponentLevel2_1')?.toggle();
  }
  
  componentServiceToggleAllSelectComponents(): void {
    this.componentServicesService.getComponentService('select2_1')?.toggle();
    this.componentServicesService.getComponentService('select2_2')?.toggle();
  }

  componentServiceToggleSelectComponent2_1(): void {
    this.componentServicesService.getComponentService('select2_1')?.toggle();
  }

  componentServicesServiceLog(): void {
    this.componentServicesService.log();
  }

}
