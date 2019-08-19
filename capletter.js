//Daniel Kenny 19/08/19
//Examples of how to capitalize the first letter of every word

//Use a standard for loop
function capLetter1(str){
  const strArray = str.toLowerCase().split(' ');
  for(let i = 0; i < strArray.length; i++){
    strArray[i] = strArray[i].substring(0,1).toUpperCase() + strArray[i].substring(1);
  }
  return strArray.join(' ');
}
///////////////////////////////////////////////////////////////////////////////////////////////

//Use the map function
function capLetter2(str){
  return str.toLowerCase().split(' ').map(function(word){
    return word[0].toUpperCase() + word.substring(1);
  }).join(' ');
}
////////////////////////////////////////////////////////////////////////////////////////////////
//Use the map function with arrow function
function capLetter3(str){
  return str.toLowerCase().split(' ').map (word => word[0].toUpperCase() + word.substring(1)).join(' ');
}
/////////////////////////////////////////////////////////////////////////////////////////////////
//Use of reg ex
function capLetter4(str){
  //\b for word boundary and g for global and i for case insensitive
  return str.replace(/\b[a-z]/gi, function(char){
    return char.toUpperCase();
  })
}
//////////////////////////////////////////////////////////////////////////////////////////////

let myString1 = "this is fun";
console.log(capLetter1(myString1));
console.log(capLetter2(myString1));
console.log(capLetter3(myString1));
console.log(capLetter4(myString1));