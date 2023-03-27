import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getNames(rsltState: number): Observable<any>{
    if (rsltState == 1) {
      return of("mak","ashir","dohn")
    } else {
      return of(new Error('Failed!'));
    }
  }

}
