import { Component, OnInit } from '@angular/core';
import { AppService } from './Services/AppService/app.service';
import { GitGistService } from './Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zameenprojectapp';
  userName = '';
  publicGists: IUserGist[];
  constructor(private gistService: GitGistService, private appService: AppService) {
  }
  ngOnInit(): void {
    this.gistService.searchUserGists('octocat').subscribe(response => {
      console.log(response);
    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
    this.gistService.getPublicGits().subscribe(response => {
      this.publicGists = response as IUserGist[];
      console.log('Public Gists:', this.publicGists);
      //console.log(response);
    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
  }
  openGistContent() {

  }
}
