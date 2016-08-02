import { provideRouter, RouterConfig } from '@angular/router';
import { WorkoutComponent } from './+workout';
import { RaceComponent } from './+race';
import { UsersComponent } from './+users';

const routes: RouterConfig = [
    {
        path: 'workout',
        component: WorkoutComponent
    },
    {
        path: 'race',
        component: RaceComponent
    },
    {
        path: 'users',
        component: UsersComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];