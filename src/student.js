class Student {
  constructor(name, skillLevel){
      this.name = name;
      this.skillLevel = skillLevel;
      this.assignments = [];
  }
  study(){
      if(this.skillLevel < 100){
        this.skillLevel +=1;
      }
    }
    doHomeWork(homework){

    }
}

module.exports = Student
