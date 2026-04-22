let students = [
  {id:1, name:"ram", mark:85, course:"MERN"},
  {id:2, name:"aravind", mark:45, course:"Python"},
  {id:3, name:"karthi", mark:72, course:"Java"},
  {id:4, name:"harsa", mark:95, course:"React"}
];

for(let i = 0; i < students.length; i++) {
    console.log(
        students[i].id,
        students[i].name,
        students[i].mark,
        students[i].course
    );
}


for(let i = 0; i < students.length; i++) {
    
    if(students[i].mark >= 50) 
        console.log(students[i].name + " - Pass");
     else {
        console.log(students[i].name + " - Fail");
    }

}

for(let i = 0; i < students.length; i++) {

    let mark = students[i].mark;

    if(mark >= 90) {
        console.log(students[i].name + " - A Grade");
    }
    else if(mark >= 75) {
        console.log(students[i].name + " - B Grade");
    }
    else if(mark >= 50) {
        console.log(students[i].name + " - C Grade");
    }
    else {
        console.log(students[i].name + " - Fail");
    }

}

let topper = students[0];

for(let i = 1; i < students.length; i++) {

    if(students[i].mark > topper.mark) {
        topper = students[i];
    }

}

console.log("Topper is " + topper.name + " - " + topper.mark);

for(let i = 0; i < students.length; i++) {

    if(students[i].course === "React") {
        console.log(students[i]);
    }

}

students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

for(let i = 0; i < students.length; i++) {
    console.log(students[i]);
}

let status = "present";

switch(status) {
    case "present":
        console.log("Welcome");
        break;

    case "absent":
        console.log("Mark Absent");
        break;

    case "leave":
        console.log("Approved Leave");
        break;

    default:
        console.log("Invalid");
}

let username = "admin";
let password = "1234";

if(username === "admin" && password === "1234") {
    console.log("Login Success");
} else {
    console.log("Invalid User");
}