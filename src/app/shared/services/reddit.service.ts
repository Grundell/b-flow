import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { redditSearch, redditData } from '../models/reddit.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class RedditService {
  url = 'https://www.reddit.com/'

  constructor(public http: HttpClient ) { }
  
  getSubReddit(searchString?: string) : Observable<any>{
    let searchTerm = searchString || 'sweden';

    return this.http.get<any>(`${this.url}r/${searchTerm}.json?limit=10&count=10`).pipe(
      map((res: redditSearch) => res.data),
      catchError((err: any) => Observable.throw(err.json()) )
    )
  }

  getRedditComments(){
    
  }
}

