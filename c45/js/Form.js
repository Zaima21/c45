class Form {
constructor (){
this.input = createInput("name")
this.title = createElement('h2')
this.button = createButton('Start')

}

display(){
this.title.html("My game")
this.title.position(400,100)
this.input.position(400,200)
this.button.position(400,250)
}
}
