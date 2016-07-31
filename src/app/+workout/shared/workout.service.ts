import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Workout } from '../workout'
import { Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/filter';

@Injectable()
export class WorkoutService {
    
    constructor(private http: Http) {

    }

    public getWorkouts = (workoutType: string): Observable<Workout> => {
        return this.http.get('http://localhost:4200/vendor/data/workouts.json')
            .mergeMap(x => x.json())
            .filter((y: Workout) => y.type === workoutType)
            .map(workout => workout)
            .catch((err: any, caught: Observable<any>): Observable<any> => {
                console.log("crap it fucked up!");
                return Observable.throw("Wow this one really fucked up! Do something!!!");
            });
    }

    private createWorkout(name: string, type: string, length: number): Workout {
        return <Workout>{
            name: name,
            type: type,
            length: length
        }
    }
}