import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { redditSearch, redditData } from '../models/reddit.model';
import { Observable, of } from 'rxjs';

@Injectable()
export class RedditService {
  url = 'https://www.reddit.com'

  constructor(public http: HttpClient ) { }
  
  getSubReddit( 
      searchString?: string, 
      perviousPost?: string,
      nextPost?: string) : Observable<any>{
        let searchTerm = searchString || 'sweden';
        let previous = `&after=${perviousPost}&count=10` || '';
        let next = `&before=${nextPost}&count=10` || '';

        return this.http.get<any>(`${this.url}/r/${searchTerm}.json?limit=10${previous}${next}`).pipe(
          map((res: redditSearch) => res.data),
          catchError((err: any) => Observable.throw(err.json()) )
        )
  }

  getRedditComments() : Observable<any>{
      return this.http.get(`https://www.reddit.com/r/sweden/comments/9s9vr0/matlagningsm%C3%A5ndag_cooking_monday_29_october_2018.json`).pipe(
        map((res) => res[1]),
        catchError((err: any) => Observable.throw(err.json()) )
      )
  }
}

