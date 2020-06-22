import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title: string;
  url: string;
  lists = [];
  articles = [
    {
      title: 'The Evolution of Async JavaScript: From Callbacks, to Promises, to Async/Await',
      url: 'https://medium.freecodecamp.org/the-evolution-of-async-javascript-from-callbacks-to-promises-to-async-await-e73b047f2f40'
    },
    {
      title: 'Game of Life',
      url: 'https://thefullsnack.com/posts/game-of-life.html'
    },
    {
      title: 'Nguyên tắc thiết kế REST API',
      url: 'https://medium.com/eway/nguyên-tắc-thiết-kế-rest-api-23add16968d7'
    },
    {
      title: 'Why You Only Need to Test with 5 Users',
      url: 'https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/'
    },
    {
      title: 'Let’s Build A Web Server. Part 1.',
      url: 'https://ruslanspivak.com/lsbaws-part1/'
    }
  ];
  updateArticle() {
    this.title = (document.getElementById('title') as HTMLInputElement).value;
    this.url = (document.getElementById('url') as HTMLInputElement).value;
  }
  addArticle() {
    this.lists.push({title: this.title, url: this.url});
    // this.title = '';
    // this.url = '';
  }

  // deleteArticle(){
  //   this.lists.pop();
  // }

  // updateArticle() {
  //   this.title = (document.getElementById('title') as HTMLInputElement).value;
  //   this.url = (document.getElementById('url') as HTMLInputElement).value;
  // }

}
