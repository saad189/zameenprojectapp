import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistdetail',
  templateUrl: './gistdetail.component.html',
  styleUrls: ['./gistdetail.component.scss']
})
export class GistdetailComponent implements OnInit {
  public currentGist: IBaseGist;
  constructor(private gistService: GitGistService, private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.gistService.gistObservable.subscribe((value: IBaseGist) => this.currentGist = value);
    console.log(this.currentGist);
    // const gistId = String(this.route.snapshot.paramMap.get('gist_id'));
    // this.openGistContent(gistId);
  }
  openGistContent(gistId: string) {
    this.gistService.getSingleGist(gistId).subscribe(response => {
      this.currentGist = response;
      console.log(this.currentGist);
      this.appService.successmessage('Success', 'Data Fetched');
    }, error => {
      this.appService.errormessage('Error', error);
    });
  }

}
