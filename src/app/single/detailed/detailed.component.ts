import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import { Observable } from 'rxjs';
import {redditPost} from '../../shared/models/reddit.model';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  post$: Observable<redditPost>

  constructor(
    private store: Store<fromStore.RedditState>
  ) { }

  ngOnInit() {
    this.post$ = this.store.select(fromStore.getSelected);
  }

}
