import * as fromReddit from './reddit.reducer';
import { ActionReducerMap, createFeatureSelector, createSelector, ActionReducer, MetaReducer  } from '@ngrx/store';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';

export interface RedditState {
  redditData: fromReddit.RedditState
}

export const reducers: ActionReducerMap<RedditState> = {
  redditData: fromReddit.reducer
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  const config: LocalStorageConfig = {
    keys: [
      'reddit'
    ],
    rehydrate: true,
    removeOnUndefined: true
  };
  return localStorageSync(config)(reducer);
}

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];



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
      console.log(enteties);
     return Object.keys(enteties).map(id => enteties[id])
    }
    )
    
export const getComments = createSelector(getRedditData, fromReddit.getComments);

export const getAllComments = createSelector(
  getComments,
  (comments) => {
    console.log(comments);
    return Object.keys(comments).map(id => comments[id])
  }
);


export const getRedditLoading = createSelector(getRedditData, fromReddit.getRedditLoading);

export const getRedditLoaded = createSelector(getRedditData, fromReddit.getRedditLoaded);

export const getBefore = createSelector(getRedditData, fromReddit.getBefore);

export const getAfter = createSelector(getRedditData, fromReddit.getAfter);

export const getSelected = createSelector(getRedditData, fromReddit.getSelected);


