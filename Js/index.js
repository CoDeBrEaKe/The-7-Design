let controls = document.querySelectorAll(".recent .cho a");
let items = document.querySelectorAll(".recent .container .box div");

console.log(items)

controls.forEach(control =>{
    control.onclick = function(){
        controls.forEach(control=>{
            control.classList.remove('active');
        });
        control.classList.add('active');

        items.forEach(item=>{
            if (!item.dataset.cat.includes(control.dataset.attr ))
            {
                console.log(control.dataset.attr )
                console.log(item.dataset.cat)
                item.style.display = 'none';
            }else{
                
                item.style.display = 'block';
            }
        })
    }
});