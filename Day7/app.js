// Day7

// Functions part One
// function sayHello() {
//     console.log("Hello! My name is variable");
// }

// sayHello("Geun");
// sayHello("Jarvis");
// sayHello("name");


// functions part Two
// function sayHello(nameOfPerson, age) {
//     console.log("Hello! My name is " + nameOfPerson + " and I'm " + age);
// }

// sayHello("Geun", 10);
// sayHello("Jarvis", 23);
// sayHello("name", 21);


// function plus(a, b) {
//     console.log(a + b);
// }

// function divide(a, b)   {
//     console.log(a / b);
// }

// plus(8, 60);
// divide(98, 20);


const player = {
    name: "Geun",
    sayHello: function(otherPersonsName)    {
        console.log("Hello! " + otherPersonsName + " Nice to meet you!");
    }
}

console.log(player.name);
player.sayHello("Lynn");