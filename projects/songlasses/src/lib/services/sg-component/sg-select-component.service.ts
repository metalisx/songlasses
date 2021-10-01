import { Injectable } from '@angular/core';
import { SgSelectComponentConfig } from '../../models/sg-component/sg-select-component-config.model';
import { SgComponentValueService } from './sg-component-value.service';

@Injectable()
export class SgSelectComponentService extends SgComponentValueService<SgSelectComponentConfig, string> {

    constructor() {
        super();
    }

}
