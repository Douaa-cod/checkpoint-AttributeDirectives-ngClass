import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {
  themeOn = ""
  constructor() { }

  ngOnInit(): void {
  }

  activeThem(theme: string){
    this.themeOn = theme
  }

}
