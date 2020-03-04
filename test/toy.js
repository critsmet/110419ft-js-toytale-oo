class Toy{
  constructor({id, name, image, likes}){
    this.id = id
    this.name = name
    this.image = image
    this.likes = likes
    this.element = document.createElement('div')
    this.element.className = 'card'

  }

  render(){
    this.element.innerHTML = `
      <div id=${this.id} class="card">
        <h2>${this.name}</h2>
        <img src=${this.image} class="toy-avatar" />
        <p>${this.likes} Likes </p>
        <button class="like-btn">Like <3</button>
      </div>
    `
    return this.element

  }

  update(){
    let div = document.getElementById(this.id)
    div.innerHTML = `
      <h2>${toy.name}</h2>
      <img src=${toy.image} class="toy-avatar" />
      <p>${toy.likes} Likes </p>
      <button class="like-btn">Like <3</button>
    `
  }
}
