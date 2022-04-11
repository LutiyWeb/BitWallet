// "use strict";

$(function () {
    // fixed header

    // $(window).scroll(function () {
    //     var height = $(window).scrollTop(); /*Если сделали скролл на 100px задаём новый класс для header*/
    //     if (height > 50) { $('header').addClass('header-fixed'); } else { /*Если меньше 100px удаляем класс для header*/
    //         $('header').removeClass('header-fixed');
    //     }
    // });

    // accordion script

    let collapsibleHeaders = document.getElementsByClassName('collapsible__header');

    Array.from(collapsibleHeaders).forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('collapsible--open');
        });
    });

    // var accItem = document.getElementsByClassName('accordionItem');
    // var accHD = document.getElementsByClassName('accordionItemHeading');
    // for (i = 0; i < accHD.length; i++) {
    //     accHD[i].addEventListener('click', toggleItem, false);
    // }
    // function toggleItem() {
    //     var itemClass = this.parentNode.className;
    //     for (i = 0; i < accItem.length; i++) {
    //         accItem[i].className = 'accordionItem close';
    //     }
    //     if (itemClass == 'accordionItem close') {
    //         this.parentNode.className = 'accordionItem open';
    //     }
    // }

    // accordion script



    // custom select

    // $(".custom-select").each(function () {
    //     var classes = $(this).attr("class"),
    //         id = $(this).attr("id"),
    //         name = $(this).attr("name");
    //     var template = '<div class="' + classes + '">';
    //     template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
    //     template += '<div class="custom-options">';
    //     $(this).find("option").each(function () {
    //         template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
    //     });
    //     template += '</div></div>';

    //     $(this).wrap('<div class="custom-select-wrapper"></div>');
    //     $(this).hide();
    //     $(this).after(template);
    // });
    // $(".custom-option:first-of-type").hover(function () {
    //     $(this).parents(".custom-options").addClass("option-hover");
    // }, function () {
    //     $(this).parents(".custom-options").removeClass("option-hover");
    // });
    // $(".custom-select-trigger").on("click", function () {
    //     $('html').one('click', function () {
    //         $(".custom-select").removeClass("opened");
    //     });
    //     $(this).parents(".custom-select").toggleClass("opened");
    //     event.stopPropagation();
    // });
    // $(".custom-option").on("click", function () {
    //     $(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
    //     $(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    //     $(this).addClass("selection");
    //     $(this).parents(".custom-select").removeClass("opened");
    //     $(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
    // });

    // custom select


    // $('.focus-field').blur(function () {
    //     if ($(this).val() === '' || $(this).val() === undefined) {
    //         $(this).parent().removeClass('active');
    //     } else {
    //         $(this).parent().addClass('active');
    //     }
    // });

    // searchpage input clear
    // $("#local-search").focus(function () {
    //     $(this).parent().addClass("active");
    //     $('.clear').addClass('show');
    // });

    // $("#local-search").blur(function () {
    //     $('.clear').removeClass('show');
    // });

    // $(".clear").click(function () {
    //     $('.local-search__Input').val('');
    //     $(this).removeClass('show');
    // });
    // searchpage input clear

    // $('#local-search').blur(function () {
    //     if ($(this).val() === '' || $(this).val() === undefined) {
    //         $(this).parent().removeClass('active');
    //     } else {
    //         $(this).parent().addClass('active');
    //         $(this).next().addClass('show');
    //     }
    // });

    // burger - btn
    // $(".burger-btn").on("click", function () {
    //     $('.header').addClass("mobile-nav");
    //     $('body').addClass("block-scroll");
    //     if ($('#filter-bar').hasClass('open')) {
    //         $('#filter-bar').removeClass('open');
    //     }
    // });
    // burger - btn


    // close navigation
    // $(".close-mob__nav ").on("click", function () {
    //     $('.header').removeClass("mobile-nav");
    //     $('body').removeClass("block-scroll");
    // });
    // close navigation

    // снимает класс при клике вне элемента
    // $(document).on('mouseup touchstart', function (e) {
    //     var sort = $('#sort-btn_inner');
    //     if (!sort.is(e.target) && sort.has(e.target).length === 0) {
    //         $('#sort-btn_inner').removeClass('active-sort');
    //     }
    // });
    // снимает класс при клике вне элемента

});


