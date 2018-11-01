import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store'
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchString: string;
  searchTerm$: Observable<string>;
  constructor( private store: Store<fromStore.appState>) { }

  ngOnInit() {
    // this.store.dispatch(new fromStore.LoadSubreddit())
    this.searchTerm$ = this.store.select(fromStore.getSearchTerm);

    this.store.dispatch(new fromStore.LoadSubreddit)
  }

  submit(){
    this.store.dispatch(new fromStore.SetSearchTerm(this.searchString));
    // this.store.dispatch(new fromStore.LoadSubreddit(this.searchString)) 
  }
  
}
