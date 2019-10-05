import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'hhmmss'
})
export class HhmmssPipe implements PipeTransform {

    private readonly DECIMAL_RADIX = 10;

    transform(value: number): string | null {
        if (!value) {
            return null;
        }

        let hours: number;
        let minutes: number;
        let seconds: number;

        seconds = value % 60;
        minutes = Math.floor(((value - seconds) / 60) % 60);
        hours = Math.floor(value / 3600);

        let time = `${this.timeString(minutes)}:${this.timeString(seconds)}`;

        if (hours) {
            time = `${this.timeString(hours)}:${time}`;
        }

        return time;
    }

    private timeString(value: number): string {
        return this.zeroPad(this.stringify(value));
    }

    private stringify(value: number): string {
        return value.toString(this.DECIMAL_RADIX);
    }

    private zeroPad(value: string): string {
        return value.padStart(2, '0');
    }

}
