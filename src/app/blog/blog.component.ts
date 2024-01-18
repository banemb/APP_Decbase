import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit{
  image_blog_une!:string
  image_blog_deux!:string


  ngOnInit():void{
    this.image_blog_une="../../assets/images/james-lindsay-kVBzVaVa7Q0-unsplash 1.png"
    this.image_blog_deux ="../../assets/images/pexels-john-tekeridis-1428348.png"
  }
}
