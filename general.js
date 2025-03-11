//number to words
const units = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const teens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const thousands = ["", "Thousand", "Million", "Billion", "Trillion"];

function numberToWords(num) {
  if (num === 0) return "Zero";

  let words = "";

  function helper(n) {
    let str = "";

    if (n < 10) str = units[n];
    else if (n < 20) str = teens[n - 10];
    else if (n < 100) str = tens[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + units[n % 10] : "");
    else str = units[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + helper(n % 100) : "");
    return str;
  }

  let i = 0;
  while (num > 0) {
    let chunk = num % 1000;
    
    if (chunk) {
      words = helper(chunk) + (thousands[i] ? " " + thousands[i] : "") + (words ? " " + words : "");
    }
    num = Math.floor(num / 1000);
    i++;
  }

  return words;
}


// Compact Object
/**
 * @param {Object|Array}
 * @return {Object|Array}
 */
var compactObject = function (obj) {
  let resultobj = {};
  for (let i in obj) {
    if (Array.isArray(obj[i])) {
      const filRes = obj[i].filter((v) => {
        if (v !== false || v !== null || v !== 0) {
          return v;
        }
      });

      resultobj[i] = filRes;
    } else {
      if (obj[i] !== false && obj[i] !== null && obj[i] !== 0) {
        resultobj[i] = obj[i];
      }
    }
  }
  return resultobj;
};

const object = {
  a: 0,
  b: [4, null, false, 1],
  c: [null, 58],
  ss: null,
};



//find vowel form string

const findVowel=(str="")=>{
  const result={
    count:0,
    chart:[]
  }
  const vowel=["a","e","i","o","u"];

  for (let i = 0; i < str.length; i++) {
    if(vowel.includes(str[i])){
      result.chart=[...result.chart,str[i]]
      result.count++
    }

  }
  return result;
}


const merge2darray = (lists) => {
    const sortArr = [];
    for (let i = 0; i < lists.length; i++) {
      for (let j = 0; j < lists[i].length; j++) {
        sortArr.push(lists[i][j]);
      }
    }
    const sorted = sortArr.sort((a, b) => {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    });
  
    return sorted;
  };


  
const arrayFlatwithNtimes= (arr, n=0) => {
    const newItem = [];
    for (let i = 0; i < arr.length; i++) {
      nesArr(arr[i], 0);
    }
  
    function nesArr(item, depth) {
      if (Array.isArray(item) && depth < n) {
        for (let i = 0; i < item.length; i++) {
          nesArr(item[i], depth + 1);
        }
      } else {
        newItem.push(item);
      }
    }

    return newItem
  };

  console.log(arrayFlatwithNtimes([[[[[2]]]]],5))