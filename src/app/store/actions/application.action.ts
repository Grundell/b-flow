import { Action } from '@ngrx/store';

export const SET_SEARCH_TERM = '[Application] Set Seach term';
export const CLEAR_SEARCH_TERM = '[Application] Clear Seach term';
export const SET_POST_AMOUNT = '[Application] Set number of posts';

export class SetSearchTerm implements Action {
  readonly type = SET_SEARCH_TERM;
  constructor( public payload: any ){}
}

export class ClearSearchTerm implements Action {
  readonly type = CLEAR_SEARCH_TERM;
}

export class SetNumOfPosts implements Action {
  readonly type = SET_POST_AMOUNT;
  constructor( public payload: number ) {}
}

export type ApplicationAction = SetSearchTerm | ClearSearchTerm | SetNumOfPosts; 