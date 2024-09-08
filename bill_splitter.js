//Task 1: Calculate the Tip
let bill= 129; //Bill example
let tip= bill >= 100 ? bill* 0.18 : bill* 0.15; //If Bill is larger than 

console.log(tip);//Output: Tip amount(bill* tip%)

//Task 2: Output Details
console.log(`The bill was: $${bill}, the tip was $${tip}, and the total value is: $${bill+tip}`);
