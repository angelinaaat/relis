let menuAll = document.querySelectorAll(".menu");
let menuConf = document.querySelectorAll(".menu-confiseurs");
let menuCaramel = document.querySelectorAll(".menu-caramel");
let menuPop = document.querySelectorAll(".menu-popular");
let menuFudge = document.querySelectorAll(".menu-fudge");



let all = document.querySelector('.all');
all.addEventListener('click',function(){
        all.style.background = '#f2760a';
        all.style.color = '#ffffff';
        confis.style.background = '#ffffff';
        confis.style.color = '#000000';
        caramel.style.background = '#ffffff';
        caramel.style.color = '#000000';
        popular.style.background = '#ffffff';
        popular.style.color = '#000000';
        fudge.style.background = '#ffffff';
        fudge.style.color = '#000000';
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
    all.style.background = '#ffffff' ;
    all.style.color = '#000000';
    confis.style.background = '#f2760a';
    confis.style.color = '#ffffff';
    caramel.style.background = '#ffffff';
    caramel.style.color = '#000000';
    popular.style.background = '#ffffff';
    popular.style.color = '#000000';
    fudge.style.background = '#ffffff';
    fudge.style.color = '#000000';
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
    all.style.background = '#ffffff' ;
    all.style.color = '#000000';
    confis.style.background = '#ffffff';
    confis.style.color = '#000000';
    caramel.style.background = '#f2760a';
    caramel.style.color = '#ffffff';
    popular.style.background = '#ffffff';
    popular.style.color = '#000000';
    fudge.style.background = '#ffffff';
    fudge.style.color = '#000000';
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
    all.style.background = '#ffffff' ;
    all.style.color = '#000000';
    confis.style.background = "ffffff";
    confis.style.color = '#000000';
    caramel.style.background = '#ffffff';
    caramel.style.color = '#000000';
    popular.style.background = '#f2760a';
    popular.style.color = '#ffffff';
    fudge.style.background = '#ffffff';
    fudge.style.color = '#000000';
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
    all.style.background = '#ffffff' ;
    all.style.color = '#000000';
    confis.style.background = "#ffffff" ;
    confis.style.color = '#000000';
    caramel.style.background = '#ffffff';
    caramel.style.color = '#000000';
    popular.style.background = '#ffffff';
    popular.style.color = '#000000';
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

let picturesName = document.querySelectorAll("h3");
let picturesLine = document.querySelectorAll(".overlay p");
let pictures = document.querySelectorAll(".category img");
pictures.forEach((item, i) => {
    item.addEventListener("mouseenter", function () {
        if (picturesLine[i]) {
            picturesLine[i].style.display = "flex";
        }

        if (picturesName[i]) {
            picturesName[i].style.display = "flex";
        }
    });

    item.addEventListener("mouseleave", function () {
        if (picturesLine[i]) {
            picturesLine[i].style.display = "none";
        }

        if (picturesName[i]) {
            picturesName[i].style.display = "none";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let firstnav = document.querySelectorAll(".firstNav");

    firstnav.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            firstnav.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
            this.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let secondnav = document.querySelectorAll(".secondNav");

    secondnav.forEach((item) => {
        item.addEventListener("mouseenter", function () {
            secondnav.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");
        });

        item.addEventListener("mouseleave", function () {
            this.classList.remove("active");
        });
    });
});





















