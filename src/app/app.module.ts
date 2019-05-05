import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultService } from './core/result.service';
import { ResultsListComponent } from './results-list/results-list.component';



@NgModule({
    declarations: [
        AppComponent,
        ResultsListComponent,
    ],
    imports: [
        BrowserModule,
    ],
    providers: [
        ResultService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
