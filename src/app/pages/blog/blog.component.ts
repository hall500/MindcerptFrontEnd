import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  private indices: number[] = [0,1,2,3,4,5,6,7];
  constructor() { }

  ngOnInit() {
  }

}
