function tabs(){
    const tabcontenet = document.querySelectorAll('."tabcontent"'),
          tabItem = document.querySelectorAll('.tabheader__item'),
          tabWrapper = document.querySelector('."tabheader__items"'),
          tabActive = document.querySelector('.tabheader__item_active');

    tabcontenet.forEach(item =>{
        item.classList.add('hide');
        item.classList.remove('show');
    });

}
tabs();
export default  tabs;