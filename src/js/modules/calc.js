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
export default calck;