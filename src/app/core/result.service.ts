import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

import { Result } from '../models/result.model';

@Injectable()
export class ResultService {

    private _results: Result[];
    private results$: Subject<Result[]>;

    constructor() {
        this._results = [
            {
                name: 'Dyln Mrty',
                location: 'Bascom',
                img: 'assets/img/dyln.jpg',
            },
            {
                name: 'Kait Dog',
                location: 'Capitol',
                img: 'assets/img/kait.jpg',
            },
            {
                name: 'Dill',
                location: 'Monona Terrace',
                img: 'assets/img/default.png',
            },
            {
                name: 'Benjamin Lesterson',
                location: 'Capitol',
                img: 'assets/img/benji.jpg',
            },
            {
                name: 'The Doctor',
                location: 'Capitol',
                img: 'assets/img/stephen.jpg',
            },
            {
                name: 'Tater',
                location: 'Capitol',
                img: 'assets/img/potato.jpg',
            },
        ];
        this.results$ = new BehaviorSubject(this._results);
    }

    loadAllResults(): Observable<Result[]> {
        return this.results$.pipe(
            tap(console.log),
            distinctUntilChanged(),
        );
    }

    addNewResult(result: Result): void {
        this._results.push(result);
    }
}
