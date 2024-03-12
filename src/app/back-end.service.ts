import { Injectable } from '@angular/core';
import { postService } from './post.service';
import { post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

// database path - https://live-posts-b785c-default-rtdb.asia-southeast1.firebasedatabase.app

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: postService, private http: HttpClient) {}

  // function 1
  saveData() {
    // step 1 - getting list of posts from post service

    const listOfPosts: post[] = this.postService.getPosts();

    // send data posts to backend

    this.http
      .put(
        'https://live-posts-b785c-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
     // function 2 - fetch data

     fetchdata(){
         // Step 1
    this.http
    .get<post[]>(
      'https://live-posts-b785c-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    )
    .pipe(
      tap((listOfPosts: post[]) => {
        console.log(listOfPosts);

        // Step 2 - Send to post.service
        this.postService.setPosts(listOfPosts);
      })
    )
    .subscribe();
     }
}
