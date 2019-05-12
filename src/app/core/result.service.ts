import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
