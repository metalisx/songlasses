import { Directive, OnInit } from '@angular/core';
import { SgComponentServicesService } from '../../services/sg-component/sg-component-services.service';
import { SgGroupComponentService } from '../../services/sg-component/sg-group-component.service';

@Directive({
    selector: '[groupComponent]',
    providers: [ SgGroupComponentService ]
})
export class SgGroupComponentDirective implements OnInit  {

    constructor(private groupComponentService: SgGroupComponentService, private componentServicesService: SgComponentServicesService) {
    }

    ngOnInit() {
        this.componentServicesService.register(this.groupComponentService);
    }

}

