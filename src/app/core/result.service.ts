import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Result } from '../models/result.model';

@Injectable()
export class ResultService {

    constructor() { }

    loadAllResults(): Observable<Result[]> {
        const results: Result[] = [
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
        ];

        return of(results);
    }

}
