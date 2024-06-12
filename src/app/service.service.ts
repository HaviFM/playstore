import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  http: HttpClient = inject(HttpClient);
  private UrlApplis: string = '/api/last_updated_100';
  constructor() { }


  getApplis():Observable<any>{
    return this.http.get(this.UrlApplis).pipe(map(
      (data: any) =>{
        return data;
      }
    ));
  }

}
