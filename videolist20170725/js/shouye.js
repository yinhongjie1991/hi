// 头部JS
// 加入收藏
function AddFavorite(sURL, sTitle) {

    sURL = encodeURI(sURL);

    try {

        window.external.addFavorite(sURL, sTitle);

    } catch (e) {

    try {

        window.sidebar.addPanel(sTitle, sURL, "");

    } catch (e) {

        alert("加入收藏失败,请使用Ctrl+D进行添加,或手动在浏览器里进行设置.");

        }

    }

}
// 设为首页
function SetHome(url){
        if (document.all) {
            document.body.style.behavior='url(#default#homepage)';
               document.body.setHomePage(url);
        }else{
            // alert("您好,您的浏览器不支持自动设置页面为首页功能,请您手动在浏览器里设置该页面为首页!");
            alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入“about:config”并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。");
        }
    }
$(function (){
	// 点击设置为首页和加入收藏夹
	$('.add').click(function (){
		 AddFavorite();
	});
	$('.setin').click(function (){
		SetHome(this,window.location);
	})

	// 输入框部分
	$('.sear-box').focus(function (){
		$(this).css({
			'border-top': '2px solid #999',
			'border-bottom': '2px solid #999',
				'background':'#FFFFCC'
		})
	})
	$('.sear-box').blur(function (){
		$(this).css({
			'borderTop': '',
			'borderBottom': '',
			'background':''
		})
	})
	// 搜索框点击部分代写
	// 
	$('.con-nav-us .mouse').mouseover(function (){
		$(this).find('.show').show().stop().animate({
			height:'150px'
		},1000,'easeInOutBack')
	})
	$('.con-nav-us .mouse').mouseout(function (){
			$(this).find('.show').stop().animate({
				height:'0px'
			},1000,'easeInOutBack')	
		})
	$('.con-nav-us .mouse1').mouseover(function (){
		$(this).find('.show1').show().stop().animate({
			height:'120px'
		},1000,'easeInOutBack')
	})
	$('.con-nav-us .mouse1').mouseout(function (){
			$(this).find('.show1').stop().animate({
				height:'0px'
			},1000,'easeInOutBack')	
		})
	
})

// 新闻内容切换
$(function (){
	$('.tog_tab_title h3').mouseover(function (){
		i=$(this).index();
		$(this).addClass('bort').siblings().removeClass('bort');
		$('.tab-uus li').eq(i).show().siblings().hide();
	})
// 微信热点切换
$('.wx-tab h3 ').mouseover(function (){
		i=$('.wx-tab h3 ').index(this);
		$(this).addClass('wx-d').siblings().removeClass();
		$('.group .gro').eq(i).show().siblings().hide();
		$(this).children('a').eq(0).css('color','red');
		$(this).siblings().children('a').eq(0).css('color','#000');
	})
// 网站公告
$('.wx-tab1 h3').mouseover(function (){
		i=$('.wx-tab1 h3').index(this);
		$(this).addClass('wx-d').siblings().removeClass();
		$(' .gro1').eq(i).show().siblings().hide();
		$(this).children('a').eq(0).css('color','red');
		$(this).siblings().children('a').eq(0).css('color','#000');

		// console.log($(this).children());
	})
// 古村记忆
$('.tog-yt h3').mouseover(function (){
	i=$('.tog-yt h3').index(this);
 	$(this).addClass('bort').siblings().removeClass();
	$('#tab-pub li').eq(i).show().siblings().hide();
})

// 便民服务
$('.fuwu .a1').hover(function (){
	$('.fu_icon1').css('animation','flash 1s 0.5s infinite')
},function (){
	$('.fu_icon1').css('animation','')

})
// 回到顶部
	$(window).scroll(function (){
		var sct=$(window).scrollTop();
		// console.log(sct);
		if (sct>=2000) {
			$('#gotop1').show();
			// 返回顶部，绑定gotop1图标和gotop2文字事件
			$("#gotop1,#gotop2").click(function(e) {
			   TweenMax.to(window, 1.5, {scrollTo:0, ease: Expo.easeInOut});
			   var huojian = new TimelineLite();
				huojian.to("#gotop1", 1, {rotationY:720, scale:0.6, y:"+=40", ease:  Power4.easeOut})
				.to("#gotop1", 1, {y:-1000, opacity:0, ease:  Power4.easeOut}, 0.6)
				.to("#gotop1", 1, {y:0, rotationY:0, opacity:1, scale:1, ease: Expo.easeOut, clearProps: "all"}, "1.4");
			 });
		}else{
			$('#gotop1').hide();
		}
	})
	

	// 图片展示部分
	$('.look_le').hover(function (){
		$('.look_desc').stop().animate({
			bottom:'0'
		},500)
	})
	// 专题部分
	$('.hot_focus_bt_list li').hover(function (){
		$(this).find('.hot_focus_bt_item').stop().show().animate({
			'height':'65px'
		},50);
		$(this).siblings().find('.hot_focus_bt_item').stop().hide().animate({
			'height':'0px'
		},50);
		$(this).find('.sd').css('z-index','2');
		$(this).siblings().find('.sd').css('z-index','0');

	})
	
})
//标签页式导航begin
// var bofang="rtmp://xv.bzcm.net/livepkgr/lbwb1704?adbe-live-event=liveevent";
// var abtn=document.getElementById('play-controls');
// var idLoadHandler=false;
// 	var flashvars={
// 		f:bofang,
// 		c:0,
// 		p:1,
// 		loaded:'loadHandler'		
// 		};
// 	// var video=['http://movie.ks.js.cn/flv/other/1_0.mp4->video/mp4'];
// 	//CKobject.embedSWF('http://www.bzcm.net/player/ckplayer.swf','a1','ckplayer_a1','0','0',flashvars);
	
