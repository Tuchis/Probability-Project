const first_butt = document.getElementById("send1")
const second_butt = document.getElementById("send2")
const third_butt = document.getElementById("send3")

const perm_yes_no = document.getElementById("yesnoperm")
const allo_yes_no = document.getElementById("yesnoaloc")
const comb_yes_no = document.getElementById("yesnocomb")


const div_first = document.getElementById("1")
const div_sec = document.getElementById("2")
const div_third = document.getElementById("3")


first_butt.addEventListener("click", function () {
    block_permutations()
})

second_butt.addEventListener("click", function () {
    block_allocations()
})

third_butt.addEventListener("click", function () {
    block_combinations()
})


let str_div_perm = "<span class='formula'>${ P }_n = n!$ </span>>"
let str_div_p_boosted = "<span class='formula'>${ M }_n(x_1...x_i) =\frac{n!}{x_1...x_i}$</span>>"


let str_div_alloc = "<span class='formula'>$n...n = n^k$</span>"
let str_div_alloc_2 = "<span class='formula'>$A_n^k = \frac{n!}{(n-k)!}$</span>"

let str_div_comb_1 = "<span class='formula'>${C}_n^k = \frac{n!}{(n-k)! k!}$</span>"
let str_div_comb_2 = "<span class='formula'>${C}_{n+k-1}^{k-1} = \frac{(n+k-1)!}{n!(k-1)!}$</span>"

function block_permutations() {
    let answer = perm_yes_no.value
    let n = parseInt(document.getElementById("permelem").value)
    if (answer === "Yes") {
        div_first.innerHTML = str_div_perm
        return factorial(n)
    }
    let values = get_all_similar(document.getElementById("multinom").value)
    div_first.innerHTML = str_div_p_boosted
    return permutations_replacement(n, values)
}

function get_all_similar(string) {
    let array = string.split(" ")
    array = array.map((x) => parseInt(x))
    return array
}

function block_allocations() {
    let answer = allo_yes_no.value
    let n = parseInt(document.getElementById("alocall").value)
    let k = parseInt(document.getElementById("alocnumber").value)
    if (answer === "Yes") {
        div_sec.innerHTML = str_div_alloc
        return n ** k
    }
    div_sec.innerHTML = str_div_alloc_2
    return allocations(n, k)
}

function block_combinations() {
    let answer = comb_yes_no.value
    let n = parseInt(document.getElementById("comball"))
    let k = parseInt(document.getElementById("combgroupnum"))
    if (answer === "Yes") {
        div_third.innerHTML = str_div_comb_1
        return combinations(n, k)
    }
    div_third.innerHTML = str_div_comb_2
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
    return combinations(n + r - 1, r - 1)
}