var sum = 0;

var count = 0;// общее количество товаров 

// добавление товаров 
function pushTovar1(x,y,img){
count++   // товар доб на один
    // alert(y)
    if(sum==0){
        alert('Товар без скидки ');
        sum =sum + y;
        document.getElementsByClassName('sum')[0].innerHTML = sum;
        document.getElementsByClassName('KorzinaSub')[0].style.display= 'flex';
        document.getElementsByClassName('tovarbody1')[0].innerHTML=document.getElementsByClassName('tovarbody1')[0].innerHTML +'<div class="G1">' + '<img src=" '+img+' ">' + x +' - <span> '+ y +  ' </span> <button class="b1" onclick=clouse4(this,'+y+')>-</button><span class="b4">1</span><button class="b2" onclick="clouse3(this,'+y+')">+</button> <button class="b3" onclick="clouse2(this,'+y+')" data-price ='+y+' title="0">X</button></div>';

    }
    else{
        alert('Товар со скидкой ');
        let procent = y*0.2;
        
        let resutprice = y-procent; 
        sum =sum + resutprice;
        document.getElementsByClassName('sum')[0].innerHTML = sum;
        document.getElementsByClassName('KorzinaSub')[0].style.display= 'flex';
        document.getElementsByClassName('tovarbody1')[0].innerHTML=document.getElementsByClassName('tovarbody1')[0].innerHTML +'<div class="G1">' + '<img src=" '+img+' ">' + x +' - <span> '+ resutprice +  ' </span> <button class="b1" onclick=clouse4(this,'+resutprice+')>-</button><span class="b4">1</span><button class="b2" onclick="clouse3(this,'+resutprice+')">+</button> <button class="b3" onclick="clouse2(this,'+resutprice+')" data-price ='+y+' title="1">X</button></div>';


        alert(resutprice);
    }

   

  

}


function clouse2(mythis,price){
    // alert(sum - price)
    if (count!=2){
        alert('Ничего не делаем');
        let priceoll =  mythis.previousElementSibling.previousElementSibling.innerHTML*price;
        // Это у нас сумма за удаляемый товар с учетом количества . 
        sum = sum - priceoll;
        // удаляем товар из общей суммы 
        document.getElementsByClassName('sum')[0].innerHTML = sum; // перезаписіваем во внешний вид оставшуюся сумму

        mythis.parentNode.remove(); // Удаляем родительский ДИВ нашего товара!
        count--; //удаляем товар один


    }

    else{
        alert('Пора убирать скидку')
        let priceoll =  mythis.previousElementSibling.previousElementSibling.innerHTML*price;
        sum = sum - priceoll;
        document.getElementsByClassName('sum')[0].innerHTML = sum;
        mythis.parentNode.remove();
        count--; //удаляем товар один
        // Обратиться к содержимому корзинки , найти в ней единственный товар.
        
        console.log(document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes)
        let Cheksail = document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes[8].title;

        if (Cheksail=='1'){
           let counttovar = document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes[8].previousElementSibling.previousElementSibling.innerHTML
              alert('Пора пересчитывать скидку!')
              alert(counttovar)
           let pricetovar = document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes[8].dataset.price;
           alert(pricetovar);
           // Добраться до элемента с названием и ценой .Что б перезаписать ему новую цену.
           console.log(document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes[1])
           let finaledata = document.getElementsByClassName('tovarbody1')[0].childNodes[1].childNodes[2];
           console.log(finaledata);
           finaledata.innerHTML = pricetovar
           document.getElementsByClassName('sum')[0].innerHTML = pricetovar * counttovar

           sum = pricetovar*counttovar
        }
        // узнать скидочный товар или нет !!!
    }
    // let priceoll =  mythis.previousElementSibling.previousElementSibling.innerHTML*price;
    // sum = sum - priceoll;
    // document.getElementsByClassName('sum')[0].innerHTML = sum;
    // mythis.parentNode.remove();
    // count--; //удаляем товар один
}

function clouse1(){
    document.getElementsByClassName('KorzinaSub')[0].style.display="none";
// alert('Закрыть?');
}

function clouse3(mythis,y){
 
//  mythis.previousElementSibling.innerHTML++
//  sum = sum + y; 
//  document.getElementsByClassName('sum')[0].innerHTML = sum;
 if(mythis.previousElementSibling.innerHTML<10){
     mythis.previousElementSibling.innerHTML++
     sum = sum + y;
     document.getElementsByClassName('sum')[0].innerHTML = sum;
 }
}

function clouse4(mythis,y){
    // mythis.nextElementSibling.innerHTML--
    // sum = sum - y;
    // document.getElementsByClassName('sum')[0].innerHTML = sum;

    if (mythis.nextElementSibling.innerHTML>1){
        mythis.nextElementSibling.innerHTML--
        sum = sum - y;
        document.getElementsByClassName('sum')[0].innerHTML = sum;


    }
}
// ----------------------------------------------------------------------------
let username = 'Ivan';

localStorage.setItem('username',username)

console.log(localStorage.getItem('username'));

function knop(){
    alert(123);
    let tel = document.getElementById('p1').value
    let tel2 =document.getElementById('p2').value
    let tel3 =document.getElementById('p3').value
    let tel4 =document.getElementById('p4').value
if (tel==""){
    alert('ошибка');
}
else {
    localStorage.setItem('Tovar',document.getElementsByClassName('tovarbody1')[0].innerHTML);
    location.href="order.html";
}

if (tel2==""){
    alert('Ошибка');
}

else{
    localStorage.setItem('Tovar',document.getElementsByClassName('tovarbody1')[0].innerHTML);
    location.href="order.html";
}

if (tel3==""){
    alert('Ошибка');
}

else{
    localStorage.setItem('Tovar',document.getElementsByClassName('tovarbody1')[0].innerHTML);
    location.href="order.html";
}

if (tel4==""){
    alert('Ошибка')
}
else{
    localStorage.setItem('Tovar',document.getElementsByClassName('tovarbody1')[0].innerHTML);
    location.href="order.html";

}








console.log(tel);


localStorage.setItem('tel',tel);
localStorage.setItem('te2',tel2);
localStorage.setItem('te3',tel3);
localStorage.setItem('te4',tel4);
// -----------------------------------






}

// --------------------------------------------------------------------------
// 1. При доб товара в корзину проверить : Если в корзине товары уже есть - тогда этому товару делаем скидку 20% 
// 2. В общую сумму добавить цену этого товара с учетом 20% скидки .
// 3. При удалении сделать так что бы сумма расчитывалась коректно .
// 4. При удалении узнать это последний товар или нет. Если это последний товар - то выяснить скидочный он или нет .
// 5. Если товар скидочный то берем его цену без скидки и перезаписываем в сумму и во внешний вид.
// 6. Обратится к остав блоку с товаром.
// 7. При добоваление товара сделать пометку товара о том что он скидочный или нет!
// 8. - 5. Если товар скидочный то берем его цену без скидки и перезаписываем в сумму и во внешний вид.








