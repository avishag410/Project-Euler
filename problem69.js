/* Finds the Greatest Common Divisor of n & m */
function GCD(n,m) {
    let r = 0;
    
    while( n !== 0 ) {
        r = m % n;
        m = n;
        n = r;
    }
    return m;
}

/* Returns the number of numbers less than n which are relatively prime to n */
function eulerTotientFunc(n) {
    let result = 0;
    
    for(let i = 1; i < n; i++) {
        if(GCD(n, i) == 1) {
            result++;
        }
    }
    
    return result; 
}

/* Find the value of n for which n/φ(n) is a maximum */
function totientMax(N){
    let maxDiv = 0 // div =  n/φ(n)
    let maxN = 0
    
    let curVal = 0
    for(let i = 2; i <= N; i++) {
        curVal = i / eulerTotientFunc(i)
        
        if(curVal > maxDiv){
            maxDiv = curVal
            maxN = i
        }
    }
    return maxN;
}

const N = 10
console.log(totientMax(N))