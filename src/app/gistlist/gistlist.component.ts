import { Component, OnInit } from '@angular/core';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistlist',
  templateUrl: './gistlist.component.html',
  styleUrls: ['./gistlist.component.scss']
})
export class GistlistComponent implements OnInit {

  publicGists: IUserGist[];
  userGists: IUserGist[];
  constructor(private gistService: GitGistService, private appService: AppService) { }

  ngOnInit() {
    //this.openGistContent('6cad326836d38bd3a7ae');
    this.showSingleUserGist('octocat');
  }

  showSingleUserGist(userName: string) {
    this.gistService.searchUserGists(userName).subscribe(response => {

      this.userGists = response;
      console.log(response);
    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
  }


}
