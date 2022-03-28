const howmuchmoney = prompt("Выводите доход ", "");

Number(howmuchmoney)>50000? (console.log("Ваш налог "+(Number(howmuchmoney)*0.3))) : (Number(howmuchmoney)>15000? (console.log("Ваш налог "+(Number(howmuchmoney))*0.2)):console.log("Ваш налог "+Number(howmuchmoney)*0.13))