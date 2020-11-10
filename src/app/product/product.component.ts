import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Product } from '../model.product';
import { ProductService } from '../product.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  selectedDay: string = '';
  productInfo:any;
  form = new FormGroup({});
  score:number=0;
  index:number=0;
  finalmsg: string = '';

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    console.log("a");
    this.productService.loadProductDetails().subscribe(data=>{
      //data = JSON.parse(data);
      data.forEach(q=>{
        this.form.addControl(q.name,new FormControl());
      });
      this.productInfo=data});
    //console.log("aa"+this.productInfo);
  }

  submit(){
    console.log(this.form.value);
    this.score=0;
    this.index=0;
    for(const i in this.form.value){
      console.log(i);
      console.log(this.form.value[i]);
      if(parseInt(this.form.value[i]) === this.productInfo[this.index].correctans)
      {
        this.score++;
      }
      this.index++;
    }
    console.log("score:"+this.score);
    console.log();
    this.selectedDay = "Your score is: "+this.score;
    if(this.score<4)
    {
      this.finalmsg = "You have not passed. Please retake";
      //console.log("You have not passed. Please retake quiz");
    }else {
      this.finalmsg = "You have passed. Congrats!";
    }

  }

  // radioChangeHandler(event : any,correctanswer){
  //   console.log(correctanswer);
  //   this.selectedDay = event.target.value;
  // }

  submitquiz(): void {
    alert("submitted");
      }
      
  

}
