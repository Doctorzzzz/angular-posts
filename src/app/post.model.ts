export class post {
 
  constructor(
    public title: string,
    public description: string,
    public imagePath: string,
    public author: string,
    public datetimecreated: Date,
    public numberOfLikes:number
  ){};
}
