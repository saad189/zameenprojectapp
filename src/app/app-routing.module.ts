import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GistdetailComponent } from './gistdetail/gistdetail.component';
import { GistlistComponent } from './gistlist/gistlist.component';
import { GistListResolve } from './gistlist/gistlist.resolve';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'list/:userName', component: GistlistComponent, resolve: {
          userGists: GistListResolve
        }
      },
      {
        path: 'gist-detail/:gist_id', component: GistdetailComponent
      },
    ]
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
