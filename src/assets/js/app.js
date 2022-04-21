// "use strict";

document.addEventListener('DOMContentLoaded', () => {
    // accordion script

    let collapsibleHeaders = document.getElementsByClassName('collapsible__header');

    Array.from(collapsibleHeaders).forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('collapsible--open');
        });
    });

    // accordion script
    const catalogBtn = document.querySelector('#catalog__btn');
    const catalogInner = document.querySelector('.catalog__inner');
    catalogBtn.addEventListener('click', () => {
        catalogInner.classList.toggle('openCatalog')
    });


    // smooth scroll
    const anchors = document.querySelectorAll('a[href*="#"]')

    for (let anchor of anchors) {
        anchor.addEventListener('click', function (e) {
            e.preventDefault()

            const blockID = anchor.getAttribute('href').substr(1)

            document.getElementById(blockID).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            })
        })
    }

    // burger - btn
    const burgerBtn = document.querySelector('#burger__btn');
    const burgerClose = document.querySelector('#close__nav');
    const burgerCloseFoot = document.querySelector('#close__nav-foot');

    const burgerOpenFoot = document.querySelector('#burger__btn-foot');

    const mobileNav = document.querySelector('.header__nav');
    const mobileNavFoot = document.querySelector('.footer__nav-resp');

    burgerBtn.addEventListener('click', () => {
        mobileNav.classList.add('show');
        document.querySelector('body').style.overflow = 'hidden';
        document.querySelector('header .logo').style.opacity = '0';
        document.querySelector('.overlay').classList.add('overlay__visible');
        burgerBtn.style.opacity = '0'
    });

    burgerOpenFoot.addEventListener('click', () => {
        mobileNavFoot.style.right = '-20px';
        document.querySelector('.overlay').classList.add('overlay__visible');
    });
    burgerCloseFoot.addEventListener('click', () => {
        mobileNavFoot.style.right = '-100%';
        document.querySelector('.overlay').classList.remove('overlay__visible');

    });

    burgerClose.addEventListener('click', () => {
        mobileNav.classList.remove('show');
        document.querySelector('body').style.overflow = 'auto';
        document.querySelector('header .logo').style.opacity = '1';
        burgerBtn.style.opacity = '1';
        document.querySelector('.overlay').classList.remove('overlay__visible');


    });

    // Sliders-----------------------------------------------------------
    new Swiper('.slider__inner', {
        fadeEffect: {
            crossFade: true,
        },

        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next'
        },

    });

    if (window.screen.width < 768) {
        document.querySelector('.footer').classList.add('footer-resp');
        document.querySelector('.brands__inner').classList.remove('swiper-container');
        document.querySelector('.brands__inner .row').classList.remove('swiper-wrapper');
        const slideArr = document.querySelectorAll('.brands__inner .row div.swiper-slide');
        slideArr.forEach(element => {
            element.classList.remove('swiper-slide');
        });

    }


    if (window.screen.width < 576) {
        let bannerImg1 = document.querySelector('#banner__img1');
        bannerImg1.src = "assets/img/banner_img-resp.png";
        let bannerImg2 = document.querySelector('#banner__img2');
        bannerImg2.src = "assets/img/banner_img-resp2.png";
    }
    if (window.screen.width < 376) {
        let newsTitle = document.querySelector('#newsBannerTitle');
        newsTitle.innerHTML = 'Лучшие Крипто- кошельки';

    }

    if (window.screen.width > 768) {
        document.querySelector('.brands__inner').classList.add('swiper-container');
        document.querySelector('.brands__inner .row').classList.add('swiper-wrapper');
        new Swiper('.brands__inner', {
            slidesPerView: 6,
            breakpoints: {

                360: {
                    slidesPerView: 'auto',
                },

            },

            navigation: {
                nextEl: '.swiper-button-prev',
                prevEl: '.swiper-button-next'
            },
        });
    }



    new Swiper('.reviews__inner', {
        slidesPerView: 3,

        breakpoints: {

            560: {
                spaceBetween: 20,

            },

            320: {
                slidesPerView: '1',
            },

        },

        navigation: {
            nextEl: '.swiper-button-prev',
            prevEl: '.swiper-button-next'
        },
    });
    
    const tabs = document.querySelector('.tabs');
    const tabsBtn = document.querySelectorAll('.tabs__btn');
    const tabsContent = document.querySelectorAll('.tabs__content');

    if (tabs) {
        tabs.addEventListener('click', (e) => {
            if (e.target.classList.contains('tabs__btn')) {
                const tabsPath = e.target.dataset.tabsPath;
                tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
                document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tabs__btn--active');
                tabsHandler(tabsPath);
            }

            if (e.target.classList.contains('tabs__arrow--prev')) {
                let activeBtn = document.querySelector('.tabs__btn--active');
                let activeParent = activeBtn.closest('.tabs__item');
                let previousParent = activeParent.previousElementSibling;

                if (previousParent) {
                    let prevActive = previousParent.querySelector('.tabs__btn')
                    tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
                    prevActive.classList.add('tabs__btn--active');

                    let path = prevActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }

            if (e.target.classList.contains('tabs__arrow--next')) {
                let activeBtn = document.querySelector('.tabs__btn--active');
                let activeParent = activeBtn.closest('.tabs__item');
                let nextParent = activeParent.nextElementSibling;

                if (nextParent) {
                    let nextActive = nextParent.querySelector('.tabs__btn');
                    tabsBtn.forEach(el => { el.classList.remove('tabs__btn--active') });
                    nextActive.classList.add('tabs__btn--active');

                    let path = nextActive.dataset.tabsPath;
                    tabsHandler(path);
                }
            }
        });
    }

    const tabsHandler = (path) => {
        tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
        document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
    };
});


// tabs
// 