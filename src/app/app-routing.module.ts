import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HistoryComponent } from './history/history.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'history', component: AboutComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
