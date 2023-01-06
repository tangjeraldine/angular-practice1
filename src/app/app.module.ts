import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewComponent1Component } from './new-component1/new-component1.component';
import { New2Component } from './new2/new2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { New3Component } from './new3/new3.component';
import { New4Component } from './new4/new4.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { New5Component } from './new5/new5.component';
import { FormsieComponent } from './formsie/formsie.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent1Component,
    New2Component,
    New3Component,
    New4Component,
    ErrorComponent,
    New5Component,
    FormsieComponent,
    ReactiveformComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
