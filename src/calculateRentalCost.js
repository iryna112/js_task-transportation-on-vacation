/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  // write code here
  let cost;
  if(days >= 7) {
    cost = days * 40 - 50
  }
<<<<<<< HEAD
=======
  if (days >= 3 ) {
>>>>>>> 4c3172522a9fa47e9bf76240e04fac52f884dcee
    cost = days * 40 - 20
  }
  return cost
}

module.exports = calculateRentalCost;
