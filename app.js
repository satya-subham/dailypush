let rev = 0;
let num = 131;
let t = num;
while(num != 0){
    let lastDigit = num % 10;
    rev = rev *10 + lastDigit;
    num =Math.floor(num/10);
}
if(rev == t){
    console.log("yes");
}else{
    console.log("no");
}