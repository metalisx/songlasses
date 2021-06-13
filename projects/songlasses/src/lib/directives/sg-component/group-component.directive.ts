import { Directive, Input, OnInit, Optional, SkipSelf } from '@angular/core';
import { SgGroupComponentConfigModel } from '../../models/sg-component/sg-group-component-config.model';
import { SgGroupComponentService } from '../../services/sg-component/sg-group-component.service';
import { SgRootComponentService } from '../../services/sg-component/sg-root-component.service';
import { CopyUtils } from '../../utils/copy-utils';

@Directive({
    selector: '[groupComponent]',
    providers: [ SgGroupComponentService ]
})
export class SgGroupComponentDirective implements OnInit  {

    @Input() componentConfig: SgGroupComponentConfigModel = this.groupComponentService.getDefaults();

    constructor(private groupComponentService: SgGroupComponentService, 
        @Optional() @SkipSelf() private parentGroupComponentService: SgGroupComponentService | null, 
        private rootComponentService: SgRootComponentService) {
    }

    ngOnInit() {
        CopyUtils.merge(this.componentConfig, this.groupComponentService.getDefaults());
        this.groupComponentService.setComponentConfigModel(this.componentConfig);
        if (this.parentGroupComponentService !== null) {
            this.parentGroupComponentService.register(this.groupComponentService);
        } else {
            this.rootComponentService.register(this.groupComponentService);
        }
    }

    ngOnDestroy() {
        if (this.parentGroupComponentService !== null) {
            this.parentGroupComponentService.unregister(this.groupComponentService);
        } else {
            this.rootComponentService.unregister(this.groupComponentService);
        }
    }

}
