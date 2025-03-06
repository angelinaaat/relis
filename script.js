let catalog = document.querySelectorAll('.category')
let catalog2= document.querySelectorAll('.catalog2')
let all = document.querySelector('.all');
all.addEventListener('mousemove',function(){
        all.style.background = '#f2760a';
        all.style.color = '#ffffff';
        // all.style.border= 10;
        catalog.style.display = 'block'
        catalog2.style.display = 'block'

})

let confis = document.querySelector('.confiseurs');
confis.addEventListener('mousemove',function(){
        confis.style.background = '#f2760a';
        confis.style.color = '#ffffff';
})

let caramel = document.querySelector('.caramel');
caramel.addEventListener('mousemove',function(){
        caramel.style.background = '#f2760a';
        caramel.style.color = '#ffffff';
})

let popular = document.querySelector('.popular');
popular.addEventListener('mousemove',function(){
        popular.style.background = '#f2760a';
        popular.style.color = '#ffffff';
})

let fudge = document.querySelector('.fudge');
fudge.addEventListener('mousemove',function(){
        fudge.style.background = '#f2760a';
        fudge.style.color = '#ffffff';
})

all.addEventListener('click', function(){
    catalog.style.display = 'block';
    catalog2.style.display = 'block';
    // navItems.forEach(nav => {
    //     nav.addEventListener("click", function () {
    //         const category = this.getAttribute("data-category");
            
    //         productItems.forEach(product => {
    //             if (category === "all" || product.classList.contains(category)) {
    //                 product.style.display = "block";
    //             } else {
    //                 product.style.display = "none";
    //             }
    //         });
    //     });
    // });
    });
        
