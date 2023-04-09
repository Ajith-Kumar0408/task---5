1. Write the code for below programs in Anonymous function & IIFE:

a) Print odd numbers in an Array.

var arr=[1,2,3,12,9,8,10,11,15,17,18,20,21];
var temp=[];

Anonymous:

  var res=function(arr)
  {
    for (var i=0;i<arr.length;i++)
    {
        if(arr[i] % 2!== 0)
        {
            temp.push(arr[i]);   
        }
    }
    return temp;    
  }
  
  console.log(res(arr));

IIFE:

  (function odd(arr)
  {
    for (var i=0;i<arr.length;i++)
    {
        if(arr[i] % 2!== 0)
        {
            temp.push(arr[i]);   
        }
    }
    console.log(temp);    
  })(arr);

c
b) Convert all the Strings to title caps in a string array.

Anonymous:

var upp=function(amr)
{
  var string=amr.toLowerCase().split(" ");
  for(var i=0;i<string.length;i++)
  {
   string[i]= string[i].charAt(0).toUpperCase()+string[i].slice(1);
  }
  return string.join(" ");
}

console.log(upp("guvi geeks training"));


IIFE:

(function upp(str)
{
  var string=str.toLowerCase().split(" ");
  for(var i=0;i<string.length;i++)
  {
   string[i]= string[i].charAt(0).toUpperCase()+string[i].slice(1);
  }
  console.log(string.join(" "));
})("guvi geeks training");

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*--


	
c) Sum of all numbers in an array.

var arr=[1,5,6,15,8,12,3];
var sum=0;

Anonymous:
  
    var res= function(arr)
    {
        for(var i=0;i<arr.length;i++)	
        {
            sum = sum+arr[i];
        }
    return sum;    
    }
  
  console.log(res(arr));

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-


IIFE:

    (function res(arr)
    {
        for(var i=0;i<arr.length;i++)
        {
            sum = sum+arr[i];
        }
    console.log(sum);    
    })(arr);

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

d) Return all prime numbers in an array:

var num = [3,5,8,13,15,20,6];
var result = [];

Anonymous & IIFE:

var prime=function(num) 
{
  if(num < 2) return false;

  for (let k = 2; k < num; k++)
  {
    if(num % k == 0)
    {
      return false;
    }
  }
  return true;
}
num.forEach(function (element) 
{
  const item = prime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-

e) Return all the palindromes in an array:

Anonymous:

var arr=[1,2,3,4,4,3,2,1];

var palindromeArray = function (arr) 
{
     var result = true;
     for(let i = 0; i < arr.length / 2; i++)
     {
         if(arr[i] !== arr[arr.length - i - 1])
         {
           result = false; 
           break;
         }
     }
     
     return result;
}
console.log(palindromeArray(arr));

-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*


IIFE:

var arr=[1,2,3,4,4,3,2,1];

(function palindrome(arr) 
{
     var result = true;
     for(let i = 0; i < arr.length / 2; i++)
     {
         if(arr[i] !== arr[arr.length - i - 1])
         {
           result = false; 
           break;
         }
     }
     console.log(result);
})(arr);
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

f) Return median of two sorted arrays of the same size.

var arr1 = [1, 12, 15, 26, 38, 40];
var arr2 = [2, 13, 17, 30, 45, 19];

Anonymous:

var median = function (a, b) 
{
    var c = [...a, ...b].sort((a, b) => a - b);     //combining and Sorting the array
    var half = c.length / 2 | 0;
    if (c.length % 2) 
    {
    return c[half];		
    }
    else
    { 
    return (c[half] + c[half - 1]) / 2;
    }
}

console.log(median(arr1, arr2));

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-

IIFE:

(function median(a, b) 
{
    var c = [...a, ...b].sort((a, b) => a - b);     //combining and Sorting the array
    var half = c.length / 2 | 0;
    if (c.length % 2) 
    {
      console.log(c[half]);
    }
    else
    {
    console.log((c[half] + c[half - 1]) / 2);
    }
})(arr1, arr2);

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*

g) Remove duplicates in an Array:

var arr=[1,5,7,5,55,36,7,9];

Anonymous:

var res=function(arr)
{
var result=[... new Set(arr)];
return result;
}

console.log(res(arr));

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

IIFE:

(function res(arr)
{
var result=[... new Set(arr)];
console.log(result);
})(arr);  

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

h) Rotate an array by k times:

var arr=[1,3,5,7,8,9];
var n=7;
var k=arr.length;

Anonymous:

var rotate = function(arr, n)
{
  n=n % k;
  for(var i=0;i<n;i++)
  {
   arr.unshift(arr[k-1]); // adds one or more elements to the beginning of the array.
   arr.pop(arr[k-1]);	  // removes the last element of the array.
  }  
return arr;
};

console.log(rotate(arr,n));

-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-

IIFE:

(function rotate(arr,n)
{
  n=n % k;
  for(var i=0;i<n;i++)
  {
   arr.unshift(arr[k-1]);
   arr.pop(arr[k-1]);	 
  }  
console.log(arr);
})(arr,n);
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*   
2. Programs in arrow functions:

a) Print odd numbers in an Array.

var arr=[1,5,15,18,12,21];
var temp=[];

  var res= (arr) =>
  {
    for (var i=0;i<arr.length;i++)
    {
        if(arr[i] % 2!== 0)
        {
            temp.push(arr[i]);   
        }
    }
    return temp;    
  };
  
  console.log(res(arr));
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-

b) Convert all the strings to title caps in a string array

var upp = (str) =>
{
  var string=str.toLowerCase().split(" ");
  for(var i=0;i<string.length;i++)
  {
   string[i]= string[i].charAt(0).toUpperCase()+string[i].slice(1);
  }
  return string.join(" ");
}

console.log(upp("guvi geeks training"));
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-
c) Sum of all numbers in an array:

var arr=[1,5,6,15,8,12,3];
var sum=0;
    var res= (arr) =>
    {
        for(var i=0;i<arr.length;i++)
        {
            sum = sum+arr[i];
        }
    return sum;    
    }
  
  console.log(res(arr));
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-

d) Return all the prime numbers in an array:

var num = [3,5,8,13,15,20,6];
var result = [];

var prime = (num) => 
{
  if(num < 2) return false;

  for (let k = 2; k < num; k++)
  {
    if(num % k == 0)
    {
      return false;
    }
  }
  return true;
}
num.forEach(function (element) 
{
  const item = prime(element);
  if (item) {
    result.push(element);
  }
});
console.log(result);
-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--*-*-*-*-*-*-*-

e) Return all the palindromes in an array

var arr=[1,2,5,3,2,1];

var palindromearray = (arr) => 
{
     var result = true;
     for(let i = 0; i < arr.length / 2; i++)
     {
         if(arr[i] !== arr[arr.length - i - 1])
         {
           result = false; 
           break;
         }
     }
     
     return result;
}
console.log(palindromearray(arr));