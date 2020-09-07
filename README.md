1. resides in Array.js
2. a) Array { length: 1, \_capacity: 3, ptr: 0 }
   b) Array { length: 6, \_capacity: 18, ptr: 45 }
3. Array { length: 3, \_capacity: 18, ptr: 45 }, length decreases, but the capacy and the memory address have already been shifted by pushing.
4.
5. const URLify = (string) => {
   const arr = string.split("");
   for (let i = 0; i < arr.length; i++) {
   if (arr[i] === " ") {
   arr[i] = "%20";
   }
   }
   return arr.join("");
   };
6. function filterLessFive(arr) { // O(n)
   for (let i = 0; i < arr.length; i++) {
   if (arr[i] < 5) {
   arr.splice(i, 1)
   }
   }

   return arr;
   }

7. function maxSum(array) {
   let currentSum = 0;
   let currentHighest = array[0]

array.forEach(number => {
currentSum += number;
if (currentSum > currentHighest) {
currentHighest = currentSum;
}
})

return currentHighest;
}

8. function mergeArrays(arr1, arr2) {
   const totalLength = arr1.length + arr2.length;
   const result = [];

   let index1 = 0;
   let index2 = 0;

   while(result.length < totalLength) {
   if (arr1[index1] < arr2[index2] || arr2[index2] === undefinded){
   result.push(arr1[index1]);
   index1++;
   } else {
   result.push(arr2[index2])
   index2++
   }
   }

   return result;

}

9.  function removeCharacters(string) {
    const regexFilter = /[aeiouAEIOU]/gi;

        console.log(string);

        newString = string.replace(regexFilter, "")

        return newString;

    }

10. function productsArray(arr) {
    let result = []

    arr.array.forEach(numb => {
    let product = 1
    for ( let el of arr) {
    if (el !== numb) {
    product \*= el
    }
    }
    result.push(product)

    });
    return result

}

11. function removeZeroes(array) {
    let zeroes = []

for (let i = 0; i < array.length; i++) {
for (let j = 0; j < array[i].length; j++) {
if (array[i][j] === 0) {
zeroes.push([i, j])
}
}
}

zeroes.forEach(zero => {
let row = zero[0];
let column = zero[1];

    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array[i].length; j++) {
        if (i === row || j === column) {
          array[i][j] = 0;
        }
      }
    }

})

return array;
}

12. function isRotation(string1, string2) {
  let arr = string1.split('');
  for (let i = 0; i < arr.length; i++) {
    let temp = arr.shift();
    arr.push(temp);
    let rotation = arr.join('')
    
    if (rotation === string2) {
      return true;
    }
  }
  return false;
}
