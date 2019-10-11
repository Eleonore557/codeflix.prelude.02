module.exports = function pick(object, keys){
   class Id {
       constructor(name, age, userId){
           this.name = name;
           this.age = age;
           this.userId = userId;
       }
      decrire(){
          return `${this.name} ${this.age}`
      }
    }

}