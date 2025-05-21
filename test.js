// Question 1:  Write  a Function That returns a reverse of a String

// method 1

function  ReverseString(str){
    let reverse = ''

    for (let i = str.length-1 ;i >=0 ;i--){
       reverse += str[i]
    }
    return reverse
}

console.log(ReverseString('My name is Atharva'))

// Method 2

function ReverseString2(str) {
    return str.split('').reverse().join("")
    
}

console.log(ReverseString2('My name is Atharva'));  

// -------------------------------------------------------------------------------------------------

// Question 2: Write a function that returns the longest word in the sentence.

function LongestWord(str){

    const words = str.split(' ');
    let longestword = "";
    
    for (let word of words) {
        
        if( word.length > longestword.length){
            longestword = word
        }
    }
    return longestword
}

console.log(LongestWord('My name is Ganorkar Atharva'));

// -----------------------------------------------------------------------------------------------------------------

// Question 3: Check whether the string is palandrome or not.

function IsPalandrome(str) {
  const ReverseWord = str.split('').reverse().join("");
  
  return str === ReverseWord?"Palandrome":"Not a Palandrome"
}

console.log(IsPalandrome('racecar'));

// ------------------------------------------------------------------------------------------

// Question 4: Write a function to remove duplicate elements from an array.


// Method 1
function UniqueElement(arr) {
    
    let Unique = []

    for (let i = 0; i < arr.length; i++) {
        if( !Unique.includes(arr[i])){
            Unique.push(arr[i])
        }
    }
    return Unique
}

console.log(UniqueElement([1,2,2,3,3,1,4,5,3,5,6]));


// Method 2
function UniqueElement2(arr) {
    return [...new Set(arr)]
}

console.log(UniqueElement2([1,2,2,3,3,1,4,5,3,5,6]));

// ---------------------------------------------------------------------------------------------------------------------------------------------

// Question 5: Write a function that checks if two strings are anagrams are not.

function CheckAnagram(str1,atr2) {
    let Sort_Str1 = str1.split('').sort().join();
    let Sort_Str2 = str2.split('').sort().join();

    if (Sort_Str1 === Sort_Str2) {
        return "It is Anagram";
    }else{
        return "Not an Anagram";
    }
    
}

str1 = "listen"
str2 = "silent"

console.log(CheckAnagram(str1,str2));

// -----------------------------------------------------------------------------------------------------------------------------

// Question 6: Write a function that returns the numbers of vowels in the string.

function CountVowels(str) {
    const Vowels = ['a','e','i','o','u']
    let count = 0

    for (let char of str.toLowerCase()) {
        if (Vowels.includes(char)) {
            count++
        }
    }
    return count
}

console.log(CountVowels('aeiou'));

// ------------------------------------------------------------------------------------------------------------------------

// Question 7: Write a function to find the largest number in an array.

function LargestNumber(arr) {
    let largest = arr[0]

    for (let i = 1; i< arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i]
      }
    }
    return largest
}

console.log(LargestNumber([1,2,4,5,8,10,52,6]));

// ----------------------------------------------------------------------------------------------------------------------------------

// Question 8: Check if the number is prime or not.

function isPrime(number) {
  if (number <= 1) return false; // 0 and 1 are not prime numbers

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false; // divisible by some number other than 1 and itself
    }
  }

  return true;
}

console.log(isPrime(10));

// ----------------------------------------------------------------------------------------------------------------------------------------------

// Question 9: Write a function to calculate a factorial of a number.

function factorial(num) {
    
    if (num === 0) {
        return 1
    }
   
    let fac = 1

    for (let i = 1; i <= num ; i++) {
       fac = fac * i  
    }
    return fac;
}

console.log(factorial(5));

// -----------------------------------------------------------------------------------------------------------------------------------------------------

// Question 10: JavaScript Function to Remove White Spaces

function removeWhiteSpaces(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

// Example usage:
const input = "  Hello   World  ";
const output = removeWhiteSpaces(input);
console.log(output); // Output: "HelloWorld"

// ---------------------------------------------------------------------------------------------------------------------------

// Question 11:  