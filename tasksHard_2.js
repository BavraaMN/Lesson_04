const howmuchmoney2 = prompt("Выводите доход ", "");
Number(howmuchmoney2) % 100 > 0? console.log('не можем выдавать'):console.log('можем выдавать');

var howmuchmoney=16000;
Number(howmuchmoney)>50000? (console.log("Ваш налог "+(Number(howmuchmoney)-50000)*0.3)) : (Number(howmuchmoney)>15000? (console.log("Ваш налог "+(Number(howmuchmoney)-15000)*0.2)):console.log("Ваш налог "+Number(howmuchmoney)*0.13))
