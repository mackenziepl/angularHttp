import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  allPosts$: Observable<Array<Post>>;

  constructor(private httpService: HttpService) {}

  getPosts() {
    this.allPosts$ = this.httpService.getPosts();
  }

  /** getPosts() {
    this.httpService.getPosts().subscribe(posts => {
      console.log(posts);
    },
    (error: HttpErrorResponse) => {
      console.log(error.status);
    }
    );
  } */

  getPost() {
    this.httpService.getPost(1).subscribe(post => {
      console.log(post);
    });
  }

  getPostByUser() {
    this.httpService.getPostByUser(1).subscribe(posts => {
      console.log(posts);
    });
  }

  addPost() {
    const p: Post = ({
      userId: 1,
      id: null,
      title: 'My post',
      body: 'First post about Angular!'
    });

    this.httpService.addPost(p).subscribe(post => {
      console.log(post);
    });
  }

  updatePost() {
    const p: Post = ({
      userId: 1,
      id: 1,
      title: 'Other post',
      body: 'New post'
    });

    this.httpService.updatetPost(p).subscribe(post => {
      console.log(post);
    });
  }

  deletePost() {
    this.httpService.deletePost(1).subscribe(post => {
      console.log(post);
    });
  }

  changePost() {
    const p: Post = ({
      id: 1,
      body: 'Change post'
    });

    this.httpService.changetPost(p).subscribe(post => {
      console.log(post);
    });
  }
}

export interface Post {
  userId?: number;
  id?: number;
  title?: string;
  body?: string;
}

