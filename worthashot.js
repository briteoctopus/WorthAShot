const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function getRandomDrink() {
  fetch(randomDrink)
    .then((response) => {
      if (response.ok) {
        document.getElementById("ingredientsList").innerHTML = "";
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

function displayDrink(data) {
  const drink = data.drinks[0];
  const drinkName = drink.strDrink;
  const drinkPic = drink.strDrinkThumb;
  const steps = drink.strInstructions;
  document.getElementById("recipeName").innerHTML = drinkName;
  document.getElementById("drinkImage").src = drinkPic;
  document.getElementById("instructions").innerHTML = steps;

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

/*    const measurementList = Object.keys(drink)
    .filter(function (measurement) {
      return measurement.indexOf("strMeasure") == 0;
    })
    .reduce(function (measurements, measurement) {
      if (drink[measurement] !== null && drink[measurement].trim() !== "") {
        measurements[measurement] = drink[measurement];
      }
      return measurements;
    }, {});  */
    
    for (let key in ingredientList) {
    let inglist = ingredientList[key];
    //let measures = measurementList[key];
    
    document.getElementById("ingredientsList").innerHTML +=
      "<li>" + inglist + "</li>";
    document.getElementById("title").innerHTML = "Ingredients for " + drinkName;
  }
}
