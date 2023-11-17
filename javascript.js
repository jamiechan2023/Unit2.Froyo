//create prompt to receive user input for froyo orders
let froyoOrder = prompt(
  "Please input a list of froyo flavors e.g. vanilla,mocha,coffee"
);

//split user input string into an array
const froyoOrderArray = froyoOrder.split(",");

//call a function to generate an order summary then display it in console
console.table(OrderSummary(froyoOrderArray));

// create a function that receives an array of order items as input parameter
// and return an object storing an order summary
// (i.e. the count of how many of each item they ordered)
function OrderSummary(orderItemArray) {
  const freqCounter = {};
  let item;
  for (let i = 0; i < orderItemArray.length; i++) {
    item = orderItemArray[i];
    if (item in freqCounter) {
      freqCounter[item]++;
    } else {
      freqCounter[item] = 1;
    }
  }
  return freqCounter;
}
