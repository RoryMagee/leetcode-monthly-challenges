var isPowerOfFour = function(num) {
    if (num === 1) return true;
    const base = 4    
    let exp = 1;
    while (true) {
        let temp = Math.pow(base, exp++); 
        if (temp > num) break;
        if (temp === num) return true;
    } 
    return false;
}

console.log(isPowerOfFour(16)); //Expect True
console.log(isPowerOfFour(256)); //Expect True
console.log(isPowerOfFour(262144)); //Expect True
console.log(isPowerOfFour(15)); //Expect False
console.log(isPowerOfFour(1111111)); //Expect False
console.log(isPowerOfFour(1)); //Expect True

