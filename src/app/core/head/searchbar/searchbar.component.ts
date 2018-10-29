import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchString: string;
  constructor( private store: Store<fromStore.RedditState>) { }

  ngOnInit() {
    this.store.dispatch(new fromStore.LoadSubreddit())
  }

  submit(){
    this.store.dispatch(new fromStore.LoadSubreddit(this.searchString))
    console.log(this.searchString);
  }
}
