class Toy{
  constructor({id, name, likes, image}){
    this.id = id
    this.name = name
    this.likes = likes
    this.image = image
    this.url = "http://localhost:3000/toys/" + id
    this.element = document.createElement('div')
    this.element.className = "card"
    this.element.id = this.id

    this.element.addEventListener('click', this.handleLike.bind(this))
  }
  //this is the MOST important when it's a callback function

  handleLike(e) {
    if (e.target.className = "like-btn"){e
      let configObj = {
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify({likes: this.likes + 1})
      }

      this.likes++
      console.log(this);
      this.render()

      fetch(this.url, configObj)
        .then(res => res.json())
        .then(console.log)
    }
  }

  render(){
    this.element.innerHTML = `
        <h2>${this.name}</h2>
        <img src=${this.image} class="toy-avatar" />
        <p>${this.likes} Likes </p>
        <button data-id=${this.id} class="like-btn">Like <3</button>
      `
    return this.element
  }


}
