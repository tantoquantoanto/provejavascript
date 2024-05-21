const name = "javascript";
let nameReverse = "";


for(let i = 9; i >= 0; i--) {
    nameReverse += name[i];
}
console.log(nameReverse)


const array = [1, 5, 9, 20, 85, 100];
let arrayMax = array[0];

for(let i = 0; i<= array.length; i++) {
    if(array[i] > arrayMax) {
        arrayMax = array[i];
    }
}
console.log(`${arrayMax}`)


const array2 = [1, 2, 4, 8, 10, 22];
let array2Sum = 0;

for(let i = 0; i <= array2.length; i++) {
    if(array2[i] % 2 === 0) {
        array2Sum += array2[i];

    }
}

   console.log(array2Sum)


   const student = {
    name: "Antonietta",
    surname: "Andreozzi",
    age: 32,
    isMarried: true,

   }
   let newStudent = {};

   for(const prop in student) {
    if(prop != "isMarried"){
        newStudent[prop] = student[prop];

    }
 }
  console.log(newStudent)


  const x = "javascript"
  let xReverse = ""

  for(let i = 9; i >= 0; i--) {
    xReverse += x[i];
  }
  console.log(xReverse)