import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialModule } from '../material/material.module';
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        ResultCardComponent,
    ],
    exports: [
        ResultCardComponent,
        MaterialModule,
    ]
})
export class SharedModule { }
