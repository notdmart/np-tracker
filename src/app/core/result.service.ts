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

        return of(results);
    }

}
