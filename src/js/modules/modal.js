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
export default modal;
