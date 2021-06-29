class Marker {
  constructor (size, color, remainingInk) {
      this.size = size
      this.color = color
      this.remainingInk = remainingInk
  }
  wrtie(word){
      let theString = getElementById(word).value;
      let remainingLetters = theString.repalce(/\s/g, "")
      let wordLength = remainingLetters.length
      if (this.remainingInk > wordLength){
          return word
      } else {
          // TODO: may not properly return string with spaces due to it counting spaces
          return word.substr(wordLength - this.remainingInk) 
      }
      //TODO: how to take out spaces
    //   remainingInk = remainingInk - word.length // not including spaces
    //   return word
  }

}

module.exports = Marker
