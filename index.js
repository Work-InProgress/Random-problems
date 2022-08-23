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