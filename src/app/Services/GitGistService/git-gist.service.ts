import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GitGistService {
  private gists = '/gists';

  constructor(private http: HttpClient) {
  }

  searchUserGists(username: string): Observable<IUserGist[]> {
    const request = apiUrl + `/users/${username}${this.gists}`;
    return this.http.get<IUserGist[]>(request).pipe(catchError(this.handlerror));
  }

  getSingleGist(gistId: string): Observable<IBaseGist> {
    const request = apiUrl + `${this.gists}/${gistId}`;
    return this.http.get<IBaseGist>(request).pipe(catchError(this.handlerror));
  }
  getPublicGits(): Observable<IUserGist[]> {
    const request = apiUrl + `${this.gists}/public`;
    return this.http.get<IUserGist[]>(request).pipe(catchError(this.handlerror));
  }

  getGistForks(gistId: string) {
    const request = apiUrl + `${this.gists}/${gistId}/forks`;
    return this.http.get<IUserGist[]>(request).pipe(catchError(this.handlerror));
  }

  handlerror(errorObject: any) {
    const message = errorObject.error.message;
    console.log('error:', message);
    return throwError(errorObject.error);
  }

  setTags(files: any) {
    for (const fileName in files) {
      if (files.hasOwnProperty(fileName)) {
        const currentFile = files[fileName];
        currentFile.tag = currentFile.language ?
          currentFile.filename.substring(currentFile.filename.lastIndexOf('.')) : currentFile.type;
      }
    }
  }

  addForkInfo(gist: IBaseGist) {
    this.getGistForks(gist.id).subscribe((response: IUserGist[]) => {
      gist.forkInfo = [];
      response.reverse();
      for (let i = 0; i < 3; ++i) {
        if (response[i]) {
          gist.forkInfo.push({
            createdAt: response[i].created_at, avatar_url: response[i].owner.avatar_url,
            login: response[i].owner.login
          });
        }
      }
    });

  }
}
