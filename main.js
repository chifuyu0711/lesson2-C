// JavaScript 2 dz C


 let a = +prompt('Введите первое число');
 let b = +prompt('Введите второе число');
 let c = +prompt('Введите третье число');


 if( a > b && a < c || a > c && a < b ){
     alert(a + ' Среднее число');
 }else if ( b > a && b < c || b > c && b < a ){
         alert(b + ' Среднее число');
 }else if ( c > a && c < b || c > b && c < a ){
     alert(c + ' Среднее число');
 }else {
     alert('Что-то пошло не так')
 }