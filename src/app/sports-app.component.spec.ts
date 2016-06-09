import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SportsAppAppComponent } from '../app/sports-app.component';

beforeEachProviders(() => [SportsAppAppComponent]);

describe('App: SportsApp', () => {
  it('should create the app',
      inject([SportsAppAppComponent], (app: SportsAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'sports-app works!\'',
      inject([SportsAppAppComponent], (app: SportsAppAppComponent) => {
    expect(app.title).toEqual('sports-app works!');
  }));
});
