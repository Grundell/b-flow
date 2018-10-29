import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {
  searchString: string;
  constructor() { }

  ngOnInit() {
  }

  submit(){
    console.log(this.searchString);
  }
}
