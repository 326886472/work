$(function(){
	$.ajax({
		type: "GET",
		url: "ajax/message.json",
		dataType: "json",
		success: function(data){
			data.about_info.forEach(function(item){
				$("#about_info").append("<p>"+item+"</p>");
			});
			$("#skill_info").append("<p>"+data.skill_info+"</p>");
			$(".skill_int").append("<ul></ul>");
			data.angularJs.forEach(function(item){
				$("#skill_int1 ul").append("<li>"+item+"</li>");
			});
			data.html.forEach(function(item){
				$("#skill_int2 ul").append("<li>"+item+"</li>");
			});
			data.css.forEach(function(item){
				$("#skill_int3 ul").append("<li>"+item+"</li>");
			});
			data.javaScript.forEach(function(item){
				$("#skill_int4 ul").append("<li>"+item+"</li>");
			});
			$("#exp_info").append("<p>"+data.exp_info+"</p>");
			data.contact_info.forEach(function(item){
				$("#contact_info ul").append("<li>"+item+"</li>");
			});
		}
	});
    $('#dowebok').fullpage({
		scrollingSpeed: 400,
		css3: true,
		resize: true,
		anchors: ["page1","page2","page3","page4","page5","page6"],
		verticalCentered: false,
		afterRender: function(){
			$("#home").css({"display":"block"}).addClass("home_zoom");
			$("aside").css({"top":($(".active").height()-$("aside").height())/2});
			$("header").before("<div id='header' style='opacity:0'></div>");	
			$("#home_head").css({"margin-top":"100px"});
			$("header").animate({opacity:"1"},1000,function(){
				$("#header").css({"opacity":".9"});
				$("#home_info1").fadeIn(700,function(){
					$(this).next().animate({width:"800px"},700,function(){
						$("#home_info2").fadeIn(450,function(){
							$(this).next().fadeIn(450,function(){
								$(this).next().fadeIn(450,function(){
									$(this).next().fadeIn(450,function(){
										$("aside").fadeIn(300);
									});
								});
							});
						});
					});
				});
			});	
			$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			
		},
		afterLoad: function(anchorLink,index){
			if(index==1){
				$("aside a").eq(0).addClass("selected").siblings().removeClass("selected");
			}
			if(index==2){
				$("aside a").eq(1).addClass("selected").siblings().removeClass("selected");
				$("#about_content h1").after("<div class='title_en'><h2>· About me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});
				$("#about_info").animate({width:"800px",marginTop:"0",marginBottom:"0"},700,'easeOutElastic',function(){
					$("#about_info p").eq(0).animate({bottom:"0"},700,function(){
						$("#about_info p").eq(1).animate({bottom:"0"},700,function(){
							$("#about_info p").eq(2).animate({bottom:"0"},700,function(){
								$("#about_info p").eq(3).animate({bottom:"0"},700);
							});
						});
					});
				});	
			}
			if(index==3){
				$("aside a").eq(2).addClass("selected").siblings().removeClass("selected");
				$("#skill_content h1").after("<div class='title_en'><h2>· Skill ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				$(".skill_list_content").addClass("skill_scale");
			}
			if(index==4){
				$("aside a").eq(3).addClass("selected").siblings().removeClass("selected");
				$("#exp_content h1").after("<div class='title_en'><h2>· Experience ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".exp_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
                });
				$("#exp_list_to").fadeIn(800).delay(500).fadeTo(300,0.3);
			}
			if(index==5){
				$("aside a").eq(4).addClass("selected").siblings().removeClass("selected");
				$("#demo_content h1").after("<div class='title_en'><h2>· Demo ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$(".demo_scale").each(function() {
					var $this=$(this);
					if(!$this.hasClass("b_to_t")){
						i++;
						setTimeout(function(){
					   $this.addClass("b_to_t");
					   },200*i);
					}
				})
			}
			if(index==6){
				$("aside a").eq(5).addClass("selected").siblings().removeClass("selected");
				$("#contact_content h1").after("<div class='title_en'><h2>· Contact me ·</h2></div>");
				$(".title_en").animate({width:"130px"},800,function(){
					$(".title_en h2").slideDown(400);
				});	
				var i=-1;
				$("#contact_head1").addClass("b_to_t");
				$("#contact_head2 span").each(function(){
					var $this=$(this);
					if(!$this.hasClass("fade_in")){
						i++;
						setTimeout(function(){
					   $this.addClass("fade_in");
					   },200*i);
					}
				});
				var j=-1;
				setTimeout(function(){
						$(".contact_scale").each(function(){
							var $this=$(this);
							if(!$this.hasClass("fade_in")){
								j++;
								setTimeout(function(){
					   				$this.addClass("fade_in");
					   			},350*j);
							}
						});
				},70);
			}
		},
		onLeave:function(index){
			if(index==2||index==3||index==4||index==5||index==6){
				$(".title_en").remove();	
			}
		}
	});
});

