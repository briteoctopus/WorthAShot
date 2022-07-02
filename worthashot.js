const randomDrink = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

function getRandomDrink() {
  fetch(randomDrink)
    .then((response) => {
      if (response.ok) {
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
    document.getElementById("recipeName").innerHTML = drinkName;
    document.getElementById("drinkImage").src=drinkPic;
  }   

 