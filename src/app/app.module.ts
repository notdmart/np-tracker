import { NgModule } from '@angular/core';
import { MatDialog } from '@angular/material';

import { AppComponent } from './app.component';
import { ResultService } from './core/result.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from './material/material.module';
import { ResultsListComponent } from './results-list/results-list.component';
import { AddResultComponent } from './shared/add-result/add-result.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ResultsListComponent,
    ],
    imports: [
        SharedModule,
        MaterialModule,
    ],
    providers: [
        ResultService,
        MatDialog,
    ],
    bootstrap: [
        AppComponent,
    ],
    entryComponents: [
        AddResultComponent,
    ]
})
export class AppModule { }
