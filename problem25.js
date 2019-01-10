let f1 = 1;
let f2 = 1;
let sum = 0;
let indexCnt = 2;

while (!isDigitNum(sum, 1000)) {
    sum = f1 + f2;
    f1 = f2;
    f2 = sum;
    indexCnt++;
}

console.log(`Index: ${indexCnt}, number = ${sum}`);

function isDigitNum(num, digitNum) {
    return (num.toString().length === digitNum)
}