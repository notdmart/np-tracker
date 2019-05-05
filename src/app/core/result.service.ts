import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Result } from '../models/result.model';

@Injectable()
export class ResultService {

    constructor() { }

    loadAllResults(): Observable<Result[]> {
        const results: Result[] = [
            {
                name: 'DylnMrty',
                location: 'Bascom',
            },
            {
                name: 'KaitDog',
                location: 'Capitol',
            },
        ];

        return of(results);
    }

}
