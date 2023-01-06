import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Serv1Service {
  constructor() {}

  getVal() {
    const obj1 = [
      { valone: 1, valtwo: 2 },
      {
        valthree: 'string three',
        valfour: 'string four',
      },
    ];
    return obj1;
  }
}
