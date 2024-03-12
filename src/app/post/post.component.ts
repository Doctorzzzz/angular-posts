import { Component, Input, OnInit } from '@angular/core';
import { post } from '../post.model';
import { postService } from '../post.service';
import { Router } from '@angular/router';
import { DatePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [DatePipe,UpperCasePipe],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
})
export class PostComponent implements OnInit {
  @Input()
  post?: post;
  @Input() index: number = 0;

  constructor(private postService: postService,private router:Router) {}

  ngOnInit(): void {}

  onDelete() {
    this.postService.deletePost(this.index);
  }

  onEdit(){
    console.log("called");
    this.router.navigate(["/post-edit", this.index])
    
  }
  likePost(){
    this.postService.likePost(this.index)
  }
}
