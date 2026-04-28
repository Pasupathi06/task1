function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

studentForm("pasupathi pandi", 23, "full stack developer");



function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(50,30 );


function greet(name) {
    console.log("hello", name);
}

greet("harsa");
greet("sankar");
greet("kavinesh");



function square(num) {
    return num * num;
}
console.log(square(5)); 




function testScope(){
    let secret = "javascript";
    console.log("Inside:", secret);
    
}
testScope();
//explanation:let is block scope function inside variable outside not  useing so error come  secret is not defined//



let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let all = [...boys, ...girls];

console.log(all);




function sumall(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }
return total;
}
console.log(sumall(10, 20, 30, 40)); 




let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1, c2, c3);



let emp = {
    name: "pasupathi pandi",
    role: "Developer",
    salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role);



function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
}
let offer = offerGenerator();
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value);
console.log(offer.next().value); 





let res = offer.next();

while (!res.done) {
    console.log(res.value);
    res = offer.next();
}
console.log("No more offers");




function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30)); 



function marks(...nums) {
    let total = 0;

    for (let n of nums) {
        total += n;
    }

    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

marks(80, 90, 70, 60);






function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");




