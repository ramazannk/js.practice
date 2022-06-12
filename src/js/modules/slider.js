const slider = ()=>{
    const slide = document.querySelectorAll('.offer__slide'),
          sliders = document.querySelector('.offer__slider'),
         
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          current = document.querySelector('#current'),
          total = document.querySelector('#total'),
          slideWrapper = document.querySelector('.offer__slider-wrapper'),
          slideInner = document.querySelector('.offer__slider-inner'),
          width = window.getComputedStyle(slideWrapper).width;
    let slideIndex = 1,
        offset = 0;

        if(slide.length < 10){
            total.textContent = `0${slide.length}`;
            current.textContent = `0${slideIndex}`;
        }else{
            total.textContent = slide.length;
            current.textContent = slideIndex;
        }

    slideInner.style.width = 100 * slide.length + '%';
    slideInner.style.display = 'flex';
    slideInner.style.transition = '0.5s all';
    slideWrapper.style.overflow = 'hidden';

    slide.forEach(slid=>{
        slid.style.width = width;
    });

    sliders.style.position = 'relative';

    const indicator = document.createElement('ol'),
        dots = [];
    indicator.classList.add('carusel__indicators');
    indicator.style.cssText = `
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 15;
        display: flex;
        justify-content: center;
        margin-right: 15%;
        margin-left: 15%;
        list-style: none;
    `;
    sliders.append(indicator);

    for (let i = 0; i<slide.length; i ++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slider-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;
        if (i == 0){
            dot.style.opacity = 1;
        }
        indicator.append(dot);
        dots.push(dot);
        
    }
    
    function deletNotDigets (str){
        return +str.replace(/\D/g, '');

    }
    next.addEventListener('click', ()=>{
        if(offset == deletNotDigets(width) * (slide.length - 1)){
            offset = 0;
        }else{
            offset += deletNotDigets(width);
        }
        slideInner.style.transform = `translateX(-${offset}px)`;
        if(slideIndex == slide.length){
            slideIndex = 1;
        }else{
            slideIndex++;
        }
        if(slide.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
        dots.forEach(item=>{
            item.style.opacity = '.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });
    prev.addEventListener('click', ()=>{
        if(offset == 0 ){
            offset = deletNotDigets(width) * (slide.length - 1);
        }else{
            offset -= deletNotDigets(width);
        }
        slideInner.style.transform = `translateX(-${offset}px)`;

        if(slideIndex == 1){
            slideIndex = slide.length;
        }else{
            slideIndex--;
        }
        if(slide.length < 10){
            current.textContent = `0${slideIndex}`;
        }else{
            current.textContent = slideIndex;
        }
        dots.forEach(item=>{
            item.style.opacity = '.5';
        });
        dots[slideIndex - 1].style.opacity = 1;
    });

    dots.forEach(dot =>{
        dot.addEventListener('click', (e)=>{
            const slideTo = e.target.getAttribute('data-slider-to');
            slideIndex = slideTo;
            offset = deletNotDigets(width) * (slideTo - 1);

            if(slide.length < 10){
                current.textContent = `0${slideIndex}`;
            }else{
                current.textContent = slideIndex;
            }
            slideInner.style.transform = `translateX(-${offset}px)`;
            dots.forEach(item=>{
                item.style.opacity = '.5';
            });
            dots[slideIndex - 1].style.opacity = 1;

        });
    });






    // if(slide.length < 10){
    //     total.textContent = `0${slide.length}`;
    // }else{
    //     total.textContent = slide.length;
    // }

    // function showSlide (n){
    //     if (n > slide.length){
    //         slideIndex = 1;
    //     }
    //     if(n < 1){
    //         slideIndex = slide.length;
    //     }
    //     slide.forEach((item)=>item.style.display = 'none');
    //     slide[slideIndex - 1].style.display = 'block';

        // if(slide.length < 10){
        //     current.textContent = `0${slideIndex}`;
        // }else{
        //     current.textContent = slideIndex;
        // }
    

    // }

    // function pulsSlider(n){
    //     showSlide(slideIndex += n);
    // }

    // prev.addEventListener('click', function(){
    //     pulsSlider(-1);
    // });
    // next.addEventListener('click', function(){
    //     pulsSlider(1);
    // });

};
export default slider;