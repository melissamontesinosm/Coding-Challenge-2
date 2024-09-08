//Task 1: Calculate the Tip
let bill= 129; //Bill example
let tip= bill >= 120 ? bill* 0.18 : bill* 0.15; //If Bill is larger than 

console.log("The tip amount was:", tip);//Output: Tip amount(bill* tip%)

//Task 2: Output Details
console.log(`The bill was: $${bill}, the tip was $${tip}, and the total value is: $${bill+tip}`);

//Task 3: Create a Function
function calculateTip(bill){
    return bill >= 120? bill* 0.18: bill* 0.15;
}
console.log(`The tip amount was: $${calculateTip(100)}`); //Output: 15

//Task 4: Utilize Arrays
const bills = [275,40,430,125,555,44]; //Array of Test Data 
const tips = bills.map(bill => calculateTip(bill)); //Array of tips
const totals = bills.map((bill, i)=> bill + tips[i]); //Array of totals

console.log(bills, tips, totals);