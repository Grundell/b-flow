 import { Action } from '@ngrx/store';
import { redditSearch, redditData, redditPost } from 'src/app/shared/models/reddit.model';

 // Load subreddit 
export const LOAD_SUBREDDIT = '[Reddit] Load subreddit';
export const LOAD_SUBREDDIT_FAIL = '[Reddit] Load subreddit failed';
export const LOAD_SUBREDDIT_SUCCESS = '[Reddit] Load subreddit Suceed';
export const LOAD_POST_THREAD = '[Reddit] Load Post thread';
export const LOAD_SUBREDDIT_COMMENTS = '[Reddit] Load Post comment thread';
export const LOAD_SUBREDDIT_COMMENTS_SUCCESS = '[Reddit] Load Post comment thread succed';
export const REMOVE_SUBREDDIT_COMMENTS = '[Reddit] Remove Post comment thread';

export class LoadSubreddit implements Action { 
  readonly type =  LOAD_SUBREDDIT;
  constructor( public payload?: any){}
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
  constructor( public payload: redditPost ) {}
}

export class LoadSubredditComments implements Action {
  readonly type = LOAD_SUBREDDIT_COMMENTS;
  constructor( public payload: any ){
  }
}

export class LoadSubredditCommentsSuccess implements Action {
  readonly type = LOAD_SUBREDDIT_COMMENTS_SUCCESS;
  constructor( public payload: any  ){
  }
}

export class RemoveSubredditComments implements Action {
  readonly type = REMOVE_SUBREDDIT_COMMENTS;
}

export type RedditAction = LoadSubreddit | LoadSubredditFail | LoadSubredditSuccess | SelectPost | LoadSubredditComments | LoadSubredditCommentsSuccess | RemoveSubredditComments;