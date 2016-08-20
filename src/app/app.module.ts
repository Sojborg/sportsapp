import { NgModule }       from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { SportsAppComponent }   from './sports-app.component';
import { WorkoutComponent }   from './+workout/workout.component';
import { WorkoutListComponent }   from './+workout/list/workout-list/workout-list.component';
import { WorkoutDetailsComponent }   from './+workout/details/workout-details.component';
 
import { WorkoutService } from './+workout/shared/workout.service';
import { WorkoutMediator } from './+workout/shared/workout.mediator';
import { HttpModule  } from '@angular/http';
import { routing } from './app.routes';
import { FormsModule }   from '@angular/forms';

@NgModule({
    declarations: [SportsAppComponent, WorkoutComponent, WorkoutDetailsComponent, WorkoutListComponent],
    imports:      [BrowserModule, HttpModule, routing, FormsModule],
    bootstrap:    [SportsAppComponent],
    providers:    [WorkoutService, WorkoutMediator]
})
export class AppModule {}
