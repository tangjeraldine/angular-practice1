import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css'],
})
export class ReactiveformComponent implements OnInit {
  addReactF!: FormGroup;

  constructor(private formb: FormBuilder) {}

  ngOnInit(): void {
    // this.addReactF = new FormGroup({
    //   fn: new FormControl(),
    //   ln: new FormControl(),
    // });

    // let user = new FormArray([
    //   new FormControl('valone'),
    //   new FormControl('valtwo'),
    // ]);

    // console.log(user.value);

    this.addReactF = this.formb.group({
      fn: new FormControl('First Name', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      ln: new FormControl('Last Name', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
      ]),
      nn: new FormControl('i am a nickname'),
      em: new FormControl('coconut@hotmail.com', [Validators.email]),
      // this basically allows us to form an array of form controls
      users: new FormArray([
        new FormControl('hello'),
        new FormControl('itss meee'),
        new FormControl('input3'),
        new FormControl('input4'),
        new FormControl('input5'),
        new FormControl('input6'),
      ]),
    });

    const loadObj = {
      fn: '',
      ln: '',
      nn: 'banana',
      em: 'hello@hotmail.com',
    };

    // this.addReactF.setValue(loadObj);

    this.addReactF.patchValue(loadObj);
  }

  // fun1() {
  //   console.log(this.addReactF.value);
  // }

  // to obtain one particular input from the form
  fun1() {
    console.log(this.addReactF.get('ln')?.value);
  }

  fun2() {
    // use subscribe method to obtain data
    this.addReactF.valueChanges.subscribe((data) => {
      console.log(data);
    });
  }

  //function to check if all fields in the form are valid
  fun3() {
    console.log('Valid-->' + this.addReactF.valid);
    console.log('Invalid-->' + this.addReactF.invalid);
    console.log('Pending-->' + this.addReactF.pending);
    console.log('Pristine-->' + this.addReactF.pristine);
    console.log('Dirty-->' + this.addReactF.dirty);
    console.log('Touched-->' + this.addReactF.touched);
    console.log('Untouched-->' + this.addReactF.untouched);
    console.log('===========================');
  }

  fun4() {
    this.addReactF.reset();
  }

  // valchange() {
  //   this.addReactF.valueChanges.subscribe((data: any) => {
  //     console.log(this.addReactF.get('fn')?.value);
  //   });
  // }

  valchange() {
    this.addReactF.get('fn')?.valueChanges.subscribe((data: any) => {
      console.log(data);
    });
  }

  statchange() {
    this.addReactF.get('ln')?.statusChanges.subscribe((data: any) => {
      console.log(data);
    });
  }
  get forArray() {
    return this.addReactF.controls['users'] as FormArray;
  }
}
