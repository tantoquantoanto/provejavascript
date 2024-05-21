const name = "javascript";
let nameReverse = "";


for(let i = 9; i >= 0; i--) {
    nameReverse += name[i];
}
console.log(nameReverse)


const array = [1, 5, 9, 20, 85, 100];
let arrayMax = array[0];

for(let i = 0; i<= array.lenght; i++) {
    if(array[i] > arrayMax) {
        arrayMax = array[i];
    }
}
console.log(`${arrayMax}`)


const array2 = [1, 2, 4, 8, 10, 22];
let array2Sum = 0;

for(let i = 0; i <= array2.lenght; i++) {
    if(array2[i] %2 === 0) {
        array2Sum += array2[i];

    }
}

   console.log(array2Sum)