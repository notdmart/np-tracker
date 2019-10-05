import { inject, TestBed } from '@angular/core/testing';

import { ResultService } from './result.service';

describe('ResultService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ResultService]
        });
    });

    it('should be created', inject([ResultService], (service: ResultService) => {
        expect(service).toBeTruthy();
    }));

    it('should return a hard-coded list of results by default', inject([ResultService], (service: ResultService) => {
        const results = service.loadAllResults();

        expect(results.length).toBe(2);
    }));
});
