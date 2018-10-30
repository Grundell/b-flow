import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromReddit from '../../../store/reducers';
import * as Actions from '../../../store/actions/reddit.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  before: Observable<string>;
  after: Observable<string>;

  constructor(private store: Store<fromReddit.RedditState>) { }

  ngOnInit() {
  
    this.before = this.store.select(fromReddit.getBefore);
    this.after = this.store.select(fromReddit.getAfter);
  }

  getPreviousPosts(postKey){
    console.log('postKey previous', postKey);
    this.store.dispatch(new Actions.LoadSubreddit('', postKey));
  }

  getNextPosts(postKey){
    console.log('postKey next', postKey);
    this.store.dispatch(new Actions.LoadSubreddit('', '', postKey ));
  }

}
