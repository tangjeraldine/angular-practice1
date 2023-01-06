import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { New2Component } from './new2/new2.component';

@Injectable({
  providedIn: 'root',
})
export class Pageaccess5Guard implements CanDeactivate<New2Component> {
  canDeactivate(component: New2Component) {
    if (component.var5) {
      return window.confirm('Are you sure you want to leave this page?');
      // OK returns true
      // Cancel returns false
    } else {
      return true;
    }
  }
}
