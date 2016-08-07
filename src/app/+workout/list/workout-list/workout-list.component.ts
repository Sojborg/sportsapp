import { Component, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Workout } from '../../workout';
import { WorkoutService } from '../../shared/workout.service';
import { WorkoutMediator } from '../../shared/workout.mediator';
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/mergeAll';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-workout-list',
    templateUrl: 'workout-list.component.html',
    styleUrls: ['workout-list.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [WorkoutService]
})
export class WorkoutListComponent {
    private actiontype: string;
    @Output() selectedEvent: EventEmitter<string> = new EventEmitter<string>();
    private oldActionType: string;

    private workouts: Array<Workout> = new Array<Workout>();

    constructor(private workoutService: WorkoutService, private workoutMediator: WorkoutMediator) {
        this.workoutMediator.actionTypeChangeDetected.subscribe(newValue => {
            this.getWorkouts(newValue);
        });
    }

    private getWorkouts(search) {
        this.workouts = [];
        this.workoutService.getWorkouts(search)
            .subscribe(x => {
                this.workouts.push(x);
            }, (error: any): void => {
                console.error("Error from the server " + error);
            });
    }

    workoutSelected(): void {
        this.selectedEvent.emit("testing workout...");
    }

}
