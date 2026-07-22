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

  constructor() {
    this.postList = [
      {
        name: "Banane",
        img: "./img/banana.jpg",
        likes: 7
      },
      {
        name: "Orange",
        img: "./img/orange.jpg",
        likes: 5
      },
      {
        name: "Johannisbeere",
        img: "./img/currant.jpg",
        likes: 10
      }
    ]
  }
}
