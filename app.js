let number1 = 2;
let number2 = 10;
let product = 1;
for(i = number1; i <= number2; i++){
    let secondlastDigit = i % 10;
    if(i%2 == 0 && secondlastDigit == 4)
    product = product * i;
}
console.log(product);
