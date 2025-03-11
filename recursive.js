//factiorial


function factionrial(n){
    if(n<1) return 1
    return n*factionrial(n-1)
}

//fibonacchi with memorization

function fibonacchi(n,memo={}){
    if(memo[n]){
       return  memo[n]
    }

    if(n<=1) return n;
    memo[n]= fibonacchi(n-1)+fibonacchi(n-2)
    return memo[n]

}


//fibonacchi seric
function fibonacciSeries(n){
    if (n <= 0) return [];
    if (n === 1) return [0];
    const seric=[0,1]
    for (let i = 2; i < n; i++) {
       seric.push(seric[i-1]+seric[i-2])
    }
    return seric
}

