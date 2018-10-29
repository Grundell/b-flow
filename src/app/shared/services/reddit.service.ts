import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { redditSearch } from '../models/reddit.model';

@Injectable({
  providedIn: 'root'
})
export class RedditService {
  api = 'https://www.reddit.com/r/'
  constructor(public http: HttpClient ) { }
  
  getSubReddit(searchString?: string){
    if(searchString){
      console.log('we have a string')
    }
    else{
      return this.http.get(`${this.api}sweden.json?limit=10&count=10`)
      .pipe(
        map(
          (res : redditSearch) => res.data
        )
      )
    }
  }
}

