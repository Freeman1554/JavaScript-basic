let FUllName= 'Agu Michael Uche'
console.log(FUllName);

let x= 6;
let y= 4;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);


function CToF(celsius){
const Fahrenheit= ((celsius*9)/5+32);
console.log(Fahrenheit)
}
CToF(30);



function AreaOfRectangle(L, W){
console.log(L*W)
}
 AreaOfRectangle(6 , 4);

 //Write code that checks if a number is even or odd and displays the result

 let number= 5;

 let remaindervalue = (number % 2);

 if(remaindervalue == 0){
    console.log('number even');
 }
 else{
    console.log('This is odd number');
 }

// Create a program that determines if a year entered is a leap year.
const Year1 = 365;
const Year2 = 366;
if (Year1 < 366 && Year2 >= 365){
    console.log('This is a leap year');
}else{
    console.log('This is not a leap year');
}

//Write a function that returns the reverse of a string input.

function reversestring(str){
console.log(str.split('').reverse().join(''));
}
reversestring('str');

//Create a function that counts the number of vowels in a string.
// 
function countVowels(str){
    console.log(str.match(/[aeiou]/gi).length);
}

countVowels("Administrative roles");

//Write a program that finds the largest number in an array of 5 numbers.
const numbers = [78, 30, 67, 50, 99];
console.log(Math.max(...numbers));

//Create a function that checks if a string is a palindrome.

function Ispalindrome(str){
    const reversed = big
    .split('')
    .reversed()
    .join('')
    return str ===reversed
    console.log(Ispalindrome)
}
//Create a function that generates a random number between two given values.

function Factorial(n){
    let result = 1
    for(let I=2; I<n; I++){
        result=result*I
    }
    return result
}
console.log(Factorial(0));
console.log(Factorial(1));
console.log(Factorial(5));

//Write a program that converts a number of seconds into hours, minutes, and seconds.


    function convertSeconds(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
    
        return {
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }
    
    const inputSeconds = 3672;
    const result = convertSeconds(inputSeconds);
    
    console.log(`${inputSeconds} seconds = ${result.hours} hour(s), ${result.minutes} minute(s), and ${result.seconds} second(s).`);
    

//Write a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
}
const input = ('i love javascript so much')
const output = capitalizeWords(input);
console.log(output)
        

//Create a program that checks if a number is prime.

   function Prime(n){
    if(n<=1){
    console.log('N IS A PRIME NUMBER');
    }
    else {
    console.log('N IS NOT A PRIME NUMBER');
       }
    }
    
 
 Prime(1);


function findAverage(arr) {
    if (arr.length === 0) return 0; 

    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const average = sum / arr.length;

    return average;
}
const nums = [10, 20, 30, 40, 50];
console.log("Average:", findAverage(numbers));


//Create a function that removes duplicate values from an array.

function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  const object = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = removeDuplicates(object);
console.log(uniqueNumbers); 

//Write a program that counts down from 10 to 1, then displays "Blast off!".
let countdown = 10;

const intervalId = setInterval(() => {
  if (countdown > 0) {
    console.log(countdown);
    countdown--;
  } else {
    console.log("Blast off!");
    clearInterval(intervalId); 
  }
}, 1000); 

//Create a function that determines if a string contains only numbers.
function isNumeric(str) {
    return /^[0-9]+$/.test(str);
  }
  console.log(isNumeric("12345"));  
console.log(isNumeric("12a45"));    
console.log(isNumeric(""));         
console.log(isNumeric(" 12345 ")); 

//Write code that finds the second smallest number in an array.
function findSecondSmallest(arr) {
    if (arr.length < 2) {
        return null; // Not enough elements
    }

    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num > smallest && num < secondSmallest) {
            secondSmallest = num;
        }
    }

    return (secondSmallest !== Infinity) ? secondSmallest : null;
}

// Example usage:
const num = [5, 2, 9, 1, 7];
console.log(findSecondSmallest(numbers)); 

