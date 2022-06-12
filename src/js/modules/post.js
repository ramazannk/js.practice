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

export default forms;