//顶部标题文字切换
	$("#header_p").mouseover(function(){
		$("#header_p1").html("Resume");
		$("#header_p2").html("前端工程师");
	}).mouseout(function(){
		$("#header_p1").html("曾庆余");
		$("#header_p2").html("个人简历");	
	});
//顶部导航取消
	$("header nav a:not(':first')").click(function(){
		alert("正在努力建设中...请稍等");
		return false;
	});
//侧边导航文字切换
	$("aside a").hover(function(){
		$(this).find("b").fadeToggle(200,"easeInOutCubic");
	});
// 头像切换
	$("#home_photo2").hover(function(){
		$(this).fadeTo(800,1);
		},function(){
			$(this).stop(true,false).fadeTo(800,0);
	});
// 技能明细切换
	$(".skill_icon").click(function(){
		$(".skill_int").each(function(){
			if($(this).is(":visible")){
				$(this).slideUp(200);
				$(this).prev().removeClass("skill_flag_scale");
			}
		});
		if($(this).siblings(".skill_int").is(":hidden")){
			$(this).siblings(".skill_int").slideDown(400);
			$(this).siblings(".skill_flag").addClass("skill_flag_scale");
		}else{
			$(this).siblings(".skill_int").slideUp(200);
			$(this).siblings(".skill_flag").removeClass("skill_flag_scale");
		}
	});
// 图片轮播
	$("#exp_list_slider").width($(".exp_list").width());
	$("#exp_list_content").width($(".exp_list").width()*3);
	$("#exp_list_slider_content").mouseenter(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,1);
	}).mouseleave(function(){
		$("#exp_list_to").stop(true,false).fadeTo(700,0.1);
	});
	var page=1;
	$("#exp_timeline a").click(function(){
		$("#exp_list_content").stop(true,false).animate({left:-$(".exp_list").width()*$(this).index()},2000,"easeInOutCubic");
		page=$(this).index()+1;
		});
	$("#exp_list_toleft").click(function()
    {
		if(!$("#exp_list_content").is(":animated")){
			if(page==1){
				$("#exp_list_content").animate({left:"+=50"},200,function(){
					$(this).animate({left:"-=50"},200);
				});
				return false;
			}	
			$("#exp_list_content").animate({left:"+="+$(".exp_list").width()});
			page--;
		}
	});
	$("#exp_list_toright").click(function(){
		if(!$("#exp_list_content").is(":animated")){
			if(page==3){
				$("#exp_list_content").animate({left:"-=50"},200,function(){
					$(this).animate({left:"+=50"},200);
				});
				return;
			}
			$("#exp_list_content").animate({left:"-="+$(".exp_list").width()});
			page++;
		}
	});
// 时光轴
	var x=10;
	var y=20;
	$("#exp_timeline a").mouseover(function(e){
		this.aa=this.title;
		this.title="";
		$("body").append("<div class='exp_timeline_title'>"+this.aa+"</div>");	
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title=this.aa;
		$(".exp_timeline_title").remove();
	}).mousemove(function(e){
		$(".exp_timeline_title").css({
			"top":e.pageY+y+"px",
			"left":e.pageX+x+"px"
		});
	}).click(function(){
		return false;
	});
