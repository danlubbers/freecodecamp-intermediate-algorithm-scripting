 // 1. Sum All Numbers in a Range

function sumAll(arr) {
    // Sort from least to greatest 
    let sorted = arr.sort(function(a,b) {return a-b});
    console.log(sorted);

    // Add all the numbers between the two values
    let newArr = [];
    for (let i = sorted[0]; i <= sorted[1]; i++) {
        newArr.push(i)
    }
    console.log(newArr)

    // Sum the values
    let sum = newArr.reduce((acc, val) => acc + val);
    
    return sum;
  }
  
  console.log(sumAll([1, 4]));
  console.log(sumAll([10, 5]));

// 2. Diff Two Arrays

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    newArr = arr1.concat(arr2).filter(val => {
        if(arr1.includes(val) && arr2.includes(val)) {
            return false;
        } else {
            return val;
        }
    })
    return newArr
}
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
  console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // should return ["pink wool"]

// 3. Seek and Destroy

function destroyer(arr) {
    console.log(arr)
    // This turns the arguments into part of the array
    let args = Array.prototype.slice.call(arguments);
    console.log(args);
    // Use a for loop to iterate through arr
    for (let i = 0; i < arr.length; i++) {
        // Use a nested for loop to ieterate through args
        for (let j = 0; j < args.length; j++) {
            // If statement to check if current val of arr is equal to args, if so delete it.
            if (arr[i] === args[j]) {
                console.log(arr[i])
                delete arr[i]
            }
        }
    }
    // Use the filter function using Boolean to get rid of any nulls in array created by the delete function
    return arr.filter(Boolean);
  }
  
  console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
  console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // should return ["hamburger"]

// 4. Wherefore art thou

function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line
  let srcKeys = Object.keys(source);
  console.log(srcKeys)

  return collection.filter(obj => {
      return srcKeys.map(key => {
          return obj[key] === source[key]; // can use obj.hasOwnProperty(key) && but not necessary
      })
      .reduce((a, b) => a && b);
  });
    
    // Only change code above this line
  }
  
  console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));

// 5. Spinal Tap Case

function spinalCase(str) {
    // Create a variable for the white space and underscores
    //  's' is white space and '_' is underscore and '+' is one or more
    let regex = /\s+|_+/g;

    // replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // replace space and underscore with -
    return str.replace(regex, '-').toLowerCase();
  }
  
  console.log(spinalCase('This Is Spinal Tap'));
  console.log(spinalCase("thisIsSpinalTap"));

// 6. Pig Latin

function translatePigLatin(str) {
    // add regex variable of vowels
    const vowels = /[aeiou]/gi;
    let firstWord = str[0];
    let newStr = '';

    // if the string does not match any vowels, just add 'ay' to the end.
    if(!str.match(vowels)) {
        return str + 'ay';
    // if the first letter is a vowel, just add 'way' to the end.
    } else if(firstWord.match(vowels)) {
        newStr = str + 'way'
    // if the first 
    } else {
        // this variable find the index of the first vowel
        let indexOfVowel = str.indexOf(str.match(vowels)[0]);
        console.log(indexOfVowel);
        // the first substring removes the first letter, the second substr places that removed letter at the end, then you just concatonate 'ay' to the end.
        newStr = str.substr(indexOfVowel) + str.substr(0, indexOfVowel) + 'ay';
    }
    return newStr;    
}
  
// first if statement
console.log(translatePigLatin("psst"));
// else if statement
console.log(translatePigLatin("eight"));
// else statement
console.log(translatePigLatin("consonant"));

// 7. Search and Replace

function myReplace(str, before, after) {
    // find index where before is on the str
   let index = str.indexOf(before);
   console.log(index);

    // Checks if first letter is UpperCase
   if(str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized 
    after = after.charAt(0).toUpperCase() + after.slice(1)
    }
    // Replaces the original string with the edited one
    str = str.replace(before, after)
  
    return str;
  }
  
  console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
  console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

// 8. DNA Pairing

function pairElement(str) {
    // split and map over each element
  return str.split('').map(e => {
    // use switch to check each element and return what is needed
      switch (e) {
        case 'G':
            return ['G', 'C'];
        case 'C':
            return ['C', 'G'];
        case 'A':
            return ['A', 'T'];
        case 'T':
            return ['T', 'A'];
        }
    });
}
  
  console.log(pairElement("GCG"));

// 9. Missing Letters

function fearNotLetter(str) {
// split and store in arr variable
 let arr = str.split('');
//  map over the letters in arr and set the ascii numbers to each with charCodeAt
 let ascii = arr.map(e => e.charCodeAt(0))   
//  console.log(ascii)
    // loop over each ascii number from the provided argument 
    for (let i = 0; i <= ascii.length; i++) {
        console.log(ascii[i]);
        console.log(ascii[i-1]+1);
        // if the number is greater 
        if(ascii[i] > ascii[i-1]+1) {
            console.log(ascii[i]-1)
            // turns the ascii number back into the letter
            return String.fromCharCode(ascii[i] - 1)
        }
    }
    return str;
  }
  
  console.log(fearNotLetter("abce"));
//   console.log(fearNotLetter("abcdefghjklmno"));