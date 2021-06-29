class Desk {
  constructor (length, width, height, isWhiteboard){
      this.length = length
      this.width = width
      this.height = height
      this. isWhiteboard = isWhiteboard
      this.content = ''
  }
  write (inputString) {
      // May need to edit after test
    this.content.concat(inputString)
    
  }
  wipe (){
      if(this.isWhiteboard === true){
          this.content = ''
      }
  }
}

module.exports = Desk
