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
export default  tabs;