// Sliders-----------------------------------------------------------
// Связываем слайдера
// swiperDirection.controller.control = swiperDirectionInfo;
// swiperDirectionInfo.controller.control = swiperDirection;
// Связываем слайдера

new Swiper('.brands__inner', {
    slidesPerView: 6,
    spaceBetween: 30,

    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
})

new Swiper('.slider-inner', {
    effect: 'fade',

    fadeEffect: {
        crossFade: true,
    },

    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next'
    },
    // centeredSlides: true,
    // breakpoints: {

    //     320: {
    //         slidesPerView: 1,
    //         spaceBetween: 30,

    //     },

    // },



    //     // If we need pagination
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     //     type: 'fraction',
    //     //     renderFraction: function (currentClass, totalClass) {
    //     //         return '<span class="' + currentClass + '"></span>' + ' <span class="decor-line"></span> ' + '<span class="' + totalClass + '"></span>';
    //     //     }
    //     // },

});



// tabs
var jsTriggers = document.querySelectorAll('.js-tab-trigger');
jsTriggers.forEach(function (item, i) {
    item.addEventListener('click', function () {
        var tabName = this.dataset.tab,
            tabContent = document.querySelector('.js-tab-content[data-tab="' + tabName + '"]');

        document.querySelectorAll('.js-tab-content.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        document.querySelectorAll('.js-tab-trigger.active').forEach(function (item, i) {
            item.classList.remove('active');
        });

        tabContent.classList.add('active');
        this.classList.add('active');
    });
})

// console.log(tabContent);
// tabs

// pop up 

// let popupBg = document.querySelector('#popup__bg'); // Фон попап окна
// let popup = document.querySelector('#popup-inner'); // Само окно
// let openPopupButtons = document.querySelectorAll('#open-search'); // Кнопки для показа окна
// let closePopupButton = document.querySelector('#close-search'); // Кнопка для скрытия окна
// let hiddenNav = document.querySelector('.nav'); // Кнопка для скрытия окна

// openPopupButtons.forEach((button) => { // Перебираем все кнопки
//     button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
//         e.preventDefault(); // Предотвращаем дефолтное поведение браузера
//         popupBg.classList.add('active'); // Добавляем класс 'active' для фона
//         popup.classList.add('active'); // И для самого окна
//         hiddenNav.classList.add('hidden'); // Добавляем класс hidden для навигации
//     })
// });

// closePopupButton.addEventListener('click', () => { // Вешаем обработчик на крестик
//     popupBg.classList.remove('active'); // Убираем активный класс с фона
//     popup.classList.remove('active'); // И с окна
//     hiddenNav.classList.remove('hidden'); // Убираем класс hidden с навигации
//     document.querySelector(".input-search").value = ""; //очищаем инпут
// });

// document.addEventListener('click', (e) => { // Вешаем обработчик на весь документ
//     if (e.target === popupBg) { // Если цель клика - фон, то:
//         popupBg.classList.remove('active'); // Убираем активный класс с фона
//         popup.classList.remove('active'); // И с окна
//         hiddenNav.classList.remove('hidden'); // Убираем класс hidden с навигации
//         document.querySelector(".input-search").value = "";
//     }
// });

// pop up


// Input type file
// function uploadFile(target) {
//     document.getElementById("file-name").innerHTML = target.files[0].name;
// }
// Input type file



// copy url scrypt
// let copyUrlBtn = document.querySelector('#copyUrlBtn');

// if (copyUrlBtn) {
//     copyUrlBtn.addEventListener('click', () => {
//         let tempInput = document.createElement('textarea');

//         tempInput.style.fontSize = '12pt';
//         tempInput.style.border = '0';
//         tempInput.style.padding = '0';
//         tempInput.style.margin = '0';
//         tempInput.style.position = 'absolute';
//         tempInput.style.left = '-9999px';
//         tempInput.setAttribute('readonly', '');

//         tempInput.value = window.location.href;

//         copyUrlBtn.parentNode.appendChild(tempInput);

//         tempInput.select();
//         tempInput.setSelectionRange(0, 99999);

//         document.execCommand('copy');

//         tempInput.parentNode.removeChild(tempInput);
//     });
// }
// copy url scrypt


// Number masked js
// var phoneSelector = document.querySelector('.mask-phone__js');
// var maskModel = {
//     mask: '+38 (000)000-00-00',
//     // lazy: false,
//     // placeholderChar: '38'
// };
// var mask = IMask(phoneSelector, maskModel);