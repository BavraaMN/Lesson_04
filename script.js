
         
  



      const producnameconst = prompt("Наименование товара?", "");
      console.log('Наименование товара?: ', producnameconst);


      const totalproductcountconst = prompt("Количество товара (должен только цифры)?", "");
      console.log('Количество товара ?: ', totalproductcountconst);

      const productcategoryconst = prompt("Категория товара?", "");
      console.log('Категория товара?: ', productcategoryconst);


      const productcostconst = prompt("Цена товара ? (должен только цифры) ?", "");
      console.log('Цена товара ?: ', productcostconst);


      if (isNaN(totalproductcountconst))
      {
         console.log('Количество товара Вы ввели некорректные данные')
      }      
         else    if (isNaN(productcostconst))
      {
         console.log('Цена товара Вы ввели некорректные данные')
      }      
     

  