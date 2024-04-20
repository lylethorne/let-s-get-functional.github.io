// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = (array) => {
    let males = _.filter(array, (customer) => customer.gender === 'male');
    
    return males.length;
}

var femaleCount = function(array){
    let females = _.reduce(array,function(acc, current){
        if(current.gender === 'female'){

            acc++;
        }
        return acc;
    }, 0);
    return females;
};

var oldestCustomer = function (array){
    const oldest = array.filter((customer) => customer.age >= 40 ).map((customer) => customer.name);
    let moreOld = oldest.join('');
    return moreOld;
};

var youngestCustomer = function (array){
    let youngest = array.filter((customer) => customer.age <= 22).map((customer) => customer.name);
    let youngestEst = youngest.join('');
    return youngestEst;
};

var averageBalance = (array) => {
    let balanceCust = array.reduce(function(acc, current){
        return acc + Number(current.balance.replace(/\$|,/g, ""));
      }, 0);
       return balanceCust / array.length;
};

var firstLetterCount = (array, letter, output=0) => { 
    let sum = array.filter(function(customer){
        if(customer.name.charAt(0).toUpperCase() === letter || customer.name.charAt(0).toLowerCase() === letter ){
            output += 1;
        }
        return output;
    });  
    return output;   
};

var friendFirstLetterCount = (array, name, letter, output=0) => {
    let friendsIn = array.filter(function(friend){
    for(let i = 0; i < friend.friends.length; i++){
        if(friend.friends.name.charAt(0).toUpperCase() === letter || friend.friends.name.charAt(0).toLowerCase() === letter){
            output += 1;
    }
    return output;
        }
    });
    return output;
};

var friendsCount = (array, name, output=[]) => {
  const frand = array.filter((customer) => {
  if(customer.friends.includes(name)){
    output.push(customer.name)
  }
  
  });
  return output;
};

var topThreeTags = function(array, output=[]){
    let result = array.reduce(function(accumulator, current ){
          if (current[tags] === undefined){
            current[tags] = 1;
          } else {
            [tags] += 1;
          }
        return accumulator;
      }, []);
     
    // let sum = {};
    // array.forEach(function(customer){
    //     customer.tags.forEach((tag) =>
    //         sum[tag] = (sum[tag] || 0) + 1
    //     );

    // });
    let sorted = result.map(s => [ s , result[s] ] ).sort( (a,b) => a[1] - b[1] );
    for(let i = 0; i < sorted.length; i++){
        if(sorted[i] >= 3){
            output.push(sorted[i]);
        }
        return output;
    }
   
};

var genderCount = function(array){
   let genderNum = customers.reduce(function(acc, current){
    if(acc[current.gender]){
        acc[current.gender] += 1;
    }else{
        acc[current.gender] = 1;
    }
    return acc;
   }, {});
   return genderNum;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
