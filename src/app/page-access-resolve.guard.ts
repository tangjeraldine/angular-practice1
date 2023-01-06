import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageAccessResolveGuard implements Resolve<any> {
  // the data in this object should be loaded together with the page
  obja = {
    valueone: 'firstvalue',
    valuetwo: 'secondvalue',
    valuethree: 'thirdvalue',
  };
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.obja;
  }
}
