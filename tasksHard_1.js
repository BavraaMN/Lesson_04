const howmuchmoney_ = prompt("Выводите доход ", "");
Number(howmuchmoney_) % 100 > 0? console.log('не можем выдавать'):console.log('можем выдавать');