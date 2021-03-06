import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitGistService } from './Services/GitGistService/git-gist.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './Services/AppService/app.service';
import { GistlistComponent } from './gistlist/gistlist.component';
import { GistdetailComponent } from './gistdetail/gistdetail.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    GistlistComponent,
    GistdetailComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [GitGistService, AppService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
