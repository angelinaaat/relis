let menuAll = document.querySelectorAll(".menu");
let menuConf = document.querySelectorAll(".menu-confiseurs");
let menuCaramel = document.querySelectorAll(".menu-caramel");
let menuPop = document.querySelectorAll(".menu-popular");
let menuFudge = document.querySelectorAll(".menu-fudge");

let all = document.querySelector('.all');
all.addEventListener('click',function(){
        all.style.background = '#f2760a';
        all.style.color = '#ffffff';
        menuAll.style.display = 'block';
        menuCaramel.style.display = 'none';
        menuConf.style.display = 'none';
        menuPop.style.display = 'none';
        menuFudge.style.display = 'none';

})

let confis = document.querySelector('.confiseurs');
confis.addEventListener('click',function(){
        confis.style.background = '#f2760a';
        confis.style.color = '#ffffff';
        menuAll.style.display = 'none';
        menuCaramel.style.display = 'none';
        menuConf.style.display = 'block';
        menuPop.style.display = 'none';
        menuFudge.style.display = 'none';
})

let caramel = document.querySelector('.caramel');
caramel.addEventListener('click',function(){
        caramel.style.background = '#f2760a';
        caramel.style.color = '#ffffff';
        menuAll.style.display = 'none';
        menuCaramel.style.display = 'block';
        menuConf.style.display = 'none';
        menuPop.style.display = 'none';
        menuFudge.style.display = 'none';
})

let popular = document.querySelector('.popular');
popular.addEventListener('click',function(){
        popular.style.background = '#f2760a';
        popular.style.color = '#ffffff';
        menuAll.style.display = 'npne';
        menuCaramel.style.display = 'none';
        menuConf.style.display = 'none';
        menuPop.style.display = 'block';
        menuFudge.style.display = 'none';
})

let fudge = document.querySelector('.fudge');
fudge.addEventListener('click',function(){
        fudge.style.background = '#f2760a';
        fudge.style.color = '#ffffff';
        menuAll.style.display = 'none';
        menuCaramel.style.display = 'none';
        menuConf.style.display = 'none';
        menuPop.style.display = 'none';
        menuFudge.style.display = 'block';
})


    
        
