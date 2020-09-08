const nums = [1, 2, 3, 4]
const result = nums.reduce(function(final, num){
    final += num
    return final
})
console.log(result)