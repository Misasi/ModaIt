/**
 * Created by ezgoing on 14/9/2014.
 */

var cropbox = function(options, el){
    var el = el || $(options.imageBox),
    obj =
    {
        state : {},
        ratio : 1,
        options : options,
        imageBox : el,
        thumbBox : el.find(options.thumbBox),
        spinner : el.find(options.spinner),
        image : new Image(),
        getAvatar: function ()
        {
            var width = this.thumbBox.width(),
                height = this.thumbBox.height(),
                canvas = document.createElement("canvas"),
                dim = el.css('background-position').split(' '),
                size = el.css('background-size').split(' '),
                dx = parseInt(dim[0]) - el.width()/2 + width/2,
                dy = parseInt(dim[1]) - el.height()/2 + height/2,
                dw = parseInt(size[0]);
            dh = parseInt(size[1]);
            sh = parseInt(this.image.height);
            sw = parseInt(this.image.width);

            canvas.width = width;
            canvas.height = height;
            var context = canvas.getContext("2d");
            context.drawImage(this.image, 0, 0, sw, sh, dx, dy, dw, dh);
            var imageData = canvas.toDataURL('image/jpeg');
            return imageData;
        },
        getBlobFile: function()
        {
            var imageData = this.getAvatar();
            var b64 = imageData.replace('data:image/jpeg;base64,','');
            var binary = atob(b64);
            var array = [];
            for (var i = 0; i < binary.length; i++) {
                array.push(binary.charCodeAt(i));
            }
            return  new Blob([new Uint8Array(array)], {type: 'image/jpeg'});
        },
        zoomIn: function ()
        {
            this.ratio*=1.1;
            setBackground();
        },
        zoomOut: function ()
        {
            this.ratio*=0.9;
            setBackground();
        }
    },
    setBackground = function()
    {
		
		$('.original').html('<img src="'+ obj.image.src +'">');
		alert(obj.image.src)
		
				var w =  parseInt(obj.image.width)*obj.ratio;
        var h =  parseInt(obj.image.height)*obj.ratio;

        var pw = (el.width() - w) / 2;
        var ph = (el.height() - h) / 2;
		var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
 		var deviceAgent = navigator.userAgent.toLowerCase();
    	var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
		if(w>h||w==h){
		var dif =(614*w)/h;
		if(w>h){
			var  lef=(dif-614)/2
			if (isAndroid){
			el.css({
           /* 'background-image': 'url(' + obj.image.src + ')',
            'background-size': w +'px ' + h + 'px',
            'background-position': pw + 'px ' + ph + 'px',
            'background-repeat': 'no-repeat'});*/
			'background-image': 'url(' + obj.image.src + ')',
            'background-size':dif+'px ' + '612px',
            'background-position':lef*-1 + 'px 0px',
            'background-repeat': 'no-repeat'});
			}
			if(agentID){
				el.css({
				/* 'background-image': 'url(' + obj.image.src + ')',
				'background-size': w +'px ' + h + 'px',
				'background-position': pw + 'px ' + ph + 'px',
				'background-repeat': 'no-repeat'});*/
				'background-image': 'url(' + obj.image.src + ')',
				'background-size':dif+'px ' + '1224px',
				'background-position':lef*-1 + 'px 0px',
				'background-repeat': 'no-repeat'});
				//$('.original img').css('margin','0');
				//$('.original img').css('height',largura2);
			}
		} if (w==h){lef=0;		
				
				if (isAndroid)
				{
					el.css({
				   /* 'background-image': 'url(' + obj.image.src + ')',
					'background-size': w +'px ' + h + 'px',
					'background-position': pw + 'px ' + ph + 'px',
					'background-repeat': 'no-repeat'});*/
					'background-image': 'url(' + obj.image.src + ')',
					'background-size':dif+'px ' + '614px',
					'background-position':lef*-1 + 'px 0px',
					'background-repeat': 'no-repeat'});
					//alert('test')
				}
				if(agentID){
				el.css({
				   /* 'background-image': 'url(' + obj.image.src + ')',
					'background-size': w +'px ' + h + 'px',
					'background-position': pw + 'px ' + ph + 'px',
					'background-repeat': 'no-repeat'});*/
					'background-image': 'url(' + obj.image.src + ')',
					'background-size':dif+'px ' + '1228px',
					'background-position':lef*-1 + 'px 0px',
					'background-repeat': 'no-repeat'});
				}}
    }else{
		if (isAndroid){
		var dif =(614*h)/w;
        el.css({
           /* 'background-image': 'url(' + obj.image.src + ')',
            'background-size': w +'px ' + h + 'px',
            'background-position': pw + 'px ' + ph + 'px',
            'background-repeat': 'no-repeat'});*/
			'background-image': 'url(' + obj.image.src + ')',
            'background-size':'614px ' + dif + '614px',
            'background-position':'0px 0px',
            'background-repeat': 'no-repeat'});
	}
	if (agentID){
		var dif =(614*h)/w;
        el.css({
           /* 'background-image': 'url(' + obj.image.src + ')',
            'background-size': w +'px ' + h + 'px',
            'background-position': pw + 'px ' + ph + 'px',
            'background-repeat': 'no-repeat'});*/
			'background-image': 'url(' + obj.image.src + ')',
            'background-size':'1228px ' + dif + '1228px',
            'background-position':'0px 0px',
            'background-repeat': 'no-repeat'});
			
	}}
	//FAKE
	var largura2=$(window).width(),
		nel=$('.original img');
		
		largura2=(largura2*96)/100;		
		if(w<h||w==h){	
				 $('.original img').width(largura2);
			}else{
				  $('.original img').height(largura2);
			/*if (agentID){
					 
				 	$('.original').css('-webkit-transform', 'rotate(-90deg)');
					$('.original img').css('margin','0');
					$('.original img').css('height',largura2);
				 }	  	*/		 
			//alert('test')
				var dif2=(largura2*w)/h;
				var  lef2=(dif2-largura2)/2	
				 $('.original img').css('margin-left', lef2*-1+'px')
				
			}
			
	/*if (agentID){
					 
				 	$('.original img').css('-webkit-transform', 'rotate(-90deg)');
					$('.original img').css('margin','0');
					$('.original img').css('height',largura2);
				 }*/
				 
	},
    imgMouseDown = function(e)
    {
        e.stopImmediatePropagation();

        obj.state.dragable = true;
        obj.state.mouseX = e.clientX;
        obj.state.mouseY = e.clientY;
    },

    imgMouseMove = function(e)
    {
        e.stopImmediatePropagation();

        if (obj.state.dragable)
        {
            var x = e.clientX - obj.state.mouseX;
            var y = e.clientY - obj.state.mouseY;

            var bg = el.css('background-position').split(' ');

            var bgX = x + parseInt(bg[0]);
            var bgY = y + parseInt(bg[1]);

           el.css('background-position', bgX +'px ' + bgY + 'px');

            obj.state.mouseX = e.clientX;
            obj.state.mouseY = e.clientY;
        }
    },
    imgMouseUp = function(e)
    {
        e.stopImmediatePropagation();
        obj.state.dragable = false;
    },
    zoomImage = function(e)
    {
        e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0 ? obj.ratio*=1.1 : obj.ratio*=0.9;
        setBackground();
    }

    obj.spinner.show();
    obj.image.onload = function() {
        obj.spinner.hide();
        setBackground();

        el.bind('mousedown', imgMouseDown);
        el.bind('mousemove', imgMouseMove);
        $(window).bind('mouseup', imgMouseUp);
        el.bind('mousewheel DOMMouseScroll', zoomImage);
    };
    obj.image.src = options.imgSrc;
    el.on('remove', function(){$(window).unbind('mouseup', imgMouseUp)});

    return obj;
};

jQuery.fn.cropbox = function(options){
    return new cropbox(options, this);
};
