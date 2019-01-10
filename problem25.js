function isDigitNum(num, digitNum) {
    return (num.toString().length === digitNum)
}

function NDigitFibonacciNumber(digitNum)
{
    let f1 = 1;
    let f2 = 1;
    let sum = 0;
    let indexCnt = 2;
    
    while (!isDigitNum(sum, digitNum)) {
        sum = f1 + f2;
        f1 = f2;
        f2 = sum;
        indexCnt++;
    }
    
    return [indexCnt, sum];
}

const ans =  NDigitFibonacciNumber(4);
const index = ans[0];
const fibNum = ans[1];
console.log(`Index: ${index}, number = ${fibNum}`);
