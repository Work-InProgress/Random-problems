//Pangram string checker

// The quick brown fox jumps over a lazy dog

function checkPangram(str) {
    const arr = new Array(26).fill(false);

    let index;

    for (let i = 0; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            index = str.charCodeAt(i) - 'A'.charCodeAt(0);
        } else if (str[i] >= 'a' && str[i] <= 'z') {
            index = str.charCodeAt(i) - 'a'.charCodeAt(0);
        }
        else continue;

        arr[index] = true
    }

    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] === false) return false
    }

    return true
}

const result = checkPangram('Jock nymphs waqf drug vex blitz')
console.log(result)


// convert 12 hr to 24 hr
// 01: 02 PM

const convert12To24 = time12h => {

    const [time, modifier] = time12h.split(' ');

    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'PM') {
        hours = parseInt(hours) + 12
    }

    return `${hours}:${minutes}`
}

console.log(convert12To24('01:02 PM'))
console.log(convert12To24('04:06 PM'))
console.log(convert12To24('12:02 PM'))
console.log(convert12To24('12:37 AM'))

//map vs forEach

const arr = [1, 3, 4, 8, 16]

const mapResult = arr.map(num => {
    return num + 2
}) //can chain other methods for array 

const forEachResult = arr.forEach(num => {
    return num + 2
})

console.log(mapResult, forEachResult)


//Caching/memoize a function

function myMemoize(fn, context) {
    const res = {};
    return (...args) => {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args)
        }
        return res[argsCache]

    }
}

const badProduct = (num1, num2) => {
    for (let i = 1; i <= 100000000; i++) {
    }
    return num1 * num2
}

const memoizedBadProduct = myMemoize(badProduct)

console.time('First call');
console.log(memoizedBadProduct(9432, 6542))
console.timeEnd('First call')

console.time('Second call');
console.log(memoizedBadProduct(9432, 6542))
console.timeEnd('Second call')


//Infinite currying

function add(a) {
    return function (b) {
        if (b) return add(a + b);
        return a;
    };
}

console.log(add(5)(2)(4)(8)());

//Explicit Binding, call, bind, apply
//call
var obj = { name: 'Alex' };

function sayHello(age) {
    return 'Hello ' + this.name + ' is ' + age
}

console.log(sayHello.call(obj, 24))

//apply

function sayGreeting(age, profession) {
    return 'Hello ' + this.name + ' is ' + age + 'and he is a ' + profession
}

console.log(sayGreeting.apply(obj, [28, 'Web developer']))

// bind 
function sayRegards(age, profession) {
    return 'Hello ' + this.name + ' is ' + age + ' and he is a ' + profession
}

const bindFunc = sayRegards.bind(obj)
console.log(bindFunc(29, 'Web developer'))

//Private variable

function secretVariable() {
    var private = 'Secret code'
    return function () {
        return private
    }
}

const getPrivateVariable = secretVariable()

console.log(getPrivateVariable())

//What is the output

var num = 4
function outer() {
    var num = 2
    function inner() {
        num++
        var num = 3
        console.log(num)
    }
    inner()
}

outer()

//Audemic inte4rview, check for correct passwords

function getCount(character, str) {
    let count = 0
    const arr = str.split('')

    arr.forEach(char => {
        if (char == character) {
            count++
        }
    })
    return count
}

const checkRange = (number, start, end) => {

    if (number >= start && number <= end) {
        return true
    } else {
        return false
    }

}

// console.log(checkRange(getCount(charToTest, stringToTest), startNum, endNum))


let data = require("fs").readFileSync("data.CSV", "utf8")

console.log(typeof (data))

let fullData = data.split('\n')

console.log(fullData)

let countOfResults = 0
fullData.forEach(eachPassword => {
    let example1 = eachPassword
    let arrExample = example1.split(' ')

    console.log(arrExample)

    let arrOfNumbers = arrExample[0].split('-')
    console.log(arrOfNumbers)

    let charToTest = arrExample[1][0]

    console.log(charToTest)

    let stringToTest = arrExample[2]

    let startNum = Number(arrOfNumbers[0])

    let endNum = Number(arrOfNumbers[1])
    if (checkRange(getCount(charToTest, stringToTest), startNum, endNum) == true) {
        countOfResults++
    }
    console.log(countOfResults)
})


//Return nth number of Fib sequence.

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];

};

//gridTraveler

const gridTraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === n && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
    return memo[key]
};
