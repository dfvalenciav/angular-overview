import { Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    { path: '', component: PostsComponent },
    { path: 'history', component: HistoryComponent}
];
