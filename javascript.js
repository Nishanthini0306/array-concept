//creating array of arrays


let arrayOfArrays = [];
arrayOfArrays.push([1, 2, 3]);
arrayOfArrays.push(['a', 'b', 'c']);
arrayOfArrays.push([true, false, true]);
console.log(arrayOfArrays);
//Merging Array
let array1 = [1, 2, 3, 4, 5, 6];
let array2 = [26, 38, 54, 46, 56];
let mergearray = array1.concat(array2);
console.log(mergearray)

//Flattening Array
let arr1 = [[1, 2], [5, 6], [20, 26], [34, 38]];
let newarr = arr1.flat();
console.log(newarr);
//creating array length
function size(a) {
    let arr = new Array(a);
    console.log(arr);
}
size(4)

//intersection

function Intersection(arr1, arr2) {
    const intersectionResult = arr1.filter(x => arr2.indexOf(x) !== -1);
    return intersectionResult;
}
const array4 = [1, 2, 3, 5, 9];
const array5 = [1, 3, 5, 8];
const result = Intersection(array4, array5);
console.log(result);