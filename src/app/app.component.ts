import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostService) {

  }

  ngOnInit() {
    this.posts = this.postsService.posts;
  }
}
