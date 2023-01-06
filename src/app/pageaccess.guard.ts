import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageaccessGuard implements CanActivate {
  value1 = 103;

  canActivate() {
    if (this.value1 >= 100) {
      return true;
    } else {
      return false;
    }
  }
}
