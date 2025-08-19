//FUNCTIONS

let num1 = 17;
func1 ();
func2 ();
console.log('Global Context: ', num1)

function func1 () {
    let num1 = 27;
    console.log('In function 1: ', num1);
}
function func2 () {
    let num1 = 37;
    console.log('In function 2: ', num1)
}
