const rain=(Math.random() > 0.5)?console.log("Пошёл дождь. Возьмите зонт!"):console.log("Дождя нет!!");


const mathconst = prompt("Введите кол-во баллов по математике", "");
console.log('Введите кол-во баллов по математике ?', mathconst);


const russianconst = prompt("Введите кол-во баллов по русскому языку", "");
console.log('Введите кол-во баллов по русскому языку ?: ', russianconst);

const itconst = prompt("Введите кол-во баллов по информатике", "");
console.log('Введите кол-во баллов по информатике ?: ', itconst);

mathconst+russianconst+itconst>255?console.log('Поздравляю, вы поступили на бюджет!'):console.log('Вам не получилась')
