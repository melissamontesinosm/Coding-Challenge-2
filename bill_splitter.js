//Task 1: Calculate the Tip
let bill= 129; //Bill example
let tip= bill >= 120 ? bill* 0.18 : bill* 0.15; //If Bill is larger than 

console.log(tip);//Output: Tip amount(bill* tip%)

//Task 2: Output Details
console.log(`The bill was: $${bill}, the tip was $${tip}, and the total value is: $${bill+tip}`);

//Task 3: Create a Function
function calculateTip(bill){
    return bill >= 120? bill* 0.18: bill* 0.15;
}
console.log(calculateTip(100)); //Output: 15