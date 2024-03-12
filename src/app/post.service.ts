import { EventEmitter, Injectable } from "@angular/core";
import { post } from "./post.model";

@Injectable({providedIn:'root'})
export class postService{
  listChangedEvent: EventEmitter<post[]> = new EventEmitter();
    listOfPosts: post[] = [
        // new post(
        //     'Nature 1',
        //     'ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing',
        //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
        //     'Great Artist',
        //     new Date(),
        //     5
        //   ),
        //   new post(
        //     'Nature 2',
        //     'ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing',
        //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
        //     'Great Artist',
        //     new Date(),
        //     6
        //   ),
        //   new post(
        //     'Nature 3',
        //     'ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing',
        //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
        //     'Great Artist',
        //     new Date(),
        //     5
        //   ),
        //   new post(
        //     'Nature 4',
        //     'ipsum dolor sit amet consectetur adipisicing ipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicingipsum dolor sit amet consectetur adipisicing',
        //     'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg',
        //     'Great Artist',
        //     new Date(),
        //     6
        //   ),
      ];

      getPosts(){
        return this.listOfPosts;
      }

      deletePost(index: number){
       this.listOfPosts.splice(index,1);
      }

      addPost(post:post){
        this.listOfPosts.push(post);
      }
      updatePost(index:number,post:post){
        this.listOfPosts[index]=post;
      }
      getPost(index:number){
        return this.listOfPosts[index];

      }
      likePost(index:number){
        this.listOfPosts[index].numberOfLikes+=1;
      }
      setPosts(listOfPosts: post[]) {
        this.listOfPosts = listOfPosts;
        this.listChangedEvent.emit(listOfPosts);
      }
    
}