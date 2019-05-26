import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';

import { ResultService } from '../core/result.service';
import { Result } from '../models/result.model';
import { AddResultComponent } from '../shared/add-result/add-result.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

    results$: Observable<Result[]>;

    constructor(
        public dialog: MatDialog,
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

    addResult() {
        console.log('Adding new result!');
        const dialogRef = this.dialog.open(AddResultComponent, {
            width: '250px',
        });

        dialogRef.afterClosed().pipe(
            first()
        ).subscribe((result: Result) => {
            console.log(JSON.stringify(result));
            this.resultsService.addNewResult(result);
        });
    }
}
