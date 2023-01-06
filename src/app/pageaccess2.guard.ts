import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Pageaccess2Guard implements CanActivate {

  value2=5
  canActivate(){
    if (this.value2>2) {
      return true
    } else {
      return false
    }
  }
  
}
