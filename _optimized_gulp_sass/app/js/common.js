$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


//owl carousel
$(".slider_top").owlCarousel({
	items: 1,
	autoplay: true,
	dots: true,
	loop: true
});


//yandex maps
var myMap;
ymaps.ready(init);
function init () {
  myMap = new ymaps.Map('map', {
    center: [56.14694844, 47.24729561],
    zoom: 15,
    controls: []
  });

  myMap.geoObjects.add(new ymaps.Placemark([56.148588, 47.24206]));

};

//menu button
	$('.toggle-menu').on('click', function(event){
		event.preventDefault();
		$(this).toggleClass('toggle-menu_on');
	});

//scroll
$('.main-menu').onePageNav({
	currentClass: 'menu__item_active'
});

// gallery pop-up
$('.gallery__item').fancybox({
	padding: 0,
	helpers: {
   	thumbs: {
       width  : 60,
       height : 60,
   	}
	}
});






});