import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new4',
  templateUrl: './new4.component.html',
  styleUrls: ['./new4.component.css'],
})
export class New4Component implements OnInit {
  param1 = 0;
  param2 = 0;
  param3 = 0;
  param4 = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    // previously was a parameterised route, now is a query params
    this.activatedRoute.queryParams.subscribe((p) => {
      console.log(p);
      const ret = p;
      this.param1 = ret['param1'];
      this.param2 = ret['param2'];
      this.param3 = ret['param3'];
      this.param4 = ret['param4'];
    });
  }

  ngOnInit(): void {}
}
