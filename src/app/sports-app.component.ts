import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Http, HTTP_PROVIDERS  } from '@angular/http';


@Component({
  moduleId: module.id,
  selector: 'sports-app-app',
  templateUrl: 'sports-app.component.html',
  styleUrls: ['sports-app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [Http, HTTP_PROVIDERS ]
})
export class SportsAppAppComponent {
  title = 'sports-app works!';
}
