//Asynchronous function does not block execution flow (usually occurs when a task like data fetching is taking longer)
//  Callback => Passing a function to another function as an argument so it is executed right after, ensures function2 will be executed right after function1 
//  Async
//  Promises 

//Chores: Washing-Dishes, Ironing-Clothes, Cleaning-Bedroom

function washingDishes() {
    
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve("Washed Dishes");
    }, 1000 )
    })
}
function ironingClothes() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Ironed Clothes");
    }, 3000 )
    })
}
function cleaningBedroom() {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Cleaned Bedroom");
    }, 500 )
    })
}
function completion() {
    console.log("Tasks Complete!")
}

washingDishes(() => {
    ironingClothes(() => {
        cleaningBedroom(() => {
            completion()
        })
    })
})

//method chaining