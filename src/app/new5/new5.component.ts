import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new5',
  templateUrl: './new5.component.html',
  styleUrls: ['./new5.component.css'],
})
export class New5Component implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    console.log(this.activateRoute.snapshot.data);
  }
}
