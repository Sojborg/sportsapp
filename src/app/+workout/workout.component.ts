import { Component, OnInit } from '@angular/core';
import { WorkoutListComponent } from './list/workout-list/workout-list.component';
import { Observable } from 'rxjs/Observable'
import { Subject } from 'rxjs/Subject'
import { WorkoutMediator } from './shared/workout.mediator'
import 'rxjs/Rx'

@Component({
    moduleId: module.id,
    selector: 'app-workout',
    templateUrl: 'workout.component.html',
    styleUrls: ['workout.component.css'],
    directives: [WorkoutListComponent],
    providers: [WorkoutMediator]
})
export class WorkoutComponent implements OnInit {
    activeworkouttype: string;    

    constructor(private workoutMediator: WorkoutMediator) { }

    ngOnInit() {

    }

    private setSelectedWorkout(workout: string) {
        console.log("Workout selected" + workout);
    }

    public actionTypeSearchChanged(newValue) {
        this.workoutMediator.actionTypeChanged(newValue);
        this.activeworkouttype = newValue;
    }
}
