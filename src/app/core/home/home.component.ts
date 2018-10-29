import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/services/reddit.service';
import { redditData } from 'src/app/shared/models/reddit.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromReddit from '../../store/reducers'
import { Observable } from 'rxjs' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redditPost$: Observable<any>;

  constructor(
    private redditService: RedditService,
    private store : Store<fromStore.RedditState>
  ) { }

  ngOnInit() {

     this.redditPost$ = this.store.select<any>(fromReddit.getAllSubRedditsPosts);

     this.store.dispatch(new fromStore.LoadSubreddit())
    // this.redditService.getSubReddit().subscribe( (data: redditData) => {
    //   this.redditPost = data.children;
    //   console.log(data);
    // });
  }

}
