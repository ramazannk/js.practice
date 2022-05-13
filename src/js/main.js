function closeModal(modalSelector) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

    if (modalTimerId) {
        clearInterval(modalTimerId);
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {
    const modalTrigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector);

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => openModal(modalSelector, modalTimerId));
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') == "") {
            closeModal(modalSelector);
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) { 
            closeModal(modalSelector);
        }
    });

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll);
        }
    }
    window.addEventListener('scroll', showModalByScroll);
}

export default modal;
export {closeModal};
export {openModal};



function openModal(modalSelector, modalTimer){
    const modal = document.querySelector(modalSelector);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
    if(modalTimer){
        clearInterval(modalTimer);
    }
}
function closeModal(modalSelector){
    const modal = document.querySelector(modalSelector);
    modal.classList.remove('show');
    document.body.style.overflow = '';

}

function modal(TriggerSelector, modalSelector, modalTimer){
// modal

const btn = document.querySelectorAll(TriggerSelector),
    modal = document.querySelector(modalSelector);
    btn.forEach(btn =>{
    btn.addEventListener('click', ()=>openModal(modalSelector, modalTimer)); 
});
    modal.addEventListener('click', (e)=>{
    if (e.target === modal || e.target.getAttribute('data-close') == ""){
    closeModal(modalSelector);
    }
});
function scrollModal(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
    openModal(modalSelector, modalTimer);
    window.removeEventListener('scroll', scrollModal);
    }
    }
    window.addEventListener('scroll', scrollModal);


}
export default modal;
export {openModal};
export {closeModal};




import {closeModal, openModal} from './modal';
import {postData} from '../services/services';
function forms(formsSelector, modalTimerId) {
    const forms = document.querySelectorAll(formsSelector);
    const message = {
        loading: 'img/form/spinner.svg',
        success: 'Спасибо! Скоро мы с вами свяжемся',
        failure: 'Что-то пошло не так...'
    };

    forms.forEach(item => {
        bindPostData(item);
    });

    function bindPostData(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('img');
            statusMessage.src = message.loading;
            statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
            form.insertAdjacentElement('afterend', statusMessage);
        
            const formData = new FormData(form);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
            .then(data => {
                console.log(data);
                showThanksModal(message.success);
                statusMessage.remove();
            }).catch(() => {
                showThanksModal(message.failure);
            }).finally(() => {
                form.reset();
            });
        });
    }

    function showThanksModal(message) {
        const prevModalDialog = document.querySelector('.modal__dialog');

        prevModalDialog.classList.add('hide');
        openModal('.modal', modalTimerId);

        const thanksModal = document.createElement('div');
        thanksModal.classList.add('modal__dialog');
        thanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
        `;
        document.querySelector('.modal').append(thanksModal);
        setTimeout(() => {
            thanksModal.remove();
            prevModalDialog.classList.add('show');
            prevModalDialog.classList.remove('hide');
            closeModal('.modal');
        }, 4000);
    }
}

export default forms;





import {openModal, closeModal} from './modal';

function post(){
     // POST
     const forms = document.querySelectorAll('form');

     const messeg = {
         loading : 'загрузка',
         succes: 'thank you',
         failure: 'this page error'
         };
     forms.forEach(item =>{
         BindPostData(item);
     });
 
     const postData = async(url , data) =>{
         const res = await fetch(url, {
             method: 'POST',
         headers: {
             'Content-type': 'application/json'
         },
         body: data
         });
         return await res.json();
     };
     function BindPostData(form){
         form.addEventListener('submit', (e)=>{
         e.preventDefault();
 
         const statusMesseg = document.createElement('div');
         statusMesseg.textContent = messeg.loading;
         form.append(statusMesseg);
 
     
     const formData = new FormData(form);
         
     const json = JSON.stringify(Object.fromEntries(formData.entries()));
     
     
     postData('http://localhost:3000/requests', json)
     .then((data) =>{
         console.log(data);
                 showThanksModal(messeg.succes);
                 statusMesseg.remove();
     }).catch(()=>{
         showThanksModal(messeg.failure);
     }).finally(()=>{
         form.reset();
     });
 
     });
     }
     function showThanksModal(message) {
         const prevModalDialog = document.querySelector('.modal__dialog');
         prevModalDialog.classList.add('hide');
         openModal();
 
         const thanksModal = document.createElement('div');
             thanksModal.classList.add('modal__dialog');
             thanksModal.innerHTML = `
             <div class="modal__content">
                 <div class="modal__close" data-close>&times;</div>
                 <div class="modal__title">${message}</div>
             </div>
             `;
         document.querySelector('.modal').append(thanksModal);
             setTimeout(() => {
             thanksModal.remove();
             prevModalDialog.classList.add('show');
             prevModalDialog.classList.remove('hide');
             closeModal();
         }, 4000);
     }
     
 
}
export default post;