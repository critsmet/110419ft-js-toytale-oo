//Adapter handles almost all DOM logic/functionality
//We define our eventListeners here
//We put our selected elements here
//We write functions that make fetch requests here

class ToysAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
    this.addToy = false;

    this.addBtn = document.querySelector("#new-toy-btn")
    this.toyForm = document.querySelector(".container");
    this.toyCollection = document.querySelector("#toy-collection")

    this.addBtn.addEventListener('click', this.toggleForm)
    this.toyCollection.addEventListener('click', this.handleLike)

    this.headers = {"Content-Type": "application/json", "Accepts": "application/json"}

    this.toys = []
  }

  toggleForm = (e) => {
    // hide & seek with the form
    this.addToy = !this.addToy;
    if (this.addToy) {
      console.log(this)
      this.toyForm.style.display = "block";
    } else {
      this.toyForm.style.display = "none";
    }
  }

  getToys(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(toysArray => toysArray.forEach(toyObj => {
        let toy = new Toy(toyObj)
        this.toys.push(toy)
        this.toyCollection.appendChild(toy.render())
      }))
    }
}

let adapter = new ToysAdapter ("http://localhost:3000/toys")

adapter.getToys()
