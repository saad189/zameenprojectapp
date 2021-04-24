import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../Services/AppService/app.service';
import { GitGistService } from '../Services/GitGistService/git-gist.service';

@Component({
  selector: 'app-gistdetail',
  templateUrl: './gistdetail.component.html',
  styleUrls: ['./gistdetail.component.scss']
})
export class GistdetailComponent implements OnInit {
  public currentGist: any;
  public fileArray = [];
  constructor(private gistService: GitGistService, private appService: AppService,
    private router: Router) { }

  ngOnInit() {
    this.gistService.gistObservable.subscribe((value: IBaseGist) => this.currentGist = value);
    console.log(this.currentGist);
    if (!this.currentGist.id) {
      console.log('helo');
      this.router.navigateByUrl('/');
    }
    this.getFiles();
    console.log(this.fileArray);
  }
  openDocumentFile(documenturl) {
    window.open(documenturl, '_blank');
  }
  getFiles() {
    for (const fileName in this.currentGist.files) {
      if (this.currentGist.files.hasOwnProperty(fileName)) {
        const currentFile = this.currentGist.files[fileName];
        this.fileArray.push(currentFile);
      }
    }
  }

}
