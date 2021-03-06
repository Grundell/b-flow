import { redditSearch, redditChildren, redditPost, redditData } from "../../shared/models/reddit.model";
import * as fromReddit from '../actions/reddit.actions';
import { state } from "@angular/animations";

export interface  RedditState {
  enteties: { [id: string] : redditPost }
  before_after: {
    before: string;
    after: string;
  };
  loaded: boolean;
  loading: boolean;
  selectedThread: redditPost;
  comments: {[id: string] : redditPost};
  loadingComments: boolean;
}


export const initialState = {
  enteties: {},
  loaded: null,
  loading: false,
  before_after: {
    before: null,
    after: null,
  },
  selectedThread: null,
  comments: {},
  loadingComments:false, 
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
          [reddit.data.id]: reddit.data,
        }
      }, {
      });

      return {
        ...state,
        loading: false,
        loaded: true,
        before_after: {
          after: action.payload.after,
          before: action.payload.before
        },
        enteties
      }
    }
    case fromReddit.LOAD_SUBREDDIT_COMMENTS_SUCCESS:
    const rComments = action.payload.children; 

    const comments = rComments.reduce((comments: {[id: string] : redditChildren },redditComment) => 
      {
        return {
          ...comments,
          [redditComment.data.id]: redditComment.data
        }
      },{
        ...state.comments
      }
      );

     return {
       ...state,
      comments,
      loadingComments: false,
     }

    case fromReddit.LOAD_POST_THREAD : {
      return {
        ...state, 
        selectedThread: action.payload
      }
    }
    case fromReddit.LOAD_SUBREDDIT_COMMENTS: 
      return {
        ...state,
        loadingComments: true,
      }
    case fromReddit.REMOVE_SUBREDDIT_COMMENTS:
      return {
        ...state,
        comments: {}
      }
  
  }

  return state;
}

export const getRedditLoading = (state: RedditState ) => state.loading;
export const getRedditLoaded = (state: RedditState ) => state.loaded;
export const getEnteties = ( state: RedditState ) => state.enteties; 
export const getPaging = (state: RedditState ) => state.before_after;
export const getSelected = (state: RedditState ) => state.selectedThread;
export const getComments = (state: RedditState ) => state.comments;
export const getCommetsLodaing = (state: RedditState) => state.loadingComments;