////表
$(function() {
	var canvas = document.getElementById('canvas');
			//			console.dir(canvas);
			//获得一个画笔对象
	var ctx = canvas.getContext('2d');
	//改变坐标轴的基准点
	ctx.translate(77, 77);

	function deg2pi(deg) {
		return deg * Math.PI / 180;
	}

	function pan() {
		ctx.save();
		ctx.translate(300, 150);
		ctx.beginPath();
		for(var i = 0; i < 60; i++) {
			ctx.moveTo(0, -75);
			ctx.lineCap='round';
			if(i % 5 == 0) {
				ctx.lineWidth = 5;
				ctx.strokeStyle='#e5004f';
				ctx.lineTo(0, -60);
			} else {
				ctx.lineWidth = 1;
				ctx.strokeStyle='#000';
				ctx.lineTo(0, -65);
			}
			//旋转画布
			ctx.rotate(deg2pi(6));
		}
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
	}
	
//	pan();
	function fenzhen(deg) {
		//指针 分
		ctx.translate(300, 150);
		ctx.save();
		ctx.beginPath();
		ctx.rotate(deg2pi(deg));
		ctx.moveTo(0, 10);
		ctx.lineCap = 'round';
		ctx.lineTo(0, -50);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
		//圆盘

		ctx.beginPath();
		ctx.fillStyle='#e5004f'
		ctx.arc(0, 0, 5, 0, deg2pi(360));
		ctx.fill();
		ctx.closePath();
		ctx.restore();
	}
	function miaozhen(deg) {
		//指针 秒

		ctx.save();
		ctx.translate(300, 150);
		ctx.lineWidth=1;
		ctx.lineCap='round';
		ctx.beginPath();
		ctx.rotate(deg2pi(deg));
		ctx.moveTo(0, 10);
		ctx.lineCap = 'round';
		ctx.lineTo(0, -75);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
		
		
		ctx.restore();
	}
	function shizhen(deg) {
		//指针 时
		ctx.save();
		ctx.beginPath();
		ctx.lineWidth=3;
		ctx.lineCap='round';
		ctx.rotate(deg2pi(deg));
		ctx.moveTo(0, 10);
		ctx.lineCap = 'round';
		ctx.lineTo(0, -40);
		ctx.stroke();
		ctx.closePath();
		ctx.restore();
		
		

		ctx.restore();
	}
	function clear(){
		ctx.save;
		ctx.translate(-300,-150);
		ctx.clearRect(0,0,600,300);
		ctx.restore();
	}
//	zhen();
	//用来保存坐标系状态，旋转状态，缩放状态，以及画笔状态（比如画笔的 fillstyle）
	ctx.save();
	//用来恢复坐标系状态，旋转状态，缩放状态，以及画笔状态（比如画笔的 fillstyle）
	ctx.restore();
	setInterval(function(){
		var t=new Date();
		var s=t.getSeconds();
		var ms=t.getMilliseconds();
		var m=t.getMinutes();
		var h=t.getHours();
		var rands=360*(s*1000+ms)/60000;
		var randm=360*(s+m*60)/3600 
		var randh=360*(s+m*60+h*3600)/(12*3600)
		clear();
		pan();
		miaozhen(rands);
		fenzhen(randm);
		shizhen(randh);
	},1)
})
////内容适应居中
	$(function(){
		$("aside").css({"top":($(".active").height()-$("aside").height())/2});
		$("#home_content").css({"padding-top":($(".active").height()-$("#home_content").height())/6});
		$("#about_content").css({"padding-top":($(".active").height()-$("#about_content").height())/6});
		$("#skill_content").css({"padding-top":($(".active").height()-$("#skill_content").height())/6});
		$("#exp_content").css({"padding-top":($(".active").height()-$("#exp_content").height())/6});
		$("#demo_content").css({"padding-top":($(".active").height()-$("#demo_content").height())/6});
	});
	




$(function(){
	function hasClassName(inElement, inClassName)
        {
            var classStr = inElement.className;
            var classArr = classStr.split(' ');
//            console.log(classArr);
            for(var i=0;i < classArr.length ; i++){
                if(inClassName == classArr[i]){
                    return true;
                }
            }
            return false;
        }

        function addClassName(inElement, inClassName)
        {
            if (!hasClassName(inElement, inClassName))
                inElement.className = [inElement.className, inClassName].join(' ');
        }

        function removeClassName(inElement, inClassName)
        {
            if (hasClassName(inElement, inClassName)) {
                var j = 0;
                var newClassArr =[];
                var classArr = inElement.className.split(' ');
                for(var i = 0;i<classArr.length;i++){
                    if(classArr[i]==inClassName) {
                        continue;
                    }
                    newClassArr[j] = classArr[i];
                    j++
                }

                inElement.className = newClassArr.join(' ');
//                第二种可以removeClass()
//                inElement.className = inElement.className.replace(inElement.className.match(inClassName),'');
            }
        }

        function toggleClassName(inElement, inClassName)
        {
            if (hasClassName(inElement, inClassName))
                removeClassName(inElement, inClassName);
            else
                addClassName(inElement, inClassName);
        }

        function toggleShape()
        {
            var shape = document.getElementById('shape');
            if (hasClassName(shape, 'ring')) {
                removeClassName(shape, 'ring');
                addClassName(shape, 'cube');
            } else {
                removeClassName(shape, 'cube');
                addClassName(shape, 'ring');
            }

            //转换样式translateZ（）导致的感觉太近
            var stage = document.getElementById('stage');
            if (hasClassName(shape, 'ring'))
                stage.style.webkitTransform = 'translateZ(-200px)';
	          

            else
                stage.style.webkitTransform = '';
	   
        }

        function toggleBackfaces() {
            var backfacesVisible = document.getElementById('backfaces').checked;
            var shape = document.getElementById('shape');
            addClassName(shape,'backfaces')
//          if (backfacesVisible)
//              removeClassName(shape, 'backfaces');
//          else
//              addClassName(shape, 'backfaces');
        }
})
//音乐
var v=$("audio").get(0);
v.play();
