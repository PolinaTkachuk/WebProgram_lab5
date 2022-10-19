let buttonElem = document.querySelectorAll('.button');/* при клике на кнопку открытие попапа */
const All_ = document.querySelector('.content');/*чтоб затемнять все*/ 
const newsText1 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, alias </br>';
const newsText2 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam hic, ipsa, ullam, cupiditate eveniet at voluptate corrupti commodi nobis ratione voluptatem! Vel animi totam cupiditate doloribus ad ab exercitationem officia eveniet impedit? Deleniti quasi nisi consectetur perspiciatis quibusdam nostrum, enim perferendis nam, magni molestias recusandae id libero vitae, repudiandae praesentium.'

buttonElem.forEach((el) => {//проходим по каждой кнопки 
  let news = document.querySelectorAll('.news');//получаем заголовки Новость№1,2,3 из селекторов news - у каждой кнопки свой
  el.addEventListener("click", function(event){//при клике на кнопку

    if(event.target.closest('.button')){
      const popup = document.querySelector('.popup');//работаем с окном
      popup.classList.add('_visible');//добавляем ему видимость при клике на книпку

      //в зависимости от id кнокпи формируем контент и заголовок окна
      let checkk_1=document.getElementById('button_1').getAttribute('id');
      let checkk_2=document.getElementById('button_2').getAttribute('id');
      let checkk_3=document.getElementById('button_3').getAttribute('id');
  
      if (el.getAttribute('id')==checkk_1){
        document.getElementById("popup_title").innerHTML=`${news[0].textContent}`;
        document.getElementById('popup_text').innerHTML=`${news[0].textContent}: ${newsText1} ${newsText2}`; 
      }
      if (el.getAttribute('id')==checkk_2){
        document.getElementById("popup_title").innerHTML=`${news[1].textContent}`;
        document.getElementById('popup_text').innerHTML=`${news[1].textContent}: ${newsText1} ${newsText2}`; 
      }
      if (el.getAttribute('id')==checkk_3){
        document.getElementById("popup_title").innerHTML=`${news[2].textContent}`;
        document.getElementById('popup_text').innerHTML=`${news[2].textContent}: ${newsText1} ${newsText2}`; 
      }

      popup.addEventListener("click", function(e){//закрытие окна путем нажатия на область вне самого окна
        if (!e.target.closest('.popup_content')){//если нажмем на окно-его контент, оно не закроется
           e.target.closest('.popup').classList.remove('_visible');//удаляем класс, отвечающий за видимость окна
        }
       });
    }
  })  
});