import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';

import { ResultService } from '../core/result.service';
import { Result } from '../models/result.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    results$: Observable<Result[]>;
    subscription$: Observable<Result[]>;

    constructor(
        private resultsService: ResultService,
    ) { }

    ngOnInit() {
        if (!this.results$) {
            this.results$ = this.resultsService.loadAllResults().pipe(
                tap(console.log)
            );
        }
    }

    ngOnDestroy() {
    }

}
