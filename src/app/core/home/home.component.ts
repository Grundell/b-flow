import { Component, OnInit } from '@angular/core';
import { RedditService } from 'src/app/shared/services/reddit.service';
import { redditData } from 'src/app/shared/models/reddit.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  redditPost: any;

  constructor(
    private redditService: RedditService
  ) { }

  ngOnInit() {
    this.redditService.getSubReddit().subscribe( (data: redditData) => {
      this.redditPost = data.children;
      console.log(data);
    });
  }

}
