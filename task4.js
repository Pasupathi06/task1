let arr = [10, 20, 30, 40, 50];

console.log("First element:", arr[0]);
console.log("Last element:", arr[arr.length - 1]);
console.log("Total length:", arr.length);




let arr1 = [1,2,3];

arr1.push(4,5);
arr1.pop();
console.log(arr1);




let arr3 = ["html","css","javascript","react"];

if(arr3.includes("javascript")) {
    console.log("JS Found");
} 
else {
    console.log("JS Not Found");
}




let emp = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
];

let checkSalary = emp.filter((c,i,t) => {
    return c.salary > 20000;
})
    .map((c,i,t) => {
        return c.name + " - " + c.salary;
    });

console.log(checkSalary);




let empNames = emp.map((c,i,t) => {
    return c.name
})

console.log(empNames);




checkSalary = emp.reduce((acc, c, i, t) => {
    return acc + c.salary;
}, 0);

console.log(checkSalary);




let arr4 = [1, 2, 2, 3, 4, 4, 5];

let result = [];

for (let i = 0; i < arr4.length; i++) {
  if (!result.includes(arr4[i])) {
    result.push(arr4[i]);
  }
}




let arr5 = [10, 200, 5, 90];

let Largest = arr5[0];

for (let i = 1; i < arr5.length; i++) {

  if (arr5[i] > Largest) {
    Largest = arr5[i];
  }
}

console.log(Largest);


let str = "hello";
let reversed = " ";

for (let i = str.length-1; i >= 0; i--) {
  reversed = reversed + str[i];
}

console.log(reversed);


let emp1 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:10000}
];

let result1 = {};

for (let i = 0; i < emp1.length; i++) {
    let salary = emp1[i].salary;
    let name = emp1[i].name;
    if (!result1[salary]) {
        result1[salary] = [];
    }

    result1[salary].push(name);
}

console.log(result1);


function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }

    }

    return result;
}

let arr6 = [1, [2, [3, [4]]]];

console.log(flatten(arr6));


let arr7 = [5,2,9,1];
let accend = arr7.sort()

console.log(accend.reverse());


let arr9 = [10, 50, 20, 40];

arr.sort(function(a, b) {
    return b - a;
});

console.log(arr[1]);


let str8 = "aabbccdde";
let result3 = {};

for (let i = 0; i < str8.length; i++) {
    
    let currentCharacter = str8[i];
    let alreadyExists = result3[currentCharacter];

    if (alreadyExists) {
        result3[currentCharacter] = result3[currentCharacter] + 1;
    } 
    else {
        result3[currentCharacter] = 1;
    }
}

console.log(result3);