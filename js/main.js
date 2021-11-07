const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const menubarsLeftTilte = $$('.category-menubars__lists > li');
const dropDownMenuItems = $$('.category-product__dropdown-menu__items');

//Menu left bars category-product

menubarsLeftTilte.forEach((li) => {
    li.addEventListener('click', () => {
        li.classList.toggle('block');
    })
})

// productInfomations Tab Contents
const productInfomationsTabs = $$('.product-right__infomations-navbars li a');
const productInfomationsContents = $$('.product-right__infomations-content-panes');

productInfomationsTabs.forEach((tab, index) => {
    const pane = productInfomationsContents[index];

    tab.addEventListener('click', function(e) {
        e.preventDefault();

        $('.product-right__infomations-navbars li a.active').classList.remove('active');
        $('.product-right__infomations-content-panes.open').classList.remove('open');

        this.classList.add('active');
        pane.classList.add('open');
    })
})

// Open/close productInfomations Tab Contents
const productInfomations = document.querySelectorAll('.product-right__infomations');
const btnShow = document.querySelector('.product-right__buttonShow-btn');
productInfomations.forEach(function(product, index) {
    btnShow.addEventListener('click', function() {
        product.classList.toggle('open');
    });
});


// click select btn sizes product
const btnSizes = $$('.product-right__sizes-group-size li a');

btnSizes.forEach((size, index) => {
    size.addEventListener('click', function(e) {
        e.preventDefault();
        $('.product-right__sizes-group-size li a.active').classList.remove('active');

        this.classList.add('active');
    })
});

// click small images -> big image
const bigImage = $('.product-main__img-main img');
const smallImages = $$('.product-main__img-subs img');

smallImages.forEach(function(smallImage, index) {
    smallImage.addEventListener('click', () => {
        bigImage.src = smallImage.src;
    })
})

// Close product items in cart
const btnClose = $('.cart-billtable__close');
const itemsProduct = $$('.cart-billtable__tables-left tbody tr');

itemsProduct.forEach((item, index) => {
    btnClose.addEventListener('click', function(e) {
        e.preventDefault();

        item.classList.add('close');
    })
});