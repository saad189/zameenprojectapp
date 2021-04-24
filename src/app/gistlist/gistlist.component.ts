import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistlist',
  templateUrl: './gistlist.component.html',
  styleUrls: ['./gistlist.component.scss']
})
export class GistlistComponent implements OnInit {

  userGists: IUserGist[] = [];
  constructor(private gistService: GitGistService, private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    const userName = String(this.route.snapshot.paramMap.get('userName'));
    this.showSingleUserGist(userName);
    console.log('gits:', this.userGists);
  }

  showSingleUserGist(userName: string) {
    this.gistService.getUserGists(userName).subscribe(response => {
      this.appService.successmessage('Success', 'Data Fetched');
      this.userGists = response;
      console.log(response);
    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
  }


}
