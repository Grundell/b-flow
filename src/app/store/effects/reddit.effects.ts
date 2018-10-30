import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError ,tap } from 'rxjs/operators';

import * as redditActions from '../actions/reddit.actions';
import * as fromService from '../../shared/services';
import { redditSearch, redditData } from 'src/app/shared/models/reddit.model';


@Injectable()

export class  RedditEffects {
  constructor( private actions$: Actions, private redditService: fromService.RedditService ){}

  @Effect()  
  loadChildren$ = this.actions$.ofType(redditActions.LOAD_SUBREDDIT)
    .pipe(
      switchMap((payload?: any) => {
        console.log(payload);
        let searchTerm = payload.searchString || 'sweden';
        let after = payload.after || '';
          return this.redditService.getSubReddit(searchTerm, after).pipe(
            map((res: redditData) =>
              new redditActions.LoadSubredditSuccess(res)
            ),
            tap(data => console.log('retun data', data)),
            catchError(error => of(new redditActions.LoadSubredditFail(error)))
          )
      })
    )
}