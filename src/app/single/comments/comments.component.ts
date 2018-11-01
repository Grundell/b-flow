import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { redditPost } from '../../shared/models/reddit.model';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  comments$: Observable<redditPost[]>;
  isLoading$: Observable<boolean>;
  constructor(
    private store: Store<fromStore.appState>
  ) { }

  ngOnInit() {
    this.isLoading$ = this.store.select(fromStore.getRedditLoading);
    this.comments$ = this.store.select<redditPost[]>(fromStore.getAllComments)
  }

}
