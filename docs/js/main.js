$(window).load(function() {
	$(".preloader").fadeOut("slow", function(){
		$(".preloader-left").addClass("slide-left");
		$(".preloader-right").addClass("slide-right");
		$("#portfolio-case").addClass("full-portfolio");
	});
});

$('.menu-item').on( 'click', function() {
	
	//Portfolio masonry
	var $container = $('#projects');
	$container.isotope({
		masonry: {
			columnWidth: 0
		},
		itemSelector: '.project'
	});
	
	//Portfolio filters
	$('#filters').on( 'click', 'li', function() {
		$('#filters li').removeClass('active');
		$(this).addClass('active');
		var filterValue = $(this).attr('data-filter');
		$container.isotope({ filter: filterValue });
	});
	
});

//Portfolio Modal
$('.open-project').on('click', function(){
	var projectUrl = $(this).attr("href");
	
	var project =
		'<div class="modal fade" id="project-modal">' +
			'<div class="inline-menu-container">' +
				'<a id="modal-close" class="close" data-dismiss="modal">' +
					'<span aria-hidden="true">&times;</span>' +
				'</a>' +
			'</div>' +
			'<div class="modal-dialog">' +
				'<div class="modal-content"></div>' +
			'</div>' +
		'</div>';
	
	$(project).modal({
		remote: projectUrl + ' #project'
	})
	
	return false;
	
});

//Blog post Modal
$('.open-post').on('click', function(){
	var postUrl = $(this).attr("href");
	
	var post = '<div class="modal" id="post-modal"><div class="inline-menu-container"><a id="modal-close" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span></a></div><div class="modal-dialog"><div class="modal-content"></div></div></div>';
	
	$(post).modal({
		remote: postUrl + ' #post'
	})
	
	return false;
	
});

//On Click Open Menu Items
$('.menu-item').on( 'click', function() {
	$('.name-block').addClass('reverse');
	$('.name-block-container').addClass('reverse');
	$('.menu-blocks').addClass('hidex');
	$('.inline-menu-container').removeClass('hidex');
	$('.inline-menu-container').addClass('showx');
});
//On Click Open About/Resume Block
$('.about').on( 'click', function() {
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.content-blocks.about').removeClass('hidex');
	$('.content-blocks.about').addClass('showx');
	$('.menu-item').removeClass('active');
	$('.menu-item.about').addClass('active');
});
//On Click Open Portfolio Block
$('.portfolio').on( 'click', function() {
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.content-blocks.portfolio').removeClass('hidex');
	$('.content-blocks.portfolio').addClass('showx');
	$('.menu-item').removeClass('active');
	$('.menu-item.portfolio').addClass('active');
});
//On Click Open Blog Block
$('.blog').on( 'click', function() {
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.content-blocks.blog').removeClass('hidex');
	$('.content-blocks.blog').addClass('showx');
	$('.menu-item').removeClass('active');
	$('.menu-item.blog').addClass('active');
});
//On Click Open Contact Block
$('.contact').on( 'click', function() {
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.content-blocks.contact').removeClass('hidex');
	$('.content-blocks.contact').addClass('showx');
	$('.menu-item').removeClass('active');
	$('.menu-item.contact').addClass('active');
});
//On Click Open Demystify Block
$('.demystify').on( 'click', function() {
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.content-blocks.demystify').removeClass('hidex');
	$('.content-blocks.demystify').addClass('showx');
	$('.menu-item').removeClass('active');
	$('.menu-item.demystify').addClass('active');
});

//On Click Close Blocks
$('#close').on( 'click', function() {
	$('.name-block').removeClass('reverse');
	$('.name-block-container').removeClass('reverse');
	$('.menu-blocks').removeClass('hidex');
	$('.content-blocks').removeClass('showx');
	$('.content-blocks').addClass('hidex');
	$('.inline-menu-container').removeClass('showx');
	$('.inline-menu-container').addClass('hidex');
	$('.menu-item').removeClass('active');
});


//Placeholder
$('input,textarea').on( 'focus', function(){
	$(this).data('placeholder',$(this).attr('placeholder'))
	$(this).attr('placeholder','');
});
$('input,textarea').blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
});

$('input, textarea').placeholder();


const TxtType = function (el, toRotate, period) {
	this.toRotate = toRotate;
	this.el = el;
	this.loopNum = 0;
	this.period = parseInt(period, 10) || 2000;
	this.txt = '';
	this.tick();
	this.isDeleting = false;
}

TxtType.prototype.tick = function() {
	const i = this.loopNum % this.toRotate.length
	const fullTxt = this.toRotate[i]
	
	if (this.isDeleting) {
		this.txt = fullTxt.substring(0, this.txt.length - 1);
	} else {
		this.txt = fullTxt.substring(0, this.txt.length + 1);
	}
	
	$(this.el).html('<span class="wrap">' + this.txt + '</span>');
	
	const that = this
	let delta = 200 - Math.random() * 100
	
	if (this.isDeleting) { delta /= 2; }
	
	if (!this.isDeleting && this.txt === fullTxt) {
		delta = this.period;
		this.isDeleting = true;
	} else if (this.isDeleting && this.txt === '') {
		this.isDeleting = false;
		this.loopNum++;
		delta = 500;
	}
	
	setTimeout(function() {
		that.tick();
	}, delta);
};

$(document).ready(function() {
	$('.typewrite').each(function() {
		const toRotate = $(this).attr('data-type')
		const period = $(this).attr('data-period')
		if (toRotate) {
			new TxtType(this, JSON.parse(toRotate), period);
		}
	});
	
	// INJECT CSS
	$('<style>')
		.prop('type', 'text/css')
		.html('.typewrite > .wrap { border-right: 0.4em solid #fff; animation: blink 0.8s infinite; } @keyframes blink { 0%, 50% { border-color: #fff; } 51%, 100% { border-color: transparent; }}')
		.appendTo('body');
});

      