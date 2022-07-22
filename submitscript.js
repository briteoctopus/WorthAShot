//saves form info in local storage 

function formStore(){
localStorage.setItem('firstName', document.getElementById('firstName').value);
localStorage.setItem('lastName', document.getElementById('lastName').value);
localStorage.setItem('drinkName', document.getElementById('submissionName').value);
localStorage.setItem('imageURL', document.getElementById('imageURL').value);
localStorage.setItem('ingredients', document.getElementById('ingredientsAndAmounts').value);
localStorage.setItem('directions', document.getElementById('steps').value);

const name = document.getElementById('firstName').value;
alert("Thank you " + name + ", your submission has been receieved!");
}

/*For saving image files; replaced with URL string instead due to local storage size limitations

document.querySelector("#uploadedImage").addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () =>{
        localStorage.setItem("uploaded-image", reader.result);

    reader.readAsDataURL(this.files[0]);
  });
});  */
