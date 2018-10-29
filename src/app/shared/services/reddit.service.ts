import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { redditSearch, redditData } from '../models/reddit.model';
import { Observable } from 'rxjs';

@Injectable()
export class RedditService {
  url = 'https://www.reddit.com/'

  constructor(public http: HttpClient ) { }
  
  getSubReddit(searchString?: string) : Observable<any>{
    if(searchString){
      console.log('we have a string')
    }
    else{
      return this.http.get<any>(`${this.url}r/sweden.json?limit=9&count=10`).pipe(
        map((res: redditSearch) => res.data),
        tap(console.log),
        catchError((err: any) => Observable.throw(err.json()) )
      )
      
    }
  }

  getRedditComments(){
    
  }
}

