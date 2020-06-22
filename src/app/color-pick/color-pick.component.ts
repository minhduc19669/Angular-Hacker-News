import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-pick',
  templateUrl: './color-pick.component.html',
  styleUrls: ['./color-pick.component.css']
})
export class ColorPickComponent implements OnInit {

  background: string = '#00e067';

  constructor() { }
  ngOnInit(): void {
  }

  onchangeColor(value: string) {
    this.background = value;
  }
}
