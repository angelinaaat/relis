let menuAll = document.querySelectorAll(".menu");
let menuConf = document.querySelectorAll(".menu-confiseurs");
let menuCaramel = document.querySelectorAll(".menu-caramel");
let menuPop = document.querySelectorAll(".menu-popular");
let menuFudge = document.querySelectorAll(".menu-fudge");
let firstImages = document.querySelectorAll(".categories");
let text1 = document.querySelector("h3");
let text2 = document.querySelector("h9");
let text3 = document.querySelector("h10");
let text4 = document.querySelector("h11");
let line1 = document.querySelector("p1");
let line2 = document.querySelector("p2");
let line3 = document.querySelector("p3");
let line4 = document.querySelector("p4");






    let all = document.querySelector('.all');
    all.addEventListener('click',function(){
            all.style.background = '#f2760a';
            all.style.color = '#ffffff';
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
            confis.style.background = '#f2760a';
            confis.style.color = '#ffffff';
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
            caramel.style.background = '#f2760a';
            caramel.style.color = '#ffffff';
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
            popular.style.background = '#f2760a';
            popular.style.color = '#ffffff';
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
            fudge.style.background = '#f2760a';
            fudge.style.color = '#ffffff';
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

text1.addEventListener('click',function(){
    text1.style.display = "block";
    line1.style.display = "block";
});

text2.addEventListener('mouseover',function(){
    text2.style.display = "flex";
    line2.style.display = "flex";
});

text3.addEventListener('mousemove',function(){
    text3.style.display = "flex";
    line3.style.display = "flex";    
});

text4.addEventListener('mousemove',function(){
    text4.style.display = "flex";
    line4.style.display = "flex";
});

// let navig = document.querySelectorAll('.navigation2')
// let elements = []
// for (let i = 0; i < 5; i += 1) {
    
//      navig[i]. = elements[i]
// }
    
        
