import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ResultService } from './core/result.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResultsListComponent } from './results-list/results-list.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        ResultsListComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatCardModule,
        SharedModule,
        MatToolbarModule,
    ],
    providers: [
        ResultService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
