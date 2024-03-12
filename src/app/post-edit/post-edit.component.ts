import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { post } from '../post.model';
import { postService } from '../post.service';
import { PostComponent } from '../post/post.component';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, PostComponent],
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css',
})
export class PostEditComponent implements OnInit {
  form!: FormGroup;
  index:number=0;
  editMode=false;

  constructor(private postService: postService, private router: Router,private route: ActivatedRoute) {}

  onSubmit() {
    // Handle form submission logic
    console.log('Form submitted!', this.form);
    
    

    // Input from page
    const title = this.form.value.title;
    const imagePath = this.form.value.imagePath;
    const description = this.form.value.Description;
    console.log(title);
    console.log(imagePath);
    console.log(description);
    

    // Making an Object from Input Data

    const Post: post = new post(
      title,
      description,
      imagePath,
      'test@test.com',
      new Date(),
      9
    );

    // Adding post through post service file

    if (this.editMode) {
      this.postService.updatePost(this.index, Post);
    } else {
      this.postService.addPost(Post);
    }
    alert('Hurray! Form Submitted Successfully');
    this.form.reset();

    // After Adding Post navigate to Post List

    this.router.navigate(['/post-list']);
  }

  ngOnInit(): void {
    let title = '';
    let description = '';
    let imagePath = '';

    this.route.params.subscribe((params: Params) => {
      if (params['index']) {
        console.log(params['index']);

        this.index = params['index'];

        const post = this.postService.getPost(this.index);
        title = post.title;
        description = post.description;
        imagePath = post.imagePath;

        this.editMode = true;
      }
    });
    this.form = new FormGroup({
      title: new FormControl(title, [
        Validators.required,
        Validators.minLength(4),
      ]),

      Description: new FormControl(description, [Validators.required]),
      imagePath: new FormControl(imagePath, [Validators.required]),
    });
  }
}
