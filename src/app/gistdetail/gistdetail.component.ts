import { Component, OnInit } from '@angular/core';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistdetail',
  templateUrl: './gistdetail.component.html',
  styleUrls: ['./gistdetail.component.scss']
})
export class GistdetailComponent implements OnInit {
  public currentGist: IBaseGist;
  constructor(private gistService: GitGistService, private appService: AppService) { }

  ngOnInit() {

  }
  openGistContent(gistId: string) {
    this.gistService.getSingleGist(gistId).subscribe(response => {
      this.currentGist = response;
    }, error => {
      this.appService.errormessage('Error', error);
    });
  }

}
