import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultService } from './core/result.service';



@NgModule({
    declarations: [
        AppComponent,
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
