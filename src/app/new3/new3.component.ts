import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new3',
  templateUrl: './new3.component.html',
  styleUrls: ['./new3.component.css']
})
export class New3Component implements OnInit{

  val=0;
  val2=0;

  constructor(private activatedRoute:ActivatedRoute) {
    // retrieve all params in this activated route
    this.activatedRoute.params.subscribe(p=>{
      const ret = p;
      console.log(p);
      console.log(typeof p);
      console.log("value of val is "+this.val); //0
      console.log(ret['val']);
      this.val=ret['val'];
      this.val2=ret['val2']
    });
    // use subscribe to get access the params 
  }

  obj = [
  {
    'rollnum':1,
    'name':'John',
    'age':25
  },
  {
    'rollnum':10,
    'name':'Tom',
    'age':24
  },
  {
    'rollnum':15,
    'name':'Cory',
    'age':22
  },
  {
    'rollnum':20,
    'name':'Ray',
    'age':28
  }
]

colspan=2
open=false;
openModal() {
  return true;
}

  ngOnInit(): void {
    
  }
}
