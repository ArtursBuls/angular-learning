import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A First Test Recipe",
      "This is just a 1 test message",
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=960,872"
    ),
    new Recipe(
      "A Second Test Recipe",
      "This is just a 2 test message",
      "https://i.pinimg.com/474x/fb/cb/e6/fbcbe6087e19c2adcda4ed39028dc1b0.jpg"
    ),
    new Recipe(
      "A Third Test Recipe",
      "This is just a 3 test message",
      "https://i.pinimg.com/474x/a0/0f/50/a00f5067e5d5283a19ae1de33a9492bc.jpg"
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
