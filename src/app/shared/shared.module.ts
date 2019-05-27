import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { AddResultComponent } from './add-result/add-result.component';
import { HhmmssPipe } from './hhmmss.pipe';
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        AddResultComponent,
        ResultCardComponent,
        HhmmssPipe,
    ],
    exports: [
        AddResultComponent,
        ResultCardComponent,
        MaterialModule,
        HhmmssPipe,
    ]
})
export class SharedModule { }
