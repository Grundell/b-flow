import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store/reducers';
import * as actions from '../../store/actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(
    private router: Router,
    private store: Store<fromStore.appState>
  ) { }

  ngOnInit() {

  }

  navigateHome(){
    this.store.dispatch(new actions.SetSearchTerm('Sweden'))
    this.router.navigate(['/'])
  }

}
