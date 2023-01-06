import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formsie',
  templateUrl: './formsie.component.html',
  styleUrls: ['./formsie.component.css'],
})
export class FormsieComponent implements OnInit {
  // values from the form will be captured by the ts file via the name of each input field
  formval1 = '';
  formgender = '';
  formname = '';
  formphone = '';
  formemail = '';
  formcontact = '';
  loadObj = {};

  formpromo = false;

  // import NgForm first
  // the parameter type is an angular form.
  fun1(f: NgForm) {
    // then we ask the function to console.log the values in the form
    console.log(f.value);
  }

  fun2(f: NgForm) {
    f.resetForm();
  }

  // in case you want to have pre-filled values in your form
  // every single key in your object must match your form exactly
  // not one more, not one less
  preloadval(f: NgForm) {
    this.loadObj = {
      formgender: 'Male',
      formname: 'Name here',
      formphone: '00000000',
      formemail: 'myemail@email.com',
      formcontact: 'Email',
      formpromo: true,
    };
    f.setValue(this.loadObj);
  }

  constructor() {}

  ngOnInit(): void {}
}
