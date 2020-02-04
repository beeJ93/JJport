$(document).ready(function(){
	/*GNB메뉴*/
	$('.gnbopen').click(function(){
		$('.gnb').show();
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$('#gnb').on('scroll touchmove mousewheel', function(event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
		$('.gnbopen').hide();
		$('.gnbclose').show();
	});
	$('.gnbclose').click(function(){
		$('.gnb').hide();
		$('html, body').css({'overflow': 'auto', 'height': '100%'});
		$('#element').off('scroll touchmove mousewheel');
		$('.gnbclose').hide();
		$('.gnbopen').show();
	});
	$('.gnb ul li a').click(function(){
		$('.gnb').hide();
		$('html, body').css({'overflow': 'auto', 'height': '100%'});
		$('#element').off('scroll touchmove mousewheel');
		$('.gnbclose').hide();
		$('.gnbopen').show();
	});
	
	/*스크롤 탑메뉴*/
	var _lastScroll = 0,
        _intDelta = 0;
    $("#laout-box").scroll(function (event) {
        var intDelta = _lastScroll - $(this).scrollTop(); 	// 이동방향을 나타낸다
        if (0 > (_intDelta ^ intDelta)) { 			// (_intDelta ^ intDelta) 값이 음수로 나올경우 이동방향이 바뀌었다는 표시.
            console.log("scrollTop = " + $(this).scrollTop() + ", _intDelta=" + _intDelta + ", intDelta=" + intDelta);
            if (_lastScroll > $(this).scrollTop()) {

                $("#laout-box .mover").dequeue().stop().animate({
                    "top": "0px"
                }, 500);
            } else if (_lastScroll < $(this).scrollTop()) {
                $("#laout-box .mover").dequeue().stop().animate({
                    "top": "-80px"
                }, 500);
            }
        }
        _lastScroll = $(this).scrollTop();
        _intDelta = intDelta;
    });
	
	/*스킬그래프*/
	$('.skillDiv').each(function(){
		var hightset_skilh3 = 0;
		var skilh3 = $('.skillDiv > figure > figcaption > h3');
		$(skilh3, this).each(function(){
			if($(this).height() > hightset_skilh3)
			hightset_skilh3 = $(this).height();
		});
		$(skilh3, this).height(hightset_skilh3);
		
		var hightset_skiltxt = 0;
		var skiltxt = $('.skilltxt');
		$(skiltxt, this).each(function(){
			if($(this).height() > hightset_skiltxt)
			hightset_skiltxt = $(this).height();
		});
		$(skiltxt, this).height(hightset_skiltxt);
	});
	
	
	jQuery(document).ready(function	(){
		var el;
		var options;
		var canvas;
		var span;
		var ctx;
		var radius;

		var createCanvasVariable = function(id){  // get canvas
			el = document.getElementById(id);
		};

		var createAllVariables = function(){
			options = {
				percent:  el.getAttribute('data-percent') || 25,
				size: el.getAttribute('data-size') || 165,
				lineWidth: el.getAttribute('data-line') || 15,
				rotate: el.getAttribute('data-rotate') || 0,
				color: el.getAttribute('data-color')
			};

			canvas = document.createElement('canvas');
			span = document.createElement('span');
			span.textContent = options.percent + '%';

			if (typeof(G_vmlCanvasManager) !== 'undefined') {
				G_vmlCanvasManager.initElement(canvas);
			};

			ctx = canvas.getContext('2d');
			canvas.width = canvas.height = options.size;

			el.appendChild(span);
			el.appendChild(canvas);

			ctx.translate(options.size / 2, options.size / 2); // change center
			ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

			radius = (options.size - options.lineWidth) / 2;
		};


		var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(0, percent || 1), 1);
			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
			ctx.strokeStyle = color;
			ctx.lineCap = 'square'; // butt, round or square
			ctx.lineWidth = lineWidth;
			ctx.stroke();
		};

		var drawNewGraph = function(id){
			el = document.getElementById(id);
			createAllVariables();
			drawCircle('#efefef', options.lineWidth, 100 / 100);
			drawCircle(options.color, options.lineWidth, options.percent / 100);


		};
		drawNewGraph('graph1');
		drawNewGraph('graph2');
		drawNewGraph('graph3');
		drawNewGraph('graph4');
		drawNewGraph('graph5');
		drawNewGraph('graph6');
		drawNewGraph('graph7');
		drawNewGraph('graph8');
	});
	
	//포폴상세
	$("#portfolio .PFDiv").click(function(){
		$($(this).attr("rel")).css('bottom', '0');
		$('body').css('overflow', 'hidden');
		$('#galleryview_css .boxwrap').css('overflow-y', 'scroll');
	});
	$("#galleryview_css .gallery_close").click(function(){
		$("#galleryview_css .boxwrap").css('bottom', "-100%");
		$('body').css('overflow', 'auto');
		$('#galleryview_css .boxwrap').css('overflow', 'hidden');
	});
});