import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError as observableThrowError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  weatherURL1 = "https://www.tianqiapi.com/api/?version=v61&appid=45999158&appsecret=WL6GeLkx&cityid=";
  weatherURL2 = "&city=";
  totReqsMade: number = 0;
  constructor(private _http: HttpClient) {

  }
  findWeather(cityid, city) {
    this.totReqsMade = this.totReqsMade + 1;
    return this._http
      .get(this.weatherURL1 + cityid + this.weatherURL2 + city)
      .pipe(
        tap((response:any) => response),
        catchError(this.handleError)
      )
  }
  private handleError(error: any) {
    return observableThrowError(error.error || 'Server error');
  }
}