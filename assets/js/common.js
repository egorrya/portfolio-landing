jQuery(window).scroll(function(){
	var $sections = $('section');
	$sections.each(function(i,el){
		var top  = $(el).offset().top-200;
		var bottom = top +$(el).height();
		var scroll = $(window).scrollTop();
		var id = $(el).attr('id');
		if( scroll > top && scroll < bottom){
			$('a.active').removeClass('active');
			$('a[href="#'+id+'"]').addClass('active');
		}
	})
});

$(document).ready(function(){

	$("nav").on("click","a", function (event) {
        // исключаем стандартную реакцию браузера
        event.preventDefault();

        // получем идентификатор блока из атрибута href
        var id  = $(this).attr('href'),

        // находим высоту, на которой расположен блок и минусуем хедер
        top = $(id).offset().top - 60;

        // анимируем переход к блоку, время: 600 мс
        $('body,html').animate({scrollTop: top}, 600);
    });

	// animate css

	$(".main-nav__items").animated("fadeInRight");
	$(".home-section__title").animated("flash");
	$(".home-section__desc").animated("flash");
	$(".about__langs").animated("slideInLeft");
	$(".service__content").animated("fadeInUp");

	// counter for 10000 sec

	$('.waiting__counter').each(function() {
		var $this = $(this),
		countTo = $this.attr('data-count');

		$({ countNum: $this.text()}).animate({
			countNum: countTo
		},

		{
			duration: 10000000,
			easing:'linear',
			step: function() {
				$this.text(Math.floor(this.countNum));
			},
			complete: function() {
				$this.text(this.countNum);
			}
		});
	});

// slider

var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var next = document.getElementById('next');
var previous = document.getElementById('previous');

function nextSlide() {
	goToSlide(currentSlide+1);
}

function previousSlide() {
	goToSlide(currentSlide-1);
}

function goToSlide(n) {
	slides[currentSlide].className = 'slide';
	currentSlide = (n+slides.length)%slides.length;
	slides[currentSlide].className = 'slide showing';
}

next.onclick = function() {
	nextSlide();
};
previous.onclick = function() {
	previousSlide();
};
});	
