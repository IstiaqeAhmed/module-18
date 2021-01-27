function evenify(num){
    var result;
    if(num % 2 == 0){
        //console.log(num, ': is even number')
        result = num;
    }
    else{
        //console.log(num*2, ' : is odd number')
        result = num *2;
    }
   return result;
}
// var result = evenify(13);
// console.log('result :',result);
var result = evenify(13);
var square = result * result;
console.log('square :',square);

function evenify_all(nums){
    even_array = []
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        var result = evenify(num)
        even_array.push(result);
    }
    return even_array;
}

nums = [5, 12, 89, 45, 18, 8]
var nums_even = evenify_all(nums)
console.log(nums_even)
//evenify_all(nums)

// for (let i = 0; i< nums.length; i++) {
//         const num = nums[i];
//      eveniffy(num)
//     }

    // friends_age = [13, 17, 19, 20, 18];
    // evenify_all(nums)
    // for (let i = 0; i < friends_age.length; i++) {
    //     const age = friends_age[i];
    //     // console.log(age);
    //     eveniffy(age);
    // }
