//drink grab code 
const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function getRandomDrink() {
  fetch(randomDrink)
    .then((response) => {
      if (response.ok) {
        document.getElementById("ingredientsList").innerHTML = "";
        document.getElementById("amounts").innerHTML = "";
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayDrink(data);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

//grabs drink information from API & displays it
function displayDrink(data) {
  const drink = data.drinks[0];
  const drinkName = drink.strDrink;
  const drinkPic = drink.strDrinkThumb;
  const steps = drink.strInstructions;
  document.getElementById("recipeName").innerHTML = drinkName;
  document.getElementById("drinkImage").src = drinkPic;
  document.getElementById("instructions").innerHTML = steps;

  //gets list of ingredients/displays as UL
  const ingredientList = Object.keys(drink)
    .filter(function (ingredient) {
      return ingredient.indexOf("strIngredient") == 0;
    })
    .reduce(function (ingredients, ingredient) {
      if (drink[ingredient] !== null && drink[ingredient].trim() !== "") {
        ingredients[ingredient] = drink[ingredient];
      }
      return ingredients;
    }, {});

  for (let key in ingredientList) {
    let ingList = ingredientList[key];

    document.getElementById("ingredientsList").innerHTML +=
      "<li>" + ingList + "</li>";
    document.getElementById("title").innerHTML = "Ingredients for " + drinkName;
  }

  //gets amounts for ingredients and displays as UL
  const measurementList = Object.keys(drink)
    .filter(function (measurement) {
      return measurement.indexOf("strMeasure") == 0;
    })
    .reduce(function (measurements, measurement) {
      if (drink[measurement] !== null && drink[measurement].trim() !== "") {
        measurements[measurement] = drink[measurement];
      }
      return measurements;
    }, {});
  for (let key in measurementList) {
    let amountList = measurementList[key];

    document.getElementById("amounts").innerHTML +=
      "<li>" + amountList + "</li>";
  }
}

//Code for conversion tool starts here
let input = document.getElementById("input");
let output = document.getElementById("output");
let inputType = document.getElementById("inputType");
let outputType = document.getElementById("outputType");
let inputValue, outputValue;

inputType.addEventListener("change", converter);
outputType.addEventListener("change", converter);

inputTypeValue = inputType.value;
outputTypeValue = outputType.value;

function converter() {
  inputTypeValue = inputType.value;
  outputTypeValue = outputType.value;

  //teaspoons -> whatever
  if (inputTypeValue === "teaspoon" && outputTypeValue === "teaspoon") {
    output.value = Number(input.value) * 1;
  } else if (
    inputTypeValue === "teaspoon" &&
    outputTypeValue === "tablespoon"
  ) {
    output.value = Number(input.value) / 3;
  } else if (inputTypeValue === "teaspoon" && outputTypeValue === "ounces") {
    output.value = Number(input.value) * 0.166667;
  } else if (inputTypeValue === "teaspoon" && outputTypeValue === "cup") {
    output.value = Number(input.value) * 0.0208333;
  } else if (inputTypeValue === "teaspoon" && outputTypeValue === "liter") {
    output.value = Number(input.value) * 0.00492892;
  } else if (
    inputTypeValue === "teaspoon" &&
    outputTypeValue === "centiliter"
  ) {
    output.value = Number(input.value) * 0.492892;
  } else if (
    inputTypeValue === "teaspoon" &&
    outputTypeValue === "milliliter"
  ) {
    output.value = Number(input.value) * 4.92892;
  }

  //tablespoons -> whatever
  if (inputTypeValue === "tablespoon" && outputTypeValue === "tablespoon") {
    output.value = Number(input.value) * 1;
  } else if (
    inputTypeValue === "tablespoon" &&
    outputTypeValue === "teaspoon"
  ) {
    output.value = Number(input.value) * 3;
  } else if (inputTypeValue === "tablespoon" && outputTypeValue === "ounces") {
    output.value = Number(input.value) * 0.5;
  } else if (inputTypeValue === "tablespoon" && outputTypeValue === "cup") {
    output.value = Number(input.value) * 0.0616115;
  } else if (inputTypeValue === "tablespoon" && outputTypeValue === "liter") {
    output.value = Number(input.value) / 67.628;
  } else if (
    inputTypeValue === "tablespoon" &&
    outputTypeValue === "centiliter"
  ) {
    output.value = Number(input.value) * 1.47868;
  } else if (
    inputTypeValue === "tablespoon" &&
    outputTypeValue === "milliliter"
  ) {
    output.value = Number(input.value) * 14.787;
  }

  //ounces -> whatever
  if (inputTypeValue === "ounces" && outputTypeValue === "ounces") {
    output.value = Number(input.value) * 1;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "teaspoon") {
    output.value = Number(input.value) * 6;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "tablespoon") {
    output.value = Number(input.value) * 2;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "cup") {
    output.value = Number(input.value) / 8;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "liter") {
    output.value = Number(input.value) / 33.814;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "centiliter") {
    output.value = Number(input.value) * 2.957;
  } else if (inputTypeValue === "ounces" && outputTypeValue === "milliliter") {
    output.value = Number(input.value) * 29.574;
  }

  //cups -> whatever
  if (inputTypeValue === "cup" && outputTypeValue === "cup") {
    output.value = Number(input.value) * 1;
  } else if (inputTypeValue === "cup" && outputTypeValue === "teaspoon") {
    output.value = Number(input.value) * 48.692;
  } else if (inputTypeValue === "cup" && outputTypeValue === "tablespoon") {
    output.value = Number(input.value) * 16.231;
  } else if (inputTypeValue === "cup" && outputTypeValue === "ounces") {
    output.value = Number(input.value) * 8;
  } else if (inputTypeValue === "cup" && outputTypeValue === "liter") {
    output.value = Number(input.value) / 4.167;
  } else if (inputTypeValue === "cup" && outputTypeValue === "centiliter") {
    output.value = Number(input.value) * 24;
  } else if (inputTypeValue === "cup" && outputTypeValue === "milliliter") {
    output.value = Number(input.value) * 240;
  }

  //liters -> whatever
  if (inputTypeValue === "liter" && outputTypeValue === "liter") {
    output.value = Number(input.value) * 1;
  } else if (inputTypeValue === "liter" && outputTypeValue === "teaspoon") {
    output.value = Number(input.value) * 202.9;
  } else if (inputTypeValue === "liter" && outputTypeValue === "tablespoon") {
    output.value = Number(input.value) * 67.628;
  } else if (inputTypeValue === "liter" && outputTypeValue === "ounces") {
    output.value = Number(input.value) * 33.814;
  } else if (inputTypeValue === "liter" && outputTypeValue === "cup") {
    output.value = Number(input.value) * 4.167;
  } else if (inputTypeValue === "liter" && outputTypeValue === "centiliter") {
    output.value = Number(input.value) * 100;
  } else if (inputTypeValue === "liter" && outputTypeValue === "milliliter") {
    output.value = Number(input.value) * 1000;
  }

  //centiliters -> whatever
  if (inputTypeValue === "centiliter" && outputTypeValue === "centiliter") {
    output.value = Number(input.value) * 1;
  } else if (
    inputTypeValue === "centiliter" &&
    outputTypeValue === "teaspoon"
  ) {
    output.value = Number(input.value) * 2.029;
  } else if (
    inputTypeValue === "centiliter" &&
    outputTypeValue === "tablespoon"
  ) {
    output.value = Number(input.value) / 1.479;
  } else if (inputTypeValue === "centiliter" && outputTypeValue === "ounces") {
    output.value = Number(input.value) / 2.957;
  } else if (inputTypeValue === "centiliter" && outputTypeValue === "cup") {
    output.value = Number(input.value) / 24;
  } else if (inputTypeValue === "centiliter" && outputTypeValue === "liter") {
    output.value = Number(input.value) / 100;
  } else if (
    inputTypeValue === "centiliter" &&
    outputTypeValue === "milliliter"
  ) {
    output.value = Number(input.value) * 10;
  }

  //milliliters -> whatever
  if (inputTypeValue === "milliliter" && outputTypeValue === "milliliter") {
    output.value = Number(input.value) * 1;
  } else if (
    inputTypeValue === "milliliter" &&
    outputTypeValue === "teaspoon"
  ) {
    output.value = Number(input.value) / 4.929;
  } else if (
    inputTypeValue === "milliliter" &&
    outputTypeValue === "tablespoon"
  ) {
    output.value = Number(input.value) / 14.787;
  } else if (inputTypeValue === "milliliter" && outputTypeValue === "ounces") {
    output.value = Number(input.value) / 29.574;
  } else if (inputTypeValue === "milliliter" && outputTypeValue === "cup") {
    output.value = Number(input.value) / 240;
  } else if (inputTypeValue === "milliliter" && outputTypeValue === "liter") {
    output.value = Number(input.value) / 1000;
  } else if (
    inputTypeValue === "milliliter" &&
    outputTypeValue === "centiliter"
  ) {
    output.value = Number(input.value) / 10;
  }
}

const button = document.getElementById('hamburger');

button.addEventListener('click', function(){
    const menu = document.getElementById('navlinks');
    if (navlinks.classList.contains('invis')){
        navlinks.classList.remove('invis');}
        else {navlinks.classList.add('invis');}
    })