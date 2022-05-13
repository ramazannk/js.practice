/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
window.addEventListener('DOMContentLoaded', function(){
    const tabcontenet = document.querySelectorAll('.tabcontent'),
          tabItem = document.querySelectorAll('.tabheader__item'),
          tabWrapper = document.querySelector('.tabheader__items');

    tabcontenet.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show');
    });
    tabItem.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    });
    function tabsShow (i = 0){
        tabcontenet[i].classList.add('show');
        tabItem[i].classList.add('tabheader__item_active');
    }
    tabsShow();
});
/******/ })()
;
//# sourceMappingURL=bundle.js.map