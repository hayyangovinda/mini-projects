import { Component, ElementRef, ViewChild } from '@angular/core';
import { MealApiService } from './meal-api.service';

@Component({
  selector: 'recipe-app',
  templateUrl: './recipe-app.component.html',
  styleUrls: ['./recipe-app.component.css'],
})
export class RecipeAppComponent {
  meal!: any;
  ingredients: string[] = [];
  userInput = '';
  imgSrc = ``;
  showDetails = false;
  detailsH2 = ``;
  detailsH4 = ``;
  instructions = ``;
  constructor(private mealApiService: MealApiService) {}
  showRecipe = false;
  errorMessage = ``;
  @ViewChild('recipe') recipeRef!: ElementRef;

  search() {
    this.mealApiService.getData(this.userInput).subscribe(
      (resp: any) => {
        if (!resp.meals?.length) {
          this.errorMessage = 'No meal found. Please try again!';
          return;
        }

        this.meal = resp.meals[0];

        let count = 1;
        let ingredients = [];
        for (let i in this.meal) {
          let ingredient = '';
          let measure = '';
          if (i.startsWith('strIngredient') && this.meal[i]) {
            ingredient = this.meal[i];
            measure = this.meal[`strMeasure` + count];
            count += 1;
            ingredients.push(`${measure} ${ingredient}`);
            this.ingredients = ingredients;
          }
        }
        this.imgSrc = this.meal.strMealThumb;
        this.detailsH2 = this.meal.strMeal;
        this.detailsH4 = this.meal.strArea;
        this.showDetails = true;
        this.instructions = this.meal.strInstructions;
        console.log(this.instructions);
        this.errorMessage = '';
      },
      (error: Error) => {
        console.log('an error happened');

        this.errorMessage = 'An error happened. Please try again!';
      }
    );
  }

  clickShowRecipe() {
    this.recipeRef.nativeElement.style.display = 'block';
  }

  clickHideRecipe() {
    this.recipeRef.nativeElement.style.display = 'none';
  }
}
