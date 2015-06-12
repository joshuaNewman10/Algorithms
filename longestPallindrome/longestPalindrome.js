/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/

// Explore problem 
// 1) Input str
//    Ouput the longest pallindrone (string) or -1

// Edge Cases
//   White spaces are valid
//   Empty string
//   Palindrone is in the middle
//   Whole string is a pallindrone
//   Palindrone is one letter

// High Level Approach
//   Look for all pallidronesof length=length
//     Start at index 0 
//   Look for all pallindrones of length=length-1
//   If find a pallindrone at any point thats the largest so return

//PsuedoCode
//loop over length of string from n to 0
//grab all words of length n
    //check to see if one is palindrome
    //if so return that string
      //done
    //else go to next length


var isPalindrome = function(str) {
  var strArr = str.split('');
  var revStrArr = strArr.slice().reverse();
  return strArr.join('') === revStrArr.join('');
};

var wordsOfLengthN = function(strArr, n) {
   var words = [];
   for(var i=0; i<=strArr.length-n; i++) {
    words.push(strArr.slice(i, i+n).join(''));
   }
   return words;
};

var longestPalindrome = function (str) {
  var strArr = str.split('');
  for(var j=strArr.length; j>=1; j--) {
    var wordsN = wordsOfLengthN(strArr, j);
    for(var i=0; i<wordsN.length; i++) {
      if( isPalindrome(wordsN[i]) ) {
        return {length: j, word: wordsN[i]};
      }
    }
  }    
    return '';
};

// console.log(isPalindrome('racecar'));
// console.log(wordsOfLengthN('hello', 2));
// console.log(longestPalindrome('My dad is a racecar athlete'));