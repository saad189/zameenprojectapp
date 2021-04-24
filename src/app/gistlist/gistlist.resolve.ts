import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Injectable()
export class GistListResolve implements Resolve<any> {
    constructor(public gistService: GitGistService) { }
    resolve(route: ActivatedRouteSnapshot): Observable<any> {
        const userName = String(route.paramMap.get('userName'));
        return this.gistService.searchUserGists(userName);
    }
}
