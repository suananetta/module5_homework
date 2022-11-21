let num = +prompt('Введите число:');

if (num%2 == 0 && typeof(num) == 'number' && isNaN(num) == false) {
    console.log('Введено четное число')
    } else if (num%2 !== 0 && typeof(num) == 'number' && isNaN(num) == false) {
    console.log('Введено нечетное число')
    } else if (typeof(num) !== 'number' || isNaN(num) == true) {
    alert('Упс, кажется, вы ошиблись')
};


