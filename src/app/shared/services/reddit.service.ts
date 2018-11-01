import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap, take, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { redditSearch, redditData } from '../models/reddit.model';
import { Observable, of } from 'rxjs';
import * as fromStore from '../../store/reducers';
import {Store} from '@ngrx/store';

@Injectable()
export class RedditService {
  url = 'https://www.reddit.com'
  searchTerm$: Observable<any>;
  prev_next$: Observable<any>;

  constructor(public http: HttpClient, private store: Store<fromStore.appState> ) {
    this.searchTerm$ = this.store.select(fromStore.getSearchTerm);
    this.prev_next$ = this.store.select(fromStore.getPaging);
   }
  
   // One Query To Rule Them All. 
  getSubReddit( 
      payload: any) : Observable<any>{
       return this.searchTerm$.pipe(
         // Get the term from store 
          distinctUntilChanged(),
          map(data => data),
          switchMap(searchTerm => {
            // Get number of posts from store
            return this.store.select(fromStore.getNumPosts)
            .pipe(
              distinctUntilChanged(),
              map(numPosts => {
                // assing object of posts
                let searchQuery = Object.assign({searchTerm , numPosts})
                return searchQuery;
              })
            )
          }),
          switchMap(searchQuery => {
            // Get Previous after from store,
            return this.prev_next$.pipe(
              take(1),
              map(paging => {
                let queryFor: string;
                // Change query based on payload
                // Todo: Clean up. 
                if(payload.payload === 'after'){
                  queryFor = `&after=${paging.after}&count=${searchQuery.numPosts}`;
                } else if (payload.payload === 'before') {
                  queryFor = `&before=${paging.before}&count=${searchQuery.numPosts}`;
                }
                else {
                  queryFor = '';
                }
                // assign Search Params 
                let searchParams = Object.assign(searchQuery, {queryFor}) 
                return searchParams;   
              })
            )
          }),
          switchMap(search => {
            // Make query to reddit
            return this.http.get<any>(`${this.url}/r/${search.searchTerm}.json?raw_json=1&limit=${search.numPosts}${search.queryFor}`).pipe(
              map((res: redditSearch) => res.data),
              catchError((err: any) => 
              Observable.throw(err.json()) )
            )
          }),
        )
      }

  getQueryParams(payload){
    return 
  }

  getRedditComments(url) : Observable<any>{
      return this.http.get(`${this.url}${url.payload}.json?raw_json=1`).pipe(
        map((res) => res[1]),
        catchError((err: any) => Observable.throw(err.json()) )
      )
  }
}

