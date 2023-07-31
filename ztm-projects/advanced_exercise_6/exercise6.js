//Evaluate these:
//#1


//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;


//#3 create two classes: an Animal class and a Mamal class. 
class Animal {
    constructor(name, type){
        this.name = name;
        this.type = type
    }
}

class Mamal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
}
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Cow extends Mamal{
    constructor(name, type, color){
        super(name, type)
        this.color = color;
        this.sound = ()=>{
            console.log('Moo', this.name);
        }
    }
}

let myCow = new Cow(`AZEEZ`, `BULL`, `RED`);

console.log(myCow);
console.log(myCow.sound());
