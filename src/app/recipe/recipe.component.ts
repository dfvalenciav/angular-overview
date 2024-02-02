import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe',
  standalone: true,
  imports: [],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css'
})
export class RecipeComponent {
  name : string = "sushi"
  ingredient1 : string = "rice"
  ingredient2 : string = "salmon"
  ingredient3 : string = "shrimp"

}
