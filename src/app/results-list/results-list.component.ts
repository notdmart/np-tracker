import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../models/result.model';

@Component({
    selector: 'app-results-list',
    templateUrl: './results-list.component.html',
    styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {

    @Input() results: Result[];

    constructor() { }

    ngOnInit() {
    }

}
