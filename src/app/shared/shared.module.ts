import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';

import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
    ],
    declarations: [
        ResultCardComponent,
    ],
    exports: [
        ResultCardComponent,
        MatCardModule,
    ]
})
export class SharedModule { }
