const course = {
    name : "JavaScript",
    fees : 1999,
    courseInstructor : "Hitesh"
}
//This process is called Destructuring , use in react
const {courseInstructor} = course;
console.log(courseInstructor);

//OR
const {name : courseName} = course;
console.log(courseName);

//API value in JSON format
// {
//    " name" : "JavaScript",
//     "fees ": 1999,
//     "courseInstructor" : "Hitesh"
// }