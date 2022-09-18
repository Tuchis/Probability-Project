let form = document.getElementById("questions")
let input;

function block_permutations() {
    // check from the form
    let answer = "Yes"
    let n = input.value
    if (answer === "Yes") {
        return factorial(n)
    }
    let values = get_all_similar()
    return permutations_replacement(n, values)
}

function get_all_similar(string) {
    let array = string.split(" ")
    array = array.map((x) => parseInt(x))
    return array
}


function block_allocations() {
    let answer = "Yes"
    let n = input.value
    let k = input.value
    if (answer === "Yes") {
        return n ** k
    }
    return allocations(n, k)
}


function block_combinations() {
    let answer = "Yes"
    let n = input.value
    let k = input.value
    if (answer === "Yes") {
        return combinations(n, k)
    }
    return non_neg_integer_equation(k, n)
}


function allocations(n, k)
// allocations of k objects out of n
{
    let res = 1
    for (let i = 0; i != k; i++) {
        res *= (n - i);
    }
    return res
}

function factorial(n) {
    return allocations(n, n)
}

function permutations_replacement(n, values) {
    let number = factorial(n)
    for (const extra of values) {
        number /= factorial(extra)
    }
    return number
}

function combinations(n, k) {
    return allocations(n, k) / factorial(k)
}

function non_neg_integer_equation(r, n) {
    return combinations(n - r + 1, r - 1)
}
