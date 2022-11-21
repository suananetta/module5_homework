let arr = [5, 5, 5, 'sdfsd', 5, 5, 5, 5];

let same = true;

for (let item of arr) {
    if (item != arr[0]) {
        same = false
    }
}

console.log(same);