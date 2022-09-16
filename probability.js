function allocations(n, k)
// allocations of k objects out of n people
{
    let res = 1
    for (let i = 0; i != k; i++) {
        res *= (n - i);
    }
    return res
}

function factorial(n){
    return allocations(n, n)
}

function combinations(n, k){
    return allocations(n, k) / factorial(k)
}

function pos_integer_equation(r, n){
    return combinations(n-r+1, r-1)
}
