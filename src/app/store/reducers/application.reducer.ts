import * as fromApplication from '../actions/application.action';

export interface  ApplicationState {
 searchTerm: string;
 numPosts: number,
}

export const initialState = {
  searchTerm: 'sweden',
  numPosts: 10
}

export function reducer(
    state = initialState,
    action: fromApplication.ApplicationAction
) :  ApplicationState {
  switch(action.type){
    case fromApplication.SET_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: action.payload
      }
    }
    case fromApplication.CLEAR_SEARCH_TERM: {
      return {
        ...state,
        searchTerm: null
      }
    }
    case fromApplication.SET_POST_AMOUNT: {
      return {
        ...state,
        numPosts: action.payload
      }
    }
  }
  return state;
}

export const getSearchTerm = (state: ApplicationState) => state.searchTerm;
export const getNumPosts = (state: ApplicationState) => state.numPosts;