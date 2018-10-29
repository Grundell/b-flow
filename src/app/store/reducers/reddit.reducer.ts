import { redditSearch, redditChildren, redditPost, redditData } from "../../shared/models/reddit.model";
import * as fromReddit from '../actions/reddit.actions';

export interface  RedditState {
  enteties: { [id: string] : redditPost}
  after: string;
  before: string;
  loaded: boolean;
  loading: boolean;
}


export const initialState = {
  enteties: {},
  loaded: false,
  loading: false,
  after: null,
  before: null,
}

export function reducer( 
                    state = initialState, 
                    action: fromReddit.RedditAction
): RedditState {
  
  switch(action.type){
    case fromReddit.LOAD_SUBREDDIT: {
      return {
        ...state,
        loading: true
      }
    }
    case fromReddit.LOAD_SUBREDDIT_FAIL: {
      return {
        ...state, 
        loading: false,
        loaded: false,
      }
    }
    case fromReddit.LOAD_SUBREDDIT_SUCCESS: {
      const posts: redditData = action.payload;
      
      const enteties = posts.children.reduce((enteties: { [id: string] : redditChildren }, reddit) => {
        return {
          ...enteties,
          [reddit.data.id]: reddit,
        }
      }, {
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        after: action.payload.after,
        before: action.payload.before,
        enteties
      }
    }
  }

  return state;
}

export const getRedditLoading = (state: RedditState ) => state.loading;
export const getRedditLoaded = (state: RedditState ) => state.loaded;
export const getEnteties = ( state: RedditState ) => state.enteties;  

