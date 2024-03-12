import { Component, OnInit } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { post } from '../post.model';
import { NgFor } from '@angular/common';
import { postService } from '../post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [PostComponent,NgFor,],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  listOfPosts: post[] = [
    
    
  ];

  constructor(private postService: postService) {}

  ngOnInit(): void {

    this.listOfPosts = this.postService.getPosts();
    this.postService.listChangedEvent.subscribe((listOfPosts:post[])=> {
      this.listOfPosts = this.postService.getPosts();
    })

    
  }
}
