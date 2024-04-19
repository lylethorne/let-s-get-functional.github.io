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
    const oldest = _.sort((a, b) =>
    customers.age(a) > customers.age(b) ? -1 : 1
  );
  return oldest[0];
    // let oldest = _.reduce(function(acc, current){
    //     if(current.age > acc.age){
    //         return current.name;
    //     }else{
    //         return acc.name;
    //     }
    // }, '');
    // return oldest;
};

var youngestCustomer = function (array){
    let youngest = _.reduce(array, function(acc, current){
        if(current.age > acc.age){
            return acc.name
        }else{
            return current.name;
        }
    }, '');
    return youngest;
};

var averageBalance = (array, output=0) => {
    let sum = array.filter(function(customer){
        output += customer.balance / array.length });
    return output;
};

var firstLetterCount = (array, letter, output=0) => { 
    let sum = array.filter(function(customer){
        if(friends.name.charAt(0) === letter){
            output += 1;
        }
        return output;
    });  
    return output;   
};

var friendFirstLetterCount = (array, name, letter) => {
    let friendsIn = array.filter((person) => person.name.friend.name.charAt(0).toUpperCase() === letter || 
    person.name.friend.name.charAt(0).toLowerCase() === letter);
    
    return friendsIn.length;
};

var friendsCount = (array, name) => {
  const frand = array.filter(name => array.name.friend);
  return frand;
};

var topThreeTags = function(array){
    let result = customers.reduce(function(acc, current){
        let toptag = customers.tags;
        for(let i = 0; i < toptag.length; i++){
            if(acc[toptag[i]]){
                acc[toptag[i]] += 1;
            }else{
                acc[toptag[i]] = 1;
            }
        }
            return acc;
    }, {});
    result.reduce(function(acc, current){
        if(current[tag] > acc[tag]){
            acc.push(current);
        }
        return acc;
    },[]);
 return result;
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
