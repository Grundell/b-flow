import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError ,tap } from 'rxjs/operators';

import * as redditActions from '../actions/reddit.actions';
import * as applicationActions from '../actions/application.action';

@Injectable()
export class ApplicationEffects {
  constructor(private actions$: Actions){}
}