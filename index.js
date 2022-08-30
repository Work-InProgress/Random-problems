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





