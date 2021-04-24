import { Component, OnInit } from '@angular/core';
import { GitGistService } from './Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'zameenprojectapp';
  userName = '';
  constructor(private gistService: GitGistService) {
  }
  ngOnInit(): void {
    this.gistService.searchUserGists('saad189').subscribe(response => console.log(response), error => console.log(error));
    this.gistService.getPublicGits().subscribe(response => console.log(response), error => console.log(error));
  }
  openGistContent() {

  }
}
