import { Injectable } from '@angular/core';
import { Post } from './app.component';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Array<Post>> {
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts');
  }

  getPost(id: number): Observable<Post> {
    return this.http.get<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  getPostByUser(userId: number): Observable<Array<Post>> {
    const param = new HttpParams().set('userId', userId + '');
    return this.http.get<Array<Post>>('https://jsonplaceholder.typicode.com/posts', {params: param});
  }

  addPost(post: Post): Observable<Post> {
    return this.http.post<Post>('https://jsonplaceholder.typicode.com/posts', post);
  }

  updatetPost(post: Post): Observable<Post> {
    return this.http.put<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }

  deletePost(id: number) {
    return this.http.delete<Post>('https://jsonplaceholder.typicode.com/posts/' + id);
  }

  changetPost(post: Post): Observable<Post> {
    return this.http.patch<Post>('https://jsonplaceholder.typicode.com/posts/' + post.id, post);
  }
}
