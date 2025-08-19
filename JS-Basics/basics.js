//CODES PRACTICED SO FAR (COMPLETE)

const origin = [1,2,3,4,5]
console.log('Original Array: ', origin, '\n')

//.FOREACH()
console.log('Using forEach(): \n')          //forEach() can change each element in the existing array (when specified)
origin.forEach(function myTest(item, index) {
    origin[index] = item + 2
    console.log(item)                       //each item is passed through the function individually, and so are printed in seperate lines
} )

const arr1 = [1,2,3,4,5,6,-7,8,9,10]
//.MAP()
const arr2 = arr1.map(function (item, index) { 
    return item + 10                        // the map function RETURNS the each item in the array
})
console.log('Using map(): \n', arr2, '\n\n')

//.FILTER()
const arr3 = arr1.filter(function (item, index, arr) {
    if(arr[0]===1) {                        //pass array in parameters to seperately access items in the array
        console.log('You got it!')
    }
    return item %3 === 0                    //add items to new array if certain conditions are met
})
console.log('Using filter(): \n', arr3)

//.REDUCE()
total = arr1.reduce(function sum(previous, next) {
    return previous + next;
})
console.log('Using reduce, sum is: ', total)

//SPREAD OPERATOR
let maximum = Math.max(...arr1)                //Math.max does not directly accept array, use spread operator (...) to enable accepting all values of array individually
let minimum = Math.min(...arr1)
console.log('Maximum value in array: ', maximum, '\nMinimum value in array: ', minimum)

let name = 'Khadijah'
let arrName = [...name]                         //.join('+') to join the characters again
console.log(arrName)

//REST OPERATOR
function rainbow(...allColors) {               //values stored in array alColors
    console.log('Colors in a Rainbow: ', allColors)
}
const color1 = 'red'
const color2 = 'yellow'
const color3 = 'orange'
const color4 = 'green'
const color5 = 'blue'
const color6 = 'purple'
const color7 = 'pink'
rainbow(color1, color2, color3, color4, color5, color6, color7)
