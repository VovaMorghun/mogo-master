$(function() {

    // fixed header

    var header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();

    checkSkroll(scrollOffset);

    $(window).on('scroll', function() {

        scrollOffset = $(this).scrollTop();
        checkSkroll(scrollOffset);

    });

    function checkSkroll(scrollOffset) {

        scrollOffset >= introH ? header.addClass("fixed") :
            header.removeClass("fixed");
    };

    //toggle
    var toggle = $('#toggle');

    toggle.on('click', function() {
        toggle.toggleClass('active');
        $('#nav').toggleClass('active');
    });



    // accordion



    $("[data-collapse]").on('click', function(event) {

        event.preventDefault();
        var $this = $(this);
        blockId = $this.data('collapse');
        $this.toggleClass('active')
        $(blockId).slideToggle(500)
    });




    // scroll


    $('[data-scroll]').on('click', function(event) {

        event.preventDefault();

        var blockId = $(this).data('scroll'),
            offsetBlock = ($(blockId).offset().top)

        if (($(window).width()) < 576) {
            offsetBlock -= 300
        }
        $('#nav a').removeClass('active')
        $(this).addClass('active')


        $('html , body').animate({
            scrollTop: offsetBlock
        }, 2000)

    });



});

// // slider
// var doc = document;
// var index = 1;



// var Slider = function() {
//     this.box = doc.querySelector('.slider-wrapper');
//     this.slideBox = doc.querySelector('.slider-slides');
//     this.slide = doc.querySelectorAll('.slider-item');
//     this.btns = doc.querySelectorAll('.sliderbutton');
//     this.size = this.box.clientWidth;

//     this.position();
//     this.carusel();

// };








// Slider.prototype.position = function() {
//     var size = this.size;
//     this.slideBox.style.transform = `translateX(${-index * size}px)`;
// };

// Slider.prototype.carusel = function() {
//     var i,
//         max = this.btns.length;
//     that = this;

//     for (var i = 0; i < max; i += 1) {
//         that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
//     }
// }

// Slider.prev = function(box) {
//     box.slideBox.style.transition = `transform .7s ease-in-out`;
//     var size = box.size;
//     index <= 0 ? false : index--
//         box.slideBox.style.transform = `translateX(${-index * size}px)`;
//     box.jump()
// };

// Slider.next = function(box) {
//     box.slideBox.style.transition = `transform .7s ease-in-out`;
//     var max = box.slide.length;
//     var size = box.size;
//     index >= max - 1 ? false : index++;
//     box.slideBox.style.transform = `translateX(${-index * size}px)`;
//     box.jump();
// };


// Slider.prototype.jump = function() {
//     var that = this;
//     var size = this.size;
//     this.slideBox.addEventListener('transitionend', function() {
//         that.slide[index].id === `firstClone` ? index = 1 : index;
//         that.slide[index].id === `lastClone` ? index = that.slide.length - 2 : index;

//         that.slideBox.style.transition = `none`;
//         that.slideBox.style.transform = `translateX(${-index * size}px)`;
//     });




// }

// new Slider();











class SliderCarousel {
    constructor({
        main,
        wrap,
        position = 0,
        next,
        prev,
        slidesShow = 1,
    }) {

        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesShow = slidesShow;
        this.options = {
            position,
            widthSlides: Math.floor(100 / this.slidesShow)
        };


    }


    init() {
        this.addMyClass();
        this.addStyle();
        if (this.prev && this.next) {
            this.contrlolSlider();
        } else {
            this.addArrow();
            this.contrlolSlider();
        }

    };

    addMyClass() {
        this.main.classList.add('my-slider');
        this.wrap.classList.add('my-slider__wrap');

        for (const item of this.slides) {
            item.classList.add('my-slider__item');
        }
    };

    addStyle() {
        const style = document.createElement('style');
        style.id = 'slider-style';
        style.textContent = `
        .my-slider{
            overflow: hidden !important;
            
        }
        .my-slider__wrap{
            display: flex !important;
            transition: transform .5s !important;
            will-change: transform !important;
        }
        .my-slider__item{
            flex: 0 0  ${this.options.widthSlides }% !important;
            padding: 0 30px
            
            
        }
        `;

        document.head.appendChild(style);

    };


    contrlolSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    };

    prevSlider() {
        --this.options.position
        console.log(this.options.position)
    }

    nextSlider() {
        ++this.options.position
        console.log(this.options.position)
    }

    addArrow() {

    };


};

const caruosel = new SliderCarousel({
    main: '.slider-wrapper',
    wrap: '.slider-slides',
    next: '#next',
    prev: '#prev',
    slidesShow: 3
});

caruosel.init();