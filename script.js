
         
  

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
         console.log('Количество товара только цифры надо')
      }      
         else    if (isNaN(productcostconst))
      {
         console.log('Цена товара только цифры надо')
      }      
      else 
      {                             
       console.log(`На складе ${totalproductcountconst} единицы товара "${producnameconst}" (${productcategoryconst}) на сумму ${totalproductcountconst*productcostconst} деревянных`);
      }

  