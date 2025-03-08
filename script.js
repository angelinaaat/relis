let menuAll = document.querySelectorAll(".menu");
let menuConf = document.querySelectorAll(".menu-confiseurs");
let menuCaramel = document.querySelectorAll(".menu-caramel");
let menuPop = document.querySelectorAll(".menu-popular");
let menuFudge = document.querySelectorAll(".menu-fudge");

let buttons = document.querySelectorAll(".navigation2");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => {
            btn.style.background = " ";
            btn.style.color = " ";
        });

        this.style.background = "#f2760a";
        this.style.color = "#ffffff";
        

    let all = document.querySelector('.all');
    all.addEventListener('click',function(){
            // all.style.background = '#f2760a';
            // all.style.color = '#ffffff';
            menuAll.forEach(item => {
                item.style.display = "block"});
            
            menuCaramel.forEach(item => {
                item.style.display = "none"});
            
            menuConf.forEach(item => {
                item.style.display = "none"});
            
            menuPop.forEach(item => {
                item.style.display = "none"});

            menuFudge.forEach(item => {
                item.style.display = "none"});
    });

    let confis = document.querySelector('.confiseurs');
    confis.addEventListener('click',function(){
            // confis.style.background = '#f2760a';
            // confis.style.color = '#ffffff';
            menuAll.forEach(item => {
                item.style.display = "none"});
            
            menuCaramel.forEach(item => {
                item.style.display = "none"});
            
            menuConf.forEach(item => {
                item.style.display = "block"});
            
            menuPop.forEach(item => {
                item.style.display = "none"});

            menuFudge.forEach(item => {
                item.style.display = "none"});
    });

    let caramel = document.querySelector('.caramel');
    caramel.addEventListener('click',function(){
            // caramel.style.background = '#f2760a';
            // caramel.style.color = '#ffffff';
            menuAll.forEach(item => {
                item.style.display = "none"});
            
            menuCaramel.forEach(item => {
                item.style.display = "block"});
            
            menuConf.forEach(item => {
                item.style.display = "none"});
            
            menuPop.forEach(item => {
                item.style.display = "none"});

            menuFudge.forEach(item => {
                item.style.display = "none"});
    });

    let popular = document.querySelector('.popular');
    popular.addEventListener('click',function(){
            // popular.style.background = '#f2760a';
            // popular.style.color = '#ffffff';
            menuAll.forEach(item => {
                item.style.display = "none"});
            
            menuCaramel.forEach(item => {
                item.style.display = "none"});
            
            menuConf.forEach(item => {
                item.style.display = "none"});
            
            menuPop.forEach(item => {
                item.style.display = "block"});

            menuFudge.forEach(item => {
                item.style.display = "none"});
    });

    let fudge = document.querySelector('.fudge');
    fudge.addEventListener('click',function(){
            // fudge.style.background = '#f2760a';
            // fudge.style.color = '#ffffff';
            menuAll.forEach(item => {
                item.style.display = "none"});
            
            menuCaramel.forEach(item => {
                item.style.display = "none"});
            
            menuConf.forEach(item => {
                item.style.display = "none"});
            
            menuPop.forEach(item => {
                item.style.display = "none"});

            menuFudge.forEach(item => {
                item.style.display = "block"});
    });

});
});
    
        
