import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  http: HttpClient = inject(HttpClient);
  private UrlApplis: string = 'https://www.cheapshark.com/api/1.0/deals?storeID=1'; 
  constructor() { }


  getApplis(steamRatingPercent: string, upperPrice: string, lowerPrice: string, sortBy : string):Observable<any>{
    return this.http.get(`${this.UrlApplis}&steamRating=${steamRatingPercent}&upperPrice=${upperPrice}&lowerPrice=${lowerPrice}&sortBy=${sortBy}`).pipe(map(
      (data: any) =>{
        return data;
      }
    ));
  }


  getRecherche(title: string):Observable<any>{
    console.log(`${this.UrlApplis}&title=${title}`);
    return this.http.get(`${this.UrlApplis}&title=${title}`).pipe(map(
      (data: any) =>{
        return data;
      }
    ));
  }

}
