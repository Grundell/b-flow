import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError  } from 'rxjs/operators';

import * as redditActions from '../actions/reddit.actions';
import * as fromService from '../../shared/services';
import { redditSearch, redditData } from 'src/app/shared/models/reddit.model';


@Injectable()

export class  RedditEffects {
  constructor( private actions$: Actions, private redditService: fromService.RedditService ){}

  @Effect()  
  loadChildren$ = this.actions$.ofType( redditActions.LOAD_SUBREDDIT)
    .pipe(
      switchMap(() => {
        return this.redditService.getSubReddit().pipe(
          map((res: redditData) => new redditActions.LoadSubredditSuccess(res)),
          catchError(error => of(new redditActions.LoadSubredditFail(error)))
        )
      })
    )
}