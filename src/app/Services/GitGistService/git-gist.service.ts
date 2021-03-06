import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../AppService/app.service';

const apiUrl = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class GitGistService {
  private gists = '/gists';

  private gistData = new BehaviorSubject({});
  public gistObservable = this.gistData.asObservable();
  constructor(private http: HttpClient, private appService: AppService) {
  }

  updateCurrentGist(value: IBaseGist) {
    this.gistData.next(value);
  }
  getUserGists(username: string): Observable<any> {
    const request = apiUrl + `/users/${username}${this.gists}`;
    return this.http.get(request)
      .pipe(map((response: any) => {
        response.forEach(element => {
          this.setTags(element.files);
          this.generateTagsArray(element);
          this.addForkInfo(element);
        });
        return response;
      }))
      .pipe(catchError(this.handlerror));
  }

  getSingleGist(gistId: string): Observable<IBaseGist> {
    const request = apiUrl + `${this.gists}/${gistId}`;
    return this.http.get<IBaseGist>(request).pipe(catchError(this.handlerror));
  }

  getGistForks(gistId: string) {
    const request = apiUrl + `${this.gists}/${gistId}/forks`;
    return this.http.get<IUserGist[]>(request).pipe(catchError(this.handlerror));
  }

  handlerror(errorObject: any) {
    const message = errorObject.error.message;
    this.appService.errormessage('Error', message);
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
  generateTagsArray(gist: IUserGist) {
    const tagArray = [];
    for (const fileName in gist.files) {
      if (gist.files.hasOwnProperty(fileName)) {
        const currentFile = gist.files[fileName];
        tagArray.push(currentFile.tag);
      }
    }
    gist.tagArray = tagArray;
  }
}
