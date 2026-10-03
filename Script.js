let name = "Sandeep";
let course = "B.Sc. Physics";
let university = "Azim Premji University";
let year = "4th Year";
let studentId = "APU2023PHY001";
let email = "sandeep@example.com";

console.log(name);
console.log(course);
console.log(university);
console.log(year);
console.log(studentId);
console.log(email);

document.getElementById("studentName").innerText = name;

document.getElementById("name").innerHTML = name;

document.getElementById("course").innerHTML = course;

document.getElementById("university").innerHTML = university;

document.getElementById("year").innerHTML = year;

document.getElementById("studentId").innerHTML = studentId;

document.getElementById("email").innerHTML = email;
