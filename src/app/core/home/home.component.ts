import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/services/reddit.service';
import { redditData, redditPost } from 'src/app/shared/models/reddit.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromReddit from '../../store/reducers';
import * as Actions from '../../store/actions/reddit.actions';
import { Observable } from 'rxjs' 
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redditPost$: Observable<redditPost[]>;
  isLoading$: Observable<any>;

  constructor(
    private store : Store<fromStore.appState>,
    private router: Router
  ) { }

  ngOnInit() {
     this.redditPost$ = this.store.select<redditPost[]>(fromReddit.getAllSubRedditsPosts);
     this.isLoading$ = this.store.select(fromReddit.getRedditLoading);
  }

  selectPost(post: redditPost){
    this.store.dispatch( new Actions.RemoveSubredditComments);
    this.store.dispatch(new Actions.SelectPost(post));
    this.store.dispatch(
      new Actions.LoadSubredditComments(post.permalink)
      )
    this.router.navigate(['/detailed', post.id]);
    
  }




}
