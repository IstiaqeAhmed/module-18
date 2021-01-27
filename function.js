// function eveniffy(num){
//     if(num % 2 == 0){
//         console.log(num, ': is even number')
//     }
//     else{
//         console.log(num*2, '" is odd number')
//     }
// }
function evenify_all(nums){
    for (let i = 0; i< nums.length; i++) {
        const num = nums[i];
        if(num % 2 == 0){
            console.log(num, ': is even number')
        }
        else{
            console.log(num*2, '" is odd number')
        }
    
    }
}

nums = [5, 12, 89, 45, 18, 8]
evenify_all(nums)

// for (let i = 0; i< nums.length; i++) {
//         const num = nums[i];
//      eveniffy(num)
//     }

    friends_age = [13, 17, 19, 20, 18];
    evenify_all(nums)
    // for (let i = 0; i < friends_age.length; i++) {
    //     const age = friends_age[i];
    //     // console.log(age);
    //     eveniffy(age);
    // }
