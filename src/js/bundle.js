/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/calc.js":
/*!********************************!*\
  !*** ./src/js/modules/calc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const calck =()=>{
    const result = document.querySelector('.calculating__result span');
    let sex='famale', 
    height, weight, age,
    ratio='1.375';

    function calctTotal(){
        if(!sex || !height || !weight || !age || !ratio){
            result.textContent = '___';
            return;
        }
        if(sex == 'famale'){
            result.textContent = Math.round(( 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age)) * ratio);
        }else{
            result.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age)) * ratio);
        }
    }
    calctTotal();
    function getCalck (parentSelector, classActive){
        const element = document.querySelectorAll(`${parentSelector} div`);
        element.forEach(elem=>{
            elem.addEventListener('click', (e)=>{
                if(e.target.getAttribute('data-ratio')){
                    ratio = e.target.getAttribute('data-ratio');
                }else{
                    sex = e.target.getAttribute('id');
                }
                console.log(ratio, sex);
                element.forEach(elem=>{
                    elem.classList.remove(classActive);
                });
                e.target.classList.add(classActive);
                calctTotal();
            });
        });
    }
    getCalck('#gender', 'calculating__choose-item_active');
    getCalck('.calculating__choose_big', 'calculating__choose-item_active');

    function gitClalcInput(selector){
        const input = document.querySelector(selector);
        input.addEventListener('input', ()=>{
            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                break;
                case 'weight':
                    weight = +input.value;
                break;
                case 'age':
                    age = +input.value;
                break;
            }
            calctTotal();
        });
        
    }
    gitClalcInput('#height');
    gitClalcInput('#weight');
    gitClalcInput('#age');
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calck);

/***/ }),

/***/ "./src/js/modules/card.js":
/*!********************************!*\
  !*** ./src/js/modules/card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const cards = ()=>{
    
    class menuCard {
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeMoney();
        }
        changeMoney (){
            this.price = this.transfer * this.price;
        }

        render(){
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
                </div>
            `;
            this.parent.append(element);
        }
    }
    const getresource = async (url)=>{
        let res = await fetch(url);
        if (!res.ok){
            throw new Error(`could not ${url} this file`);
        }
        return res.json();
       };
       getresource(` http://localhost:3000/menu`)
        .then(data=>{
            data.forEach(({img, altimg, title, descr, price})=>{
                new menuCard(img, altimg, title, descr, price, '.menu .container').render();
            });
        });
    

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);

/***/ }),

/***/ "./src/js/modules/modal.js":
/*!*********************************!*\
  !*** ./src/js/modules/modal.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const modal = ()=>{
    function allModal(selectorbtn, selectoClose, selectorModal){
        const openModal = document.querySelectorAll(selectorbtn),
              closeModal = document.querySelector(selectoClose),
              modal = document.querySelector(selectorModal);
        function openModall (){
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
            clearInterval(modalTimer);
        }
        openModal.forEach(item =>{
            item.addEventListener('click', openModall);

        });
        function closeModall (){
                modal.classList.add('hide');
                modal.classList.remove('show');
                document.body.style.overflow = '';

        }
        closeModal.addEventListener('click',closeModall);
        
        modal.addEventListener('click', (e)=>{
            if (e.target == modal){
                closeModall();
            }
        });
        const modalTimer = setTimeout(openModall, 5000);
        function showModalByScroll() {
            if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
                openModall();
                window.removeEventListener('scroll', showModalByScroll);
            }
        }
        window.addEventListener('scroll', showModalByScroll);
    }
    
    allModal('[data-modal]', '.modal__close', '.modal');
   
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);


/***/ }),

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const forms = () => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input');


    
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

   const postData = async (url, object)=>{
    document.querySelector('.status').textContent = message.loading;
    let res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(object)
    });
    return res.json();
   };
   
   function clearInputs(){
    inputs.forEach(item=>{
        item.value = '';
   });
   }
   form.forEach(item=>{
    item.addEventListener('submit', (e)=>{
        e.preventDefault();

        let statusMessage = document.createElement('div');
        statusMessage.classList.add('status');
        item.appendChild(statusMessage);

        const formData = new FormData(item);
        const json = JSON.stringify(Object.fromEntries(formData.entries()));
        postData('http://localhost:3000/requests', json)
            .then(res=>{
                console.log(res);
                statusMessage.textContent = message.success;
            })
            .catch(()=>statusMessage.textContent = message.failure)
            .finally(()=>{
                clearInputs();
                setTimeout(()=>{
                    statusMessage.remove();
                }, 3000);
            });
    });
   });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (forms);

/***/ }),

/***/ "./src/js/modules/slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./src/js/modules/tabs.js":
/*!********************************!*\
  !*** ./src/js/modules/tabs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs(){
    const tabs = document.querySelectorAll('.tabcontent'),
          tabItem = document.querySelectorAll('.tabheader__item'),
          tabWrapper = document.querySelector('.tabheader__items');
          
    function HideTab (){
        tabs.forEach(item =>{
            item.classList.add('hide');
            item.classList.remove('show');
        });
        tabItem.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
        
    }
    function showTab (i=0){
            tabs[i].classList.add('show');
            tabs[i].classList.remove('hide');
            tabItem[i].classList.add('tabheader__item_active');
    }
    HideTab();
    showTab();
    tabWrapper.addEventListener('click', function(e){
        const target = e.target;
        if (target && target.classList.contains('tabheader__item')){
            tabItem.forEach((item, i)=>{
                if(target == item){
                    HideTab();
                    showTab(i);
                }
            });
        }
    });

}
tabs();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./src/js/modules/timer.js":
/*!*********************************!*\
  !*** ./src/js/modules/timer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const timer = ()=>{
    const deadline = '2022-10-07';

    function getTime(end){
        const t = Date.parse(end) - Date.parse(new Date()),
              days = Math.floor(t/(1000 * 60 * 60 * 24)),
              hours = Math.floor((t/(1000 * 60 * 60)) % 24),
              minutes = Math.floor((t/1000 / 60) % 60),
              seconds = Math.floor((t/1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
        
    }
    function setClock (selector, end){
        const t = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timerInterval = setInterval(UpdateClock, 1000);
              UpdateClock();


        function UpdateClock (){
            const t = getTime(end);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total <= 0){
                clearInterval(timerInterval);
            }
        }
    }
    setClock('timer', deadline);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/post */ "./src/js/modules/post.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/tabs */ "./src/js/modules/tabs.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ "./src/js/modules/modal.js");
/* harmony import */ var _modules_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/card */ "./src/js/modules/card.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./src/js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./src/js/modules/timer.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/calc */ "./src/js/modules/calc.js");








window.addEventListener('DOMContentLoaded', function(){
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_post__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_card__WEBPACK_IMPORTED_MODULE_3__["default"])();
    (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();
    (0,_modules_calc__WEBPACK_IMPORTED_MODULE_6__["default"])();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map