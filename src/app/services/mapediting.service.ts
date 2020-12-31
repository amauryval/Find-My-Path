import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';



@Injectable()
export class MapEditingService {

    EditModeEnabled!: boolean;
    EditModeStatus: Subject<boolean> = new Subject<boolean>();

    constructor() { }

    setEdit(status: boolean): void {
        this.EditModeEnabled = status;
        this.EditModeStatus.next(this.EditModeEnabled);
    }
}
