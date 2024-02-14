import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { PostsComponent } from './posts/posts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HistoryComponent } from './history/history.component';
import { CreatePostComponent } from './create-post/create-post.component';


@NgModule({
    declarations: [
        AboutComponent,
        TestComponent,
        PostsComponent,
        RecipeComponent,
        HistoryComponent,
        CreatePostComponent
      ],
    providers: [],
    imports:[CommonModule, BrowserModule]
 })
 
 export class AppModule {}