// 	CKobject.embed('http://www.bzcm.net/xinplayer/ckplayer.swf','a1','ckplayer_a1','0','0',false,flashvars,video)
// 	function loadHandler(){
// 		idLoadHandler=true;
// 		$(".zhibo").text("正在播放");
// 	}
	
// 	function playorpause(){
// 		if(idLoadHandler){
// 			CKobject.getObjectById('ckplayer_a1').playOrPause();
// 			$("#play-controls>div").toggleClass("play-pause");
// 			switch ($(".zhibo").text()){
// 				case "正在播放":
// 				$(".zhibo").text("播放暂停");
// 				break;
// 				case "播放暂停":
// 				$(".zhibo").text("正在播放");
// 				break;
// 				default:
// 				ooo;
// 			}
// 		}
// 		else{
// 			alert('播放器还未加载，不能进行控制');
			
// 		}
// 	}
// 	$(".volume-controls").click(function(){
// 			$("#example-21").toggle();
// 			//$(".volume-controls>div").css("opacity","0.6");
			
// 	});
// 	$(".ad").click(function(){
// 			$("#example-21").toggle();
						
// 	});
// 	$('#rating-21').slidy({
// 	maxval: 20, interval: 1, defaultValue: 12, 
// 	finishedCallback: function (value) {
// 		value=value*3+40;
// 		$('#result-21').html('volume: ' + value);		
// 		CKobject.getObjectById('ckplayer_a1').changeVolume(value);
// 	}
// });
// $('#play-controls').click(function (){
// 	 playorpause();
// })
// 视觉滨州
/* ========
    Debugger plugin, simple demo plugin to console.log some of callbacks
    ======== */
    Swiper.prototype.plugins.debugger = function (swiper, params) {
        if (!params) return;
        // Need to return object with properties that names are the same as callbacks
        return {
            onInit: function (swiper){
                // console.log('onInit');
            },
            onClick: function (swiper, e) {
                // console.log('onClick');
            },
            onTap: function (swiper, e) {
                // console.log('onTap');
            },
            onDoubleTap: function (swiper, e) {
                // console.log('onDoubleTap');
            },
            onSliderMove: function (swiper, e) {
                // console.log('onSliderMove');
            },
            onSlideChangeStart: function (swiper) {
                // console.log('onSlideChangeStart');
            },
            onSlideChangeEnd: function (swiper) {
                // console.log('onSlideChangeEnd');
            },
            onTransitionStart: function (swiper) {
                // console.log('onTransitionStart');
            },
            onTransitionEnd: function (swiper) {
                // console.log('onTransitionEnd');
            },
            onReachBeginning: function (swiper) {
                // console.log('onReachBeginning');
            },
            onReachEnd: function (swiper) {
                // console.log('onReachEnd');
            }
        };
    };
     var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        autoplay:1000,
        loop:true,
        // Enable debugger
        debugger: true
    });
  $(function(){

	$('#Banner_simple').allinone_thumbnailsBanner({

		skin: 'simple',

		numberOfThumbsPerScreen:7,

		width: 1150,

		height: 384,

		thumbsReflection:0,

		defaultEffect: 'random'

	});	

});