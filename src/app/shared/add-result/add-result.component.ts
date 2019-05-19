import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

import { Result } from '../../models/result.model';

@Component({
    selector: 'app-add-result',
    templateUrl: './add-result.component.html',
    styleUrls: ['./add-result.component.css']
})
export class AddResultComponent implements OnInit {

    newResult: Result;

    constructor(
        private dialogRef: MatDialogRef<AddResultComponent>,
    ) {
        this.newResult = {
            name: '',
            location: '',
        };
    }

    ngOnInit() {
    }
}
