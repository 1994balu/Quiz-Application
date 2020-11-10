import { Input, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  show: boolean;

  constructor() { }

  //i:number = 1;
  @Input() ques;
  @Input() choice;
  i:number = 0;
  correct:boolean = false;
  wrong:boolean = false;
  ngOnInit() {
  }
  @ViewChild('inp') btn;
  inputClicked(i:number){
    console.log(i);
  }

  singleclicked() {
    this.show = !this.show;
  }

  clicked(selected) {
   if(selected) {
    this.correct = true;
    this.wrong = false;
   }else {
    this.correct = false;
    this.wrong = true;
   }
  }
}
