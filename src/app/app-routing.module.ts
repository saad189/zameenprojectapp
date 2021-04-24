import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GistdetailComponent } from './gistdetail/gistdetail.component';
import { GistlistComponent } from './gistlist/gistlist.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {
        path: 'list/:userName', component: GistlistComponent
      }
    ]
  },
  {
    path: 'detail/:gist_id', component: GistdetailComponent
  },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
