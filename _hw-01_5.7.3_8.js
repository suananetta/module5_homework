
let arr = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3'],
    ['key4', 'value4'],
    ['key5', 'value5']
]);

for (let key of arr.keys()) {
    console.log(`Ключ - ${key}, значение - ${arr.get(key)}`)
}

