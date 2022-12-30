import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent1Component } from './new-component1/new-component1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';


const routes: Routes = [
   { path: 'new1', component: NewComponent1Component, outlet:'routeone' },
  { path: 'new2', component: New2Component, outlet:'routetwo'},
  { path: 'new3', component: New3Component, outlet:'routethree' },
  { path: 'new4', component: New4Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
