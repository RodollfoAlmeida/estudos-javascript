let num = [5,9,8,7,8]

console.log(num)

for(let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num)

for(let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num.indexOf(7))
console.log(num.indexOf(3))