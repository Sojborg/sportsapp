import { Component } from '@angular/core';
import { WorkoutComponent } from './+workout';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { RaceComponent } from './+race';
import { UsersComponent } from './+users';
import { Http, HTTP_PROVIDERS  } from '@angular/http'

@Component({
  moduleId: module.id,
  selector: 'sports-app-app',
  templateUrl: 'sports-app.component.html',
  styleUrls: ['sports-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS, Http, HTTP_PROVIDERS]
})
@Routes([
  {path: '/workout', component: WorkoutComponent},
  {path: '/race', component: RaceComponent},
  {path: '/users', component: UsersComponent}
])
export class SportsAppAppComponent {
  title = 'sports-app works!';
}
