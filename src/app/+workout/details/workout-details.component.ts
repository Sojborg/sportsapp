import { Component, OnInit } from '@angular/core';
import { Workout } from '../workout';
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'workout-details',
    templateUrl: '/app/+workout/details/workout-details.component.html'
})
export class WorkoutDetailsComponent implements OnInit {
    private WorkoutDetails: Workout;
    private name: string = "123";

    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.name = params['id']; 
        });
    }
}