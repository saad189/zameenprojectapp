import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';

const apiUrl = 'https://api.github.com/gists';

@Injectable({
  providedIn: 'root'
})
export class GitGistService {


  constructor(private http: HttpClient) {
    console.log('GIst Service Works');
  }

  searchUserGists(username: string): Observable<any> {
    const userRequest = apiUrl + `/users/${username}/gists`;
    return this.http.get(userRequest);
  }

  getPublicGits() {
    const userRequest = apiUrl + `/public`;
    return this.http.get(userRequest);
  }

  handlerror(error) {

    let errormessage = '';
    if (error.error) {
      errormessage = error.error.message;
    } else {
      errormessage = 'Error occurred';
    }
  }
}
