import { Post } from './models/post.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[]

  constructor() {
    this.arrPosts = [];
  }

  agregarPost(pPost) {
    this.arrPosts.push(pPost);
  }

  getAllPosts(): Promise<Post[]> {
    return Promise.resolve(this.arrPosts);
  }
}
