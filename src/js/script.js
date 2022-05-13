window.addEventListener('DOMContentLoaded', function(){
    //  tab
    const tabs = document.querySelectorAll('.tabcontent'),
          tabsItem = document.querySelectorAll('.tabheader__item'),
          parentsItem = document.querySelector('.tabheader__items');

    function hideTab(){
        tabs.forEach(item=>{
            item.classList.remove('show');
            item.classList.add('hide');
        });
        tabsItem.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabcontent (i = 0){
        tabs[i].classList.add('show');
        tabs[i].classList.remove('hide');
        tabsItem[i].classList.add('tabheader__item_active');
    }
    hideTab();
    showTabcontent();
    parentsItem.addEventListener('click', function (e){
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')){
            tabsItem.forEach((item, i)=>{
                if(target == item){
                    hideTab();
                    showTabcontent(i);
                }
            });
        }
    });
    // timer
    const deadline = '2022-05-12';

    function getTime(end){
        const t = Date.parse(end) - Date.parse(new Date()),
                days = Math.floor( (t/(1000*60*60*24)) ),
                seconds = Math.floor( (t/1000) % 60 ),
                minutes = Math.floor( (t/1000/60) % 60 ),
                hours = Math.floor( (t/(1000*60*60) % 24) );
        return{
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }
    function getZero(num){
        if (num >= 0 && num < 10){
            return  '0' + num ;
        }else{
            return num;
        }
    } 

    function setClock(selector, end){
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timerInterval = setInterval(updateclock, 1000);
              updateclock();


        function updateclock (){
            const t = getTime(end);
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero( t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if(t.total <= 0){
                clearInterval(timerInterval);
            }

        }
    }
    setClock('.timer', deadline);


    // modal

    const modal = document.querySelector('.modal'),
          openModal = document.querySelectorAll('[data-modal]'),
          closModal = document.querySelector('[data-close]');

          openModal.forEach(item=>{
              item.addEventListener('click', ()=>{
                  modal.classList.add('show');
                  modal.classList.remove('hide');
                  document.body.style.overflow = "hidden";
              });
          });

          function CloseModall (){
            modal.classList.remove('show');
            modal.classList.add('hide');
            
          }
          closModal.addEventListener('click', CloseModall);
          
          modal.addEventListener('click', (e)=>{
             if ( e.target===modal){
                 CloseModall();
             }
          });

          document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                CloseModall();
            }
        });

        // slider 
        let slideIndex = 1;
        const slides = document.querySelectorAll('.offer__slide'),
               prev = document.querySelector('.offer__slider-prev'),
               next = document.querySelector('.offer__slider-next');
               
               showSlides(slideIndex);

    

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');

        slides[slideIndex - 1].style.display = 'block';
    }

    function plusSlides (n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function(){
        plusSlides(-1);
    });

    next.addEventListener('click', function(){
        plusSlides(1);
    });

    
});