import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NewComponent1Component } from './new-component1/new-component1.component';
import { New2Component } from './new2/new2.component';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { ErrorComponent } from './error/error.component';
import { PageaccessGuard } from './pageaccess.guard';
import { Pageaccess2Guard } from './pageaccess2.guard';
import { Pageaccess3Guard } from './pageaccess3.guard';
import { Pageaccess4Guard } from './pageaccess4.guard';
import { Pageaccess5Guard } from './pageaccess5.guard';
import { PageAccessResolveGuard } from './page-access-resolve.guard';
import { New5Component } from './new5/new5.component';
import { FormsieComponent } from './formsie/formsie.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';

const routes: Routes = [
  // {
  //   path: 'newoone',
  //   canActivate: [PageaccessGuard, Pageaccess2Guard],
  //   children: [
  //     {
  //       path: 'newthree',
  //       component: New3Component,
  //     },
  //     {
  //       path: '',
  //       canActivateChild: [Pageaccess3Guard],
  //       children: [
  //         {
  //           path: 'newtwo',
  //           component: New2Component,
  //         },
  //         {
  //           path: 'newfour',
  //           component: New4Component,
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {path: "newone", children: [
  //   {path: "newtwo", component: New2Component},
  // ]},
  // parameterized route
  // you can pass more than one parameter
  { path: 'newthree/:val/shoes/:val2', component: New3Component },
  {
    path: 'newone',
    component: NewComponent1Component,
  },
  {
    path: 'newtwo',
    canDeactivate: [Pageaccess5Guard],
    component: New2Component,
  },
  // {
  //   path: "",
  //   redirectTo:"newtwo",
  //   pathMatch: 'full'
  // },
  {
    path: 'newfour',
    component: New4Component,
  },
  {
    path: 'newfive',
    component: New5Component,
    resolve: {
      data: PageAccessResolveGuard,
    },
  },
  {
    path: 'forms',
    component: FormsieComponent,
  },
  {
    path: 'reactiveform',
    component: ReactiveformComponent,
  },
  {
    path: 'lazyy',
    canLoad: [Pageaccess4Guard],
    loadChildren: () =>
      import('./lazyl/lazyl.module').then((m) => m.LazylModule),
  },
  {
    path: '**',
    component: ErrorComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
