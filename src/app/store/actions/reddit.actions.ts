 import { Action } from '@ngrx/store';
import { redditSearch, redditData, redditPost } from 'src/app/shared/models/reddit.model';

 // Load subreddit 
export const LOAD_SUBREDDIT = '[Reddit] Load subreddit';
export const LOAD_SUBREDDIT_FAIL = '[Reddit] Load subreddit failed';
export const LOAD_SUBREDDIT_SUCCESS = '[Reddit] Load subreddit Suceed';
export const LOAD_POST_THREAD = '[Reddit] Load Post thread';

export class LoadSubreddit implements Action { 
  readonly type =  LOAD_SUBREDDIT;
  constructor( public searchString?: string ){}
}

export class LoadSubredditFail implements Action { 
  readonly type =  LOAD_SUBREDDIT_FAIL;
  constructor(public payload: any ) {}
}

export class LoadSubredditSuccess implements Action { 
  readonly type =  LOAD_SUBREDDIT_SUCCESS;
  constructor( public payload: redditData ) {}
}

export class SelectPost implements Action {
  readonly type = LOAD_POST_THREAD;
  constructor( public payload:  redditPost ) {}
}

export type RedditAction = LoadSubreddit | LoadSubredditFail | LoadSubredditSuccess | SelectPost;