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

    this.openGistContent('6cad326836d38bd3a7ae');
    this.showSingleUserGist('octocat');
  }

  showSingleUserGist(userName: string) {
    this.gistService.searchUserGists(userName).subscribe(response => {
      response.forEach(element => {
        this.gistService.setTags(element.files);
        this.gistService.addForkInfo(element);
      });
      console.log(response);
    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
  }

  showPublicGists() {
    this.gistService.getPublicGits().subscribe(response => {
      response.forEach(element => {
        this.gistService.setTags(element.files);
      });
      this.publicGists = response;
      console.log('Public Gists:', this.publicGists);

    },
      error => {
        console.log(error);
        this.appService.errormessage('Error', error.message);
      });
  }

  openGistContent(gistId: string) {
    this.gistService.getSingleGist(gistId).subscribe(response => {
      console.log('Single Gist:', response);
    }, error => {
      this.appService.errormessage('Error', error);
    });
  }
}
