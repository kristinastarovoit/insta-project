import { Component } from '@angular/core';
import { Posts } from './posts';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.html',
  styleUrl: './main-page.scss',
})
export class MainPage {
  postList: Posts[] = [];

  ngOnInit() {
    this.postList = [
      {
        name: "Banane",
        img: "img/banana.jpg",
        likes: 7,
        isLiked: true
      },
      {
        name: "Orange",
        img: "img/orange.jpg",
        likes: 5,
        isLiked: false
      },
      {
        name: "Johannisbeere",
        img: "img/currant.jpg",
        likes: 10,
        isLiked: true
      }
    ]
  }

  toggleLike(postListItem: Posts) {
    if (postListItem.isLiked) {
      postListItem.isLiked = false;
      postListItem.likes--;
    } else if (!postListItem.isLiked) {
      postListItem.isLiked = true;
      postListItem.likes++;
    }
  }
}
