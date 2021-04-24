import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { AppService } from '../AppService/app.service';

const apiUrl = 'https://api.github.com/gists';

@Injectable({
  providedIn: 'root'
})
export class GitGistService {


  constructor(private http: HttpClient, private appService: AppService) {
    console.log('GIst Service Works');
  }

  searchUserGists(username: string): Observable<any> {
    const userRequest = apiUrl + `/users/${username}/gists`;
    return this.http.get(userRequest).pipe(catchError(this.handlerror));
  }

  getPublicGits() {
    const userRequest = apiUrl + `/public`;
    return this.http.get(userRequest).pipe(catchError(this.handlerror));
  }


  handlerror(errorObject: any) {
    const message = errorObject.error.message;
    console.log('error:', message);
    return throwError(errorObject.error);
  }
}
