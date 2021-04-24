import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitGistService } from './Services/GitGistService/git-gist.service';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './Services/AppService/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GitGistService, AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
