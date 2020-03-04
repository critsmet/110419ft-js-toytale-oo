let addToy = false;

document.addEventListener("DOMContentLoaded", () => {

  const addBtn = document.querySelector("#new-toy-btn");
  const toyForm = document.querySelector(".container");

  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyForm.style.display = "block";
    } else {
      toyForm.style.display = "none";
    }
  });

  const toyCollection = document.querySelector("#toy-collection")

  function getToys () {
    fetch ('http://localhost:3000/toys')
    .then (handleResponse)
      //array of objects
      //[{..}, {..}]
      // {id: 1
      // name: "Woody"
      // image: "http://www.pngmart.com/files/3/Toy-Story-Woody-PNG-Photos.png"
      // likes: 5}
      //iterate over each toy and interpolate the name, like, and imageUrl into the HTML template provided in the readme and add each one to the toyCollection div
  }

  function handleResponse(response){
    response.json()
    .then((function(response){
      response.forEach(renderToy)
    }))
  }

  function renderToy(toy){
    toyCollection.innerHTML += `
    <div class="card">
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    </div>`
  }


  getToys()

});

//make the GET fetch request to the API, get the info on the toys, put the Toys on the DOM using the HTML in the Readme
