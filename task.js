// class Person {
//     constructor(name, surname, age, gender) {
//         this.name = name;
//         this.surname = surname;
//         this.age = age;
//         this.gender = gender;
//     }
// }
// let person1 = new Person("Ali", "Kamalov", 32, "male")
// let person2 = new Person("Aga", "Kamalov", 45, "male")
// let person3 = new Person("Kamil", "Kamalov", 67, "male")
// console.log(person1);
// console.log(person2);
// console.log(person3);


// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     celebrateBirthday(newAge){
//         this.age++
//     }
// }
// let newUser = new Person("Kamal", 30);
// newUser.celebrateBirthday()
// console.log(newUser);


//-------------------------------------------
// class Vehicle {
//     constructor(speed, color){
//         this.speed = speed;
//         this.color = color;
//         this.seat = 4
//     }
//     changeColor(){
//         this.color = "yellow"
//     }
// }

// class Car extends Vehicle {
//     constructor(speed, color, mile){
//         super(speed,color);
//         this.mile = mile;
//     }
// }

// let vehicle1 = new Vehicle(360, "red");
// vehicle1.changeColor();
// console.log(vehicle1);

// let car1 = new Car(300, "blue", 100000);
// car1.changeColor();
// console.log(car1);







//Task-1, Task-2

class Person {
    constructor(surname,name,age) {
        this.surname = surname;
        this.name = name;
        this.age = age;
    }
    changeName(){
        this.name = "Omar"
    }
}
class Admin extends Person {
    constructor(surname,name,age,role,salary){
        super(surname,name,age)
        this.role = role;
        this.salary = salary;
    }
    changeName(){
        this.name = "Kazim"
    }
}
class Player extends Person {
    constructor(surname,name,age,id) {
        super(surname,name,age)
        this.id = id;
    }
    changeName(){
        this.name = "Ali"
    }
}
