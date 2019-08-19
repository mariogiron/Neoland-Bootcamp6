import { Post } from './models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[]

  constructor() {
    if (localStorage.getItem('posts')) {
      let arr = JSON.parse(localStorage.getItem('posts'));
      this.arrPosts = arr;
    } else {
      this.arrPosts = [];
    }
  }

  agregarPost(pPost) {
    this.arrPosts.push(pPost);
    let arrPostsStr = JSON.stringify(this.arrPosts);
    localStorage.setItem('posts', arrPostsStr);
  }

  getAllPosts(): Promise<Post[]> {
    return Promise.resolve(this.arrPosts);
  }
}
