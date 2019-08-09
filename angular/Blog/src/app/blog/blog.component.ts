import { Post } from './../models/post.model';
import { PostsService } from './../posts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  arrPosts: Post[]

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().then(posts => {
      this.arrPosts = posts;
    })
  }

}
