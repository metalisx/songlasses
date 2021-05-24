import { Directive, Input, OnInit } from '@angular/core';
import { SgGroupComponentConfig } from '../../models/sg-component/sg-group-component-config.model';
import { SgGroupComponent } from '../../models/sg-component/sg-group-component.model';
import { SgComponentServicesService } from '../../services/sg-component/sg-component-services.service';
import { SgGroupComponentService } from '../../services/sg-component/sg-group-component.service';
import { CopyUtils } from '../../utils/copy-utils';

// TODO attach to the parent group
@Directive({
    selector: '[groupComponent]',
    providers: [ SgGroupComponentService ]
})
export class SgGroupComponentDirective implements OnInit  {

    @Input('sgGroupComponentConfig') groupComponentConfig: SgGroupComponentConfig = {};

    constructor(private groupComponentService: SgGroupComponentService, private componentServicesService: SgComponentServicesService) {
    }

    ngOnInit() {
        CopyUtils.merge(this.groupComponentConfig, this.groupComponentService.getDefaults());
        let groupComponent: SgGroupComponent = {
            name: this.groupComponentConfig.name ?? "",
            groupComponentConfig: this.groupComponentConfig
        }
        this.groupComponentService.setGroupComponent(groupComponent);
        this.componentServicesService.register(this.groupComponentService);
    }

    ngOnDestroy() {
        this.componentServicesService.unregister(this.groupComponentService);
    }

}