//Create a program that displays the multiplication table for a given number.

        function generateTable() {
            const number = document.getElementById("number").value;
            const tableNumber = document.getElementById("tableNumber");
            tableNumber.textContent = number;

            const table = document.getElementById("multiplicationTable");
            table.innerHTML = ""; // Clear previous table

            if (number && number > 0) {
                for (let i = 1; i <= 10; i++) {
                    let row = table.insertRow();
                    let cell1 = row.insertCell(0);
                    let cell2 = row.insertCell(1);
                    let cell3 = row.insertCell(2);
                    cell1.textContent = `${number} x ${i}`;
                    cell2.textContent = "=";
                    cell3.textContent = number * i;
                }
            } else {
                alert("378");
            }
        }

//Write a function that validates if a password meets specific criteria (at least 8 characters, one uppercase, one lowercase, one number)


function validatePassword(password) {
    const lengthCheck = password.length >= 8;

    const uppercaseCheck = /[A-Z]/.test(password);

    const lowercaseCheck = /[a-z]/.test(password);

    const numberCheck = /\d/.test(password);

    return lengthCheck && uppercaseCheck && lowercaseCheck && numberCheck;
}


console.log(validatePassword("Password123"));  
console.log(validatePassword("pass"));         
console.log(validatePassword("Password"));     
console.log(validatePassword("12345678"));     

//Create code that simulates a simple calculator with basic operations.

        function appendOperator(op) {
            if (currentInput === '') return; // Do nothing if there's no number to operate on
            if (previousInput !== '') {
                calculate(); // Calculate previous operation if it's pending
            }
            operator = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function calculate() {
            if (operator === null || currentInput === '' || previousInput === '') return;
            let result;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);

            switch (operator) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    if (current === 0) {
                        result = 'Error';
                    } else {
                        result = prev / current;
                    }
                    break;
                default:
                    return;
            }

            currentInput = result.toString();
            operator = null;
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            operator = null;
            updateDisplay();
        }

        function updateDisplay() {
            document.getElementById('display').value = currentInput;
        }

//Write a program that finds all factors of a given number.
function findFactors(number) {
    let factors = [];
    
    // Loop from 1 to the given number
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) { // If the number is divisible by i, it's a factor
            factors.push(i);
        }
    }
    
    return factors;
}


let nuu = 36; 
let factors = findFactors(nuu);
console.log(`Factors of ${nuu} are: ${factors.join(', ')}`);

//Create a function that checks if two strings are anagrams.

function areAnagrams(str1, str2) {
    str1 = str1.replace(/\s+/g, '').toLowerCase();
    str2 = str2.replace(/\s+/g, '').toLowerCase();

    if (str1.length !== str2.length) {
        return false;
    }

    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}


console.log(areAnagrams('listen', 'silent')); 
console.log(areAnagrams('hello', 'world'));  

//Write a program that generates the Fibonacci sequence up to n terms.
function generateFibonacci(n) {
    
    let fib = [];

    
    fib[0] = 0;
    fib[1] = 1;

    
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    
    return fib;
}

let n = 10; 
let fibonacciSequence = generateFibonacci(n);
console.log(fibonacciSequence);

//Create code that sorts an array of numbers without using the built-in sort method.


function bubbleSort(arr) {
    let n = arr.length;
    
  
    for (let i = 0; i < n - 1; i++) {
  
        let swapped = false;
        
  
        for (let j = 0; j < n - 1 - i; j++) {
  
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
          if (!swapped) {
            break;
        }
    }
    
    return arr;
}

let nubers = [5, 3, 8, 4, 2];
console.log(bubbleSort(nubers)); 


//Write a function that counts how many times a specific element appears in an array.

function countOccurrences(array, element) {
    return array.filter(item => item === element).length;
  }
const myArray = [1, 2, 3, 1, 4, 1, 5];
const results = countOccurrences(myArray, 1);
console.log(results);

//Create a shopping cart program where users can add items, remove items, and calculate the total price.

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';

    let total = 0;
    cart.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <span>${item.name} - $${item.price.toFixed(2)}</span>
            <button onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    
    document.getElementById('total-price').innerText = total.toFixed(2);
}

  