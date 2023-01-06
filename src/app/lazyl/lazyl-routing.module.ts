import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazylComponent } from './lazyl.component';

const routes: Routes = [{ path: '', component: LazylComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazylRoutingModule { }
