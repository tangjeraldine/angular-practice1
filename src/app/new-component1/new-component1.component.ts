import { Component, OnInit } from '@angular/core';
import { Serv1Service } from '../service1_folder/serv1.service';

@Component({
  selector: 'app-new-component1',
  templateUrl: './new-component1.component.html',
  styleUrls: ['./new-component1.component.css'],
})
export class NewComponent1Component implements OnInit {
  x: any;
  constructor(private serv1: Serv1Service) {}

  ngOnInit(): void {
    this.x = this.serv1.getVal();
    console.log(this.x);
  }
}
