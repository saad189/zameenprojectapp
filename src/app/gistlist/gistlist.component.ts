import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistlist',
  templateUrl: './gistlist.component.html',
  styleUrls: ['./gistlist.component.scss']
})
export class GistlistComponent implements OnInit {

  userGists: IUserGist[] = [];
  constructor(private gistService: GitGistService, private appService: AppService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const userName = String(this.route.snapshot.paramMap.get('userName'));
    this.showSingleUserGist(userName);
  }

  showSingleUserGist(userName: string) {
    this.gistService.getUserGists(userName).subscribe(response => {
      response.length > 0 ? this.appService.successmessage('Success', 'Data Fetched') : '';
      this.userGists = response;
    },
      error => {
        this.appService.errormessage('Error', error.message);
      });
  }

  showDetails(gistId: string) {
    this.gistService.updateCurrentGist(this.userGists.find(gist => gist.id === gistId));
    this.router.navigateByUrl(`/detail/${gistId}`);
  }


}
