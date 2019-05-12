import { Component, Input, OnInit } from '@angular/core';

import { Result } from '../../models/result.model';

@Component({
    selector: 'app-result-card',
    templateUrl: './result-card.component.html',
    styleUrls: ['./result-card.component.css']
})
export class ResultCardComponent implements OnInit {

    @Input() result: Result;

    constructor() { }

    ngOnInit() {
    }

}
