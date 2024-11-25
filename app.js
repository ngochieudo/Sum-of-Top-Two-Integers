const sumTwoLargestInteger = (arr) => {
    let first = -Infinity;
    let second = -Infinity;

    for (let num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num > second) {
            second = num;
        }
    }

    return first + second;
   }

console.log(sumTwoLargestInteger([1, 4, 2, 3, 5]))
console.log(sumTwoLargestInteger([1, 98, 52, 55, 42, 72]))
console.log(sumTwoLargestInteger([-1, -2, -3, -3, -10, -4, -4, -5]))