$(function() {
    var mi = {};
    mi={
        init: function() {
            this.lf();
            this.star();
            this.floorUp();
            this.floorBoxShow();
            this.contentsLf();
        },
        lf: function() {
            var pre = $('.pre'),
                next = $('.next'),
                imgId = 0,
                dot = $('.small-dot li'),
                imgLen = $('.lf-box a').length;

            function imgChange(imgId) {
                $('.lf-box a').hide();
                $('.lf-box a').eq(imgId).fadeIn(500);
            }

            function dotChange(imgId) {
                dot.css('background', 'rgba(0,0,0,0.6)');
                dot.eq(imgId).css('background', '#fff');
            }
            pre.click(function() {
                imgId--;
                if (imgId === -1) {
                    imgId = 5;
                }
                imgChange(imgId);
                dotChange(imgId);
            });
            next.click(function() {
                imgId++;
                if (imgId === 6) {
                    imgId = 0;
                }
                imgChange(imgId);
                dotChange(imgId);
            });
            $('.small-dot li').click(function() {
                imgId = $('.small-dot li').index(this);
                imgChange(imgId);
                dotChange(imgId);
            });
            setInterval(function(){
            	imgId++;
            	if(imgId===-1){
            		imgId=5;
            	}else if(imgId===6){
            		imgId=0;
            	}
            	imgChange(imgId);
                dotChange(imgId);
            },5000)
        },
        star:function(){
        	var pre = $('.star-pre'),
        		next = $('.star-next'),
        		starUl=$('.mi-star-div ul'),
        		starUlLen=starUl.length,
        		starId=0;
        	pre.click(function(){
        		console.log('1');
        		starUl.animate({
        			"marginLeft":"0"
        		},500);
        		starId--;
        		if(starId<=0){
        			starId=0;
        			next.css({"color":"grey","cursor":"dsiabled"});
        		}
        	});
        	next.click(function(){
        		starUl.animate({
        			"marginLeft":"-1226px"
        		},500);
        		starId++;
        		if(starId>=1){
        			starId=1;
        			next.css({"color":"grey","cursor":"dsiabled"});
        		}
        	});
        },
        floorUp:function(){
        	var _floorUp=$('.floor-up'),
        		_floorLi=$('.floor-content-right li');
        		_floorLi.hover(function(){
        			var thisLi=$('.floor-content-right li').index(this);
        			_floorUp.eq(thisLi).stop().slideDown(500);
        		},function(){
        			var thisLi=$('.floor-content-right li').index(this);
        			_floorUp.eq(thisLi).stop().slideUp(500);
        		});
        },
        floorBoxShow:function(){
        	var _lis=$('.floor-nav li'),
        		_box=$('.floor-content-right');
        	_lis.hover(function(){
        		var _thisLi=_lis.index(this);
        		_box.hide();
        		_box.eq(_thisLi).show();
        		_lis.css({"color":"#424242","border-bottom":"2px transparent solid"});
        		_lis.eq(_thisLi).css({"color":"#ff6700","border-bottom":"2px #ff6700 solid"});
        	})
        },
        contentsLf:function(){
        	var _pre=$('.floor-contents-pre'),
        		_next=$('.floor-contents-next'),
        		_liId=0,
        		_lis=$('.floor-contents-ul>li'),
        		_thisLen,
        		_thisWarp,
        		_thisOutLi;
        	_pre.click(function(){
        		_thisOutLi=_lis.index(this);
        		_thisWarp=_lis.eq(_thisOutLi).find(".floor-contents-warp");
        		_thisLen=_thisWarp.find("li").length;
        		_liId--;	
        		if(_liId===-1){
        			_liId=_thisLen-1;
        		}
        		_thisWarp.animate({
        			"margin-left":-_lis.outerWidth()*_liId+"px"
        		},500);
        	});
        	_next.click(function(){
        		_thisOutLi=_lis.index(this);
        		_thisWarp=_lis.eq(_thisOutLi).find(".floor-contents-warp");
        		_thisLen=_thisWarp.find("li").length;
        		_liId++;
        		if(_liId===_thisLen){
        			_liId=0;
        		}
        		_thisWarp.animate({
        			"margin-left":-_lis.outerWidth()*_liId+"px"
        		},500);
        	});
        }
    }
    mi.init();
})
