//let
let studentcount = 11;
studentcount = 11;
console.log("student count:", studentcount);
//const
const collageName = "VETIAS";
console.log("collage Name:",collagename);
//Template literals
console.log('Welcome ${studentName} to ${collage Name}');
//object
 const student ={
    name : "Arjun",
    age : 20;
    department :CS
 }
 //Destructing 
 const{name,age,department} = student;
console.log("Name":", name);
    console.log("Age:, age);
        console.log("Department:", department);

        //Arrow Function
        const displaystudent =()=> {
            console.log('student Name: ${Name}');
       }]
displaystudent();
//ARRAYS 
cont student =[
    "Arun",
    "priya",
    "Devadharshini"

];
console.log(students);
//spread operator
const studentupdatestudent = [
    ..students,
];
console.log("updatestudent");
 // rest operator
 function maximummarks(..marks){
    let max= Math.max(...marks);
    return max;

 }
 console.log("maximum marks",maximummarks(80,70,90));