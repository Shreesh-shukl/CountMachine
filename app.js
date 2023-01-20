let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

// console.log(btns)

btns.forEach(function (item){
    item.addEventListener('click', function(e){
       const styles = e.currentTarget.classList;
       if (styles.contains('decrease')){
        count--;

       }
       value.textContent = count;
    });
    item.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
         count++;
 
        }
        value.textContent = count;
     });
     item.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('reset')){
         count = 0;
 
        }
        value.textContent = count;
     });
});