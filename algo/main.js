function somme(nums, target) {
    for (let i= 0; i<nums.length; i++) {
        for (let j = 0; j<nums.length; j++){
            if(nums[i]+nums[j]=== target && i < j)
            {
                console.log('Output : ', i,j)}
        }
    }
}


//On peut par exemple par la suite tester le code avec ces valeurs :
const nums1 = [2, 7, 11, 15];
const target1 = 9;
console.log(somme(nums1, target1));

