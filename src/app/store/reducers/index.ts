import * as fromReddit from './reddit.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

export interface RedditState {
  redditData: fromReddit.RedditState
}

export const reducers: ActionReducerMap<RedditState> = {
  redditData: fromReddit.reducer
}

export const getRedditState = createFeatureSelector<RedditState>('reddit'); 

// reddit state 
export const getRedditData = createSelector(
  getRedditState,
  (state: RedditState) => state.redditData
); 

export const getRedditEnteties = createSelector(
  getRedditData, 
  fromReddit.getEnteties);

export const getAllSubRedditsPosts = createSelector(
   getRedditEnteties,
   (enteties) => {
     return Object.keys(enteties).map(id => enteties[id])
    }
  )


export const getRedditLoading = createSelector(getRedditData, fromReddit.getRedditLoading);

export const getRedditLoaded = createSelector(getRedditData, fromReddit.getRedditLoaded);