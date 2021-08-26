const filterButtons = document.querySelectorAll('.filter-btn');
const shopItems = document.querySelectorAll('.store-item');
const searchQuery = document.querySelector('#search-item');
const lightbox = document.querySelector('.lightbox-container');
const lightboxItem = document.querySelector('.lightbox-item');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxButtons = document.querySelectorAll('.lightbox-control'); //dont like grabbing with class, prefer ID
// const lightboxBtnLeft = document.querySelector('#btnLeft');
// const lightboxBtnRight = document.querySelector('.btnRight');

//Filter buttons
filterButtons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault();
        let filter = e.target.dataset.filter;
        if(filter == 'all'){
            shopItems.forEach((shopItem)=>{
                shopItem.style.display = 'block';
            });
            return;
        }
        shopItems.forEach((shopItem)=>{
            if(shopItem.classList.contains(filter)){
                shopItem.style.display = 'block';
            }else{
                shopItem.style.display = 'none';
            }
        });
    }) 
})

//SEARCH BAR
searchQuery.addEventListener('keyup',(e)=>{
    let searchTerm = e.target.value.toLowerCase().trim();
    shopItems.forEach((shopItem)=>{
        if(shopItem.textContent.includes(searchTerm)){
            shopItem.style.display = 'block';
        }else{
            shopItem.style.display = 'none';
        }
    });
})

//Modal

//create image array
const modalImages = document.querySelectorAll('.store-img');
let modalImagesArr = Array.from(modalImages);
let modalImagesArrIndex = 0;


shopItems.forEach((shopItem)=>{
    shopItem.addEventListener('click',()=>{
        lightbox.classList.add('show');
    })
    lightboxClose.addEventListener('click',()=>{
        lightbox.classList.remove('show');
    });
});
lightboxButtons.forEach((lightboxButton)=>{
    lightboxButton.addEventListener('click',()=>{
        if(lightboxButton.classList.contains('btnLeft')){
            if(modalImagesArrIndex==0){
                lightboxItem.style.backgroundImage = `url(${modalImagesArr[modalImagesArrIndex].src})`
                modalImagesArrIndex=modalImagesArr.length-1;
            }else{
                lightboxItem.style.backgroundImage = `url(${modalImagesArr[modalImagesArrIndex].src})`
                modalImagesArrIndex--;
            }
        }else if(lightboxButton.classList.contains('btnRight')){
            if(modalImagesArrIndex==modalImagesArr.length-1){
                lightboxItem.style.backgroundImage = `url(${modalImagesArr[modalImagesArrIndex].src})`
                modalImagesArrIndex=0;
            }else{
                lightboxItem.style.backgroundImage = `url(${modalImagesArr[modalImagesArrIndex].src})`
                modalImagesArrIndex++;
            }
        }
    });
})
