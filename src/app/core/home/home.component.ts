import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/services/reddit.service';
import { redditData, redditPost } from 'src/app/shared/models/reddit.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import * as fromReddit from '../../store/reducers'
import * as Actions from '../../store/actions/reddit.actions'
import { Observable } from 'rxjs' 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redditPost$: Observable<redditPost[]>;

  constructor(
    private store : Store<fromStore.RedditState>
  ) { }

  ngOnInit() {
     this.redditPost$ = this.store.select<redditPost[]>(fromReddit.getAllSubRedditsPosts);
     
    // this.redditService.getSubReddit().subscribe( (data: redditData) => {
    //   this.redditPost = data.children;
    //   console.log(data);
    // });
  }

  selectPost(post){
    this.store.dispatch(new Actions.SelectPost(post))
  }

}
