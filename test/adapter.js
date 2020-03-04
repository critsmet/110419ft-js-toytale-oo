class ToysAdapter{
  constructor(baseURL){
    this.baseURL = baseURL
    this.addBtn = document.querySelector("#new-toy-btn")
    this.toyForm = document.querySelector(".container")
    this.toyCollection = document.querySelector("#toy-collection")

    this.addBtn.addEventListener('click', this.toggleToyForm)
  }

  toggleToyForm(){
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      this.toyForm.style.display = "block";
    } else {
      this.toyForm.style.display = "none";
    }
  }

  getToys () {
    fetch('http://localhost:3000/toys')
    .then(res => res.json())
    .then(toys => toys.forEach(toyObj => {
      let toy = new Toy(toyObj)
      this.toyCollection.innerHTML += toy.render().innerHTML
    }))
  }

}

let adapter = new ToysAdapter('http://localhost:3000/toys')
adapter.getToys()
