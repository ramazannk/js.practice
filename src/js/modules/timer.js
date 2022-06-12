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
export default timer;