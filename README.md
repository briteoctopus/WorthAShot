# WorthAShot
Second Project for Code KY program

Worth A Shot is a web application that provides the user with new random cocktail recipes at the click of a button. It includes a unit conversion tool for converting between various measurement types, and definitions of some measurements that aren't commonly used outside of making cocktails. There is also a submission form for sending in your own recipes, though at the moment it doesn't actually send the form data to anyone. 

The three features I included from the list of requirements are: 

1.) Retrieve data from an external API and display data in your app (such as with fetch() or with AJAX) 

        -The application retrieves drink names, images, ingredients, amounts and instructions from the CocktailDB API and displays them to the user. (Some drink names may contain inappropriate language.)

2.) Create a form and save the values (on click of Submit button) to an external file. You must show us or document where that information is being stored so we can confirm that it’s being saved/persisted.

        -The form on the Submission page currently saves all of its values to local storage. 

3.) Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams)

        -The unit converter on the index page can convert between 7 different units of measurement (teaspoon, tablespoon, US fluid ounce, cup, liter, centiliter and milliliter.)

Note that the layout will break if viewed in Internet Explorer, and the form data will not be saved in any browser that does not support the use of Local Storage.