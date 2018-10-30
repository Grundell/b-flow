import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError ,tap } from 'rxjs/operators';

import * as redditActions from '../actions/reddit.actions';
import * as fromService from '../../shared/services';
import { redditSearch, redditData } from 'src/app/shared/models/reddit.model';
import { getRedditData } from '../reducers';


@Injectable()

export class  RedditEffects {
  constructor( private actions$: Actions, private redditService: fromService.RedditService ){}

  @Effect()  
  loadChildren$ = this.actions$.ofType(redditActions.LOAD_SUBREDDIT)
    .pipe(
      switchMap((payload?: any) => {

          let searchTerm = payload.searchString || 'sweden';
          return this.redditService.getSubReddit(searchTerm).pipe(
            map((res: redditData) =>
              new redditActions.LoadSubredditSuccess(res)
            ),
            catchError(error => of(new redditActions.LoadSubredditFail(error)))
          )
      })
    )

    @Effect()  
    loadComments$ = this.actions$.ofType(
      redditActions.LOAD_SUBREDDIT_COMMENTS
    ).pipe(
      switchMap(() => {
        return this.redditService.getRedditComments().pipe(
          map((res) => { 
            return new redditActions.LoadSubredditCommentsSuccess(res.data);
            }
          ),tap(data => (console.log)),
          catchError(error => of(new redditActions.LoadSubredditFail(error)))
        )
      })
    )


    // loadSubredditCommet$ = this.actions$
    // .ofType(redditActions.LOAD_SUBREDDIT_COMMENTS)
    //   .pipe(
    //     switchMap(() => {
    //          return this.redditService.getRedditComments()
    //          .pipe(
    //            map( (res: redditSearch ) => {
    //              new redditActions.LoadSubredditSuccess(res.data);
    //            })
    //           //  catchError(error => of(new redditActions.LoadSubredditFail(error)))
    //          )
    //      })
    //   )
}