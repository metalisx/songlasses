import { Directive, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { SgGroupComponentConfig } from '../../models/sg-component/sg-group-component-config.model';
import { SgGroupComponent } from '../../models/sg-component/sg-group-component.model';
import { SgGroupComponentService } from '../../services/sg-component/sg-group-component.service';
import { SgRootComponentService } from '../../services/sg-component/sg-root-component.service';
import { CopyUtils } from '../../utils/copy-utils';

@Directive({
    selector: '[groupComponent]',
    providers: [ SgGroupComponentService ]
})
export class SgGroupComponentDirective implements OnInit  {

    @Input('sgGroupComponentConfig') groupComponentConfig: SgGroupComponentConfig = {};

    constructor(private groupComponentService: SgGroupComponentService, 
        @Optional() @SkipSelf() private parentGroupComponentService: SgGroupComponentService | null, 
        private rootComponentService: SgRootComponentService) {
    }

    ngOnInit() {
        CopyUtils.merge(this.groupComponentConfig, this.groupComponentService.getDefaults());
        let groupComponent: SgGroupComponent = {
            name: this.groupComponentConfig.name ?? "",
            groupComponentConfig: this.groupComponentConfig
        }
        this.groupComponentService.setGroupComponent(groupComponent);
        this.rootComponentService.register(this.groupComponentService, this.parentGroupComponentService);
    }

    ngOnDestroy() {
        this.rootComponentService.unregister(this.groupComponentService, this.parentGroupComponentService);
    }

}
