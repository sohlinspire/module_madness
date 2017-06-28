var ranNum = require('./randomNumber.js');
var convert= require('./convertToDollars.js');

function value3(min, max){
  return convert(ranNum(min, max));
}

module.exports = {
value3: value3,
convert: convert
};















// function value(ranNum){
//   return convert(ranNum);
// }
//
// var stuff = value();
//
// function accountName(last) {
//   console.log("Account balance: " + last);
// }
//
// function final(stuff){
//   return accountName(stuff);
// }
//

//var last = final()






//
// function randomNum(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }
//
//
// var ranNum = randomNum(100, 1000000);
// var USD = addCommas(ranNum);
//
//
// function addCommas(nStr)
// {
//     nStr += '';
//     x = nStr.split('.');
//     x1 = x[0];
//     x2 = x.length > 1 ? '.' + x[1] : '';
//     var rgx = /(\d+)(\d{3})/;
//     while (rgx.test(x1)) {
//         x1 = x1.replace(rgx, '$1' + ',' + '$2');
//     }
//     return x1 + x2;
//
// }
//
// accountName(USD);
//
// function accountName(USD) {
//   console.log("Account balance: " + USD);
// }
