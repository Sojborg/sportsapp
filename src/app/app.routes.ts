import { provideRouter, RouterConfig } from '@angular/router';
import { WorkoutComponent, WorkoutDetailsComponent } from './+workout';
import { RaceComponent } from './+race';
import { UsersComponent } from './+users';
import { AuthGuard } from './auth-guard.service';

const routes: RouterConfig = [
    {
        path: 'workout',
        component: WorkoutComponent
    },
    {
        path: 'workoutdetails/:id',
        component: WorkoutDetailsComponent
    },
    {
        path: 'race',
        component: RaceComponent
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];