const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
    // console.log(counter);

    counter.innerHTML = 0;

    const updateCounter = () => {
        // getting data from data-target and using (+) to convert string to number
        const targetCounter = +counter.getAttribute('data-target');  

        // Using Number to convert string to number
        const startingCount = Number(counter.innerHTML);

        // getting difference between number
        const incr = targetCounter/100;

        if(startingCount < targetCounter){
            counter.innerHTML = `${Math.round(startingCount + incr)}`;
            setTimeout(updateCounter, 10);
        }else{
            counter.innerHTML = targetCounter;
        }
    }
    updateCounter();
})