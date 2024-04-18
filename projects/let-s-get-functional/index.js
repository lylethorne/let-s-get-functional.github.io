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

var oldestCustomer = function (array, output=''){
    let oldest = customers.filter((person) => person.age);
    //let whatIf = oldest.map((age) => age > )

};

var youngestCustomer = function (array){
    let youngest = _.reduce(array, function(acc, current){
        if(current.age > acc.age){
            return acc.name
        }else{
            return current.name;
        }
    });
    return youngest;
};

var averageBalance = (array, output=0) => {
    let sum = array.filter(function(customer){
        output += customer.balance / array.length });
    return output;
};

var firstLetterCount = (array, letter) => { 
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i].name.charAt(0).toUpperCase() === letter || array[i].name.charAt(0).toLowerCase() === letter){
            count += count + 1;
        }
    }
    return count;
};

var friendFirstLetterCount = (array, name, letter) => {
    let friendsIn = array.filter((person) => person.name.friend.name.charAt(0).toUpperCase() === letter || 
    person.name.friend.name.charAt(0).toLowerCase() === letter);
    
    return friendsIn.length;
};

var friendsCount = (array, name) => {
  const frand = array._.filter(name => array.name.friend);
  return frand;
};

var topThreeTags = function(array){

};

var genderCount = function(array){
    let males = _.filter(array, (customer) => customer.gender === 'male');
    let females = _.filter(array, (customer) => customer.gender === 'female');
    let nonbinary = _.filter(array, (customer) => customer.gender === 'non-binary');
    return { men: males.length, women: females.length, thebest: nonbinary.length }
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
