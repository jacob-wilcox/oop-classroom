class Room {
  constructor(name, description){
      this.name = name
      this.description = description
      this.contents = []
  }
  add(item){
      this.contents.push(item)
  }
  has(item){
      if(this.contents.contains(item)){
          return true
      } else {
          return false
      }
  }
}

module.exports = Room
