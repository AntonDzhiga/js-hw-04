const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const allNumbers = array1.concat(array2);
let total = 0;

for (let allNumber of allNumbers) {
  total += allNumber;
}

console.log(total);
