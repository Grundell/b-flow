import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromStore from '../../../store/reducers';
import * as Actions from '../../../store/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-paging',
  templateUrl: './paging.component.html',
  styleUrls: ['./paging.component.scss']
})
export class PagingComponent implements OnInit {
  paging$: Observable<any>;
  numPosts$: Observable<any>;

  number: 10;

  constructor(private store: Store<fromStore.appState>) { }

  ngOnInit() {
  
    this.paging$ = this.store.select(fromStore.getPaging);
    this.numPosts$ = this.store.select(fromStore.getNumPosts);

  }

  getPreviousPosts(postKey){
    this.store.dispatch(new Actions.LoadSubreddit(postKey))
  }

  getNextPosts(postKey){
    this.store.dispatch(new Actions.LoadSubreddit(postKey))
  }

  updatePostAmount(value){
    this.store.dispatch(new Actions.SetNumOfPosts(value))
  }

}
