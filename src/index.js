$(document).ready(function() {

    var $item = $('.accordione-item');
    var $header = $('.accordione-header');

    $header.on('click', function() {

        if (!($(this).parent().hasClass('active'))) {
            $item.removeClass('active');
            $(this).parent().addClass('active');
            return
        }
        $(this).parent().removeClass('active');



    });



});








(function() {

    var doc = document;
    var index = 1;



    var Slider = function() {
        this.box = doc.querySelector('.slider-wrapper');
        this.slideBox = doc.querySelector('.slider-slides');
        this.slide = doc.querySelectorAll('.slider-item');
        this.btns = doc.querySelectorAll('.sliderbutton');
        this.size = this.box.clientWidth;

        this.position();
        this.carusel();

    };



    Slider.prototype.position = function() {
        var size = this.size;
        this.slideBox.style.transform = `translateX(${-index * size}px)`;
    };

    Slider.prototype.carusel = function() {
        var i,
            max = this.btns.length;
        that = this;

        for (var i = 0; i < max; i += 1) {
            that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
        }
    }

    Slider.prev = function(box) {
        box.slideBox.style.transition = `transform .7s ease-in-out`;
        var size = box.size;
        index <= 0 ? false : index--
            box.slideBox.style.transform = `translateX(${-index * size}px)`;
        box.jump()
    };

    Slider.next = function(box) {
        box.slideBox.style.transition = `transform .7s ease-in-out`;
        var max = box.slide.length;
        var size = box.size;
        index >= max - 1 ? false : index++;
        box.slideBox.style.transform = `translateX(${-index * size}px)`;
        box.jump();
    };


    Slider.prototype.jump = function() {
        var that = this;
        var size = this.size;
        this.slideBox.addEventListener('transitionend', function() {
            that.slide[index].id === `firstClone` ? index = 1 : index;
            that.slide[index].id === `lastClone` ? index = that.slide.length - 2 : index;

            that.slideBox.style.transition = `none`;
            that.slideBox.style.transform = `translateX(${-index * size}px)`;
        });


    }

    new Slider();

})()