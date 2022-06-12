/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/post.js":
/*!********************************!*\
  !*** ./src/js/modules/post.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const form = ()=>{
    const forms = document.querySelectorAll('form'),
          input = document.querySelectorAll('input');

    const message = {
        loading: 'loading',
        succese: 'thank you',
        failure: 'it is wrong'
    };
    const postData = (url, data)=>{
        document.querySelector('.status').textContent = message.loading;
        let res = fetch(url, {
            method: 'POST',
            body: data
        });
        return res.text;
    };
    const cleanInput =()=>{
        input.forEach(element => {
            element.value = '';
        });
    };
    forms.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();


            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);

            const formData = new FormData(item);
            postData('src/server.php', formData)
                .then(res=> {
                    console.log(res);
                    statusMessage.textContent = message.succese;
                })
                .catch(()=>statusMessage.textContent = message.failure)
                .finally(()=>{
                    cleanInput();
                    setTimeout(()=>{
                        statusMessage.remove();
                    }, 4000);
                });
        });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

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


window.addEventListener('DOMContentLoaded', function(){
    (0,_modules_post__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map