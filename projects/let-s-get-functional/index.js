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
    let oldest = _.reduce(array, function(acc, current){
        if(acc < current.age){
            
            return current.name;
        } else{
            return acc;
        }
        
    });
    return oldest;
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

var averageBalance = (array) => {
    let balance = 0;
    let sum = _.filter(array, (customer) => balance += customer.balance /array.length );
return sum;

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
    let count = 0;
for(let i = 0; i < array.length; i++){
    if(name[i].friend.name.charAt(0).toUpperCase() === letter || name[i].friend.name.charAt(0).toLowerCase() === letter){
        count += count +1;
    }
}
    return count;
};

var friendsCount = (array, name) => {
let newArray = [];
for(let i = 0; i < array.length; i++){
    if(array[i] === name){
        let x = array[i].name.friends;
        newArray.push(x);
    }
}
return newArray;
};

var topThreeTags;

var genderCount;

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
