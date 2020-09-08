// const nums = [1, 2, 3, 4]
// const result = nums.reduce(function(final, num){
//     final += num
//     return final
// })
// console.log(result)

// const result = nums.reduce(function(final, num){
//     const string = num.toString()
//     final += string
//     return final
// })
// console.log(result)

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ]

//count items with reduce
// const count = voters.reduce(function(final, voter){
//     if(voter.voted){                    //simply insert ! in front of voter on this line to count how many didn't vote 
//         final++
//     }
//     return final
// }, 0)
// console.log(count)

// var wishlist = [
//     { title: "Tesla Model S", price: 90000 },
//     { title: "4 carat diamond ring", price: 45000 },
//     { title: "Fancy hacky Sack", price: 5 },
//     { title: "Gold fidgit spinner", price: 2000 },
//     { title: "A second Tesla Model S", price: 90000 }
// ]

//add items with reduce
// const result = wishlist.reduce(function(final, item){
//     final += item.price
//     return final
// }, 0)
// console.log(result)

// var arrays = [
//     ["1", "2", "3"],
//     [true],
//     [4, 5, 6]
// ]

// creates one array from multiple arrays
// const result = arrays.reduce(function(final, array){
//     const newArr = final.concat(array)
//     return newArr
// }, [])
// console.log(result)
