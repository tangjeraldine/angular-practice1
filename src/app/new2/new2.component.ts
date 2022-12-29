import { Component } from '@angular/core';


@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.css', './anotherstyle.css']
})
export class New2Component {
val = false;
val1=true;
val2 = true;
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
game=22
color = "blue"
bgcolor = "chartreuse"
border = "dashed"
classes = "a d"
tern=5
a="a"
c="c"

func() {
  return this.a;
}
}
