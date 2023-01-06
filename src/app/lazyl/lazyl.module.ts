import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazylRoutingModule } from './lazyl-routing.module';
import { LazylComponent } from './lazyl.component';


@NgModule({
  declarations: [
    LazylComponent
  ],
  imports: [
    CommonModule,
    LazylRoutingModule
  ]
})
export class LazylModule { }
