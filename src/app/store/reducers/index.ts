import { ActionReducerMap, createFeatureSelector, createSelector, ActionReducer, MetaReducer  } from '@ngrx/store';

import * as fromReddit from './reddit.reducer';
import * as fromApplication from './application.reducer';

export interface appState {
  redditData: fromReddit.RedditState,
  application: fromApplication.ApplicationState
}

export const reducers: ActionReducerMap<appState> = {
  redditData: fromReddit.reducer,
  application: fromApplication.reducer
}




export const getAppState = createFeatureSelector<appState>('reddit'); 

// Application State.

export const getApplicationData = createSelector(
  getAppState,
  (state: appState) => state.application
)

export const getSearchTerm = createSelector(getApplicationData, 
  fromApplication.getSearchTerm
  );
  
export const getNumPosts = createSelector       (getApplicationData, 
    fromApplication.getNumPosts
 );

// reddit state 
export const getRedditData = createSelector(
  getAppState,
  (state: appState) => state.redditData
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
    
export const getComments = createSelector(getRedditData, fromReddit.getComments);

export const getAllComments = createSelector(
  getComments,
  (comments) => {
    return Object.keys(comments).map(id => comments[id])
  }
);


export const getRedditLoading = createSelector(getRedditData, fromReddit.getRedditLoading);

export const getRedditLoaded = createSelector(getRedditData, fromReddit.getRedditLoaded);

export const getPaging = createSelector(getRedditData, fromReddit.getPaging);

export const getSelected = createSelector(getRedditData, fromReddit.getSelected);


