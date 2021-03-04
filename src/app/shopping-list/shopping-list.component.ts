import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Milk", 100),
    new Ingredient("Apples", 5),
    new Ingredient("Sugar", 50),
    new Ingredient("Bananas", 4),
  ];

  constructor() {}

  ngOnInit(): void {}

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
}
