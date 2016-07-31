import { Injectable } from '@angular/core';
import { Workout } from '../workout'
import { Subject } from 'rxjs/Subject'

@Injectable()
export class WorkoutMediator {
    private actionTypeSource = new Subject<string>();
    public actionTypeChangeDetected = this.actionTypeSource.asObservable();
    
    constructor() {}

    public actionTypeChanged(newValue: string) {
        this.actionTypeSource.next(newValue);
    }
}