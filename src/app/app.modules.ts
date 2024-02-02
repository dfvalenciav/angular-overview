import { NgModule } from '@angular/core';
import { AboutComponent } from './about/about.component';
import { TestComponent } from './test/test.component';
import { PostsComponent } from './posts/posts.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AboutComponent,
        TestComponent,
        PostsComponent,
        RecipeComponent
      ],
    providers: [],
    imports:[CommonModule, BrowserModule, FormsModule]
 })
 
 export class AppModule {}