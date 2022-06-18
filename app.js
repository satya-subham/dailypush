let number = 407;
let firstDigit = Math.floor(number/100);
let secondDigit = Math.floor((number%100)/10);
let lastDigit = ((number%100)%10);
if(firstDigit**3 + secondDigit**3 + lastDigit**3 == number){
    console.log("It's an armstrong number");
}else{
    console.log("it's not an armstrong number");
}


