// JavaScript Document
$(document).ready(function () {
	//esconde loader do jquery-mobile
	$('.ui-loader-default').css('display','none');		
	$('.cores_select ul li img').click();
	$('.cropped img').addClass('watermark');
	
//GERAL
	//exibe a pg depois que carregada
	$('body').hide();	
	window.onload=function(){
		$('body').fadeIn(100);
	}	
	wmark.init({
					/* config goes here */
					//"position": "bottom-right", // default "bottom-right"
					"opacity": 100, // default 50
					"className": "watermark", // default "watermark"
					"path": "images/mask.png"
	});	
	$('.select ul li img').click(function(){
		$('.select ul li').removeClass('este');
		$(this).parent('li').addClass('este');
		$('.select ul li img').removeClass('esse');
		$(this).addClass('esse');
		var varimg= $(this).attr('src');
		$('.thumbBox').css('background-image', 'url('+varimg+')')
		$('.mask_fake').html('<img src="'+varimg+'">')	
	});
	var poscar=$('.select').scrollLeft()
	$('.left_msk').click(function(){
		var primeiro=$('.select ul li:first').attr('class');
		if(primeiro=='este'){}else{
			$('.select ul .este').removeClass('este').prev().addClass('este');
			$('.select ul li img').removeClass('esse');
			$('.select ul .este img').click()
			var ir_frente=$('.select ul .este').index(),
			larg=$('.select ul li').outerWidth(),
			total_right=ir_frente*larg
			$('.select').scrollLeft(total_right)		
		}
	});
	$('.right_msk').click(function(){
		var ultimo=$('.select ul li:last').attr('class')
		if(ultimo=='este'){}else{
			$('.select ul .este').removeClass('este').next().addClass('este');
			$('.select ul li img').removeClass('esse');
			$('.select ul .este img').click()	
			var ir_frente=$('.select ul .este').index(),
			larg=$('.select ul li').outerWidth(),
			total_right=ir_frente*larg
			$('.select').scrollLeft(total_right)			
		}
	});
	$('.amei').click(function(){
		var bgcor= $('.select ul .esse').attr('src').split('-');
		var atual=$('.cores_select ul li:first img').attr('src').split('/');
		var mudar=atual[0]+'/'+atual[1]+'/'
		$('.cores_select ul li').find('img').attr('src', function(i, val) {
			return val.replace(mudar,bgcor[0]);
		});
		$('.trn').fadeIn(300);
		$('.trn').delay(2000).fadeOut(100);
		setTimeout(function(){
		$('.corpg').click();},2000);
		
	});
	$('.azul').click(function(){
		$('.cores_select ul li:nth-child(1) img').click();
	});
	$('.vermelho').click(function(){
		$('.cores_select ul li:nth-child(2) img').click();
	});
	$('.lilas').click(function(){
		$('.cores_select ul li:nth-child(3) img').click();
	});
	$('.roxo').click(function(){
		$('.cores_select ul li:nth-child(4) img').click();
	});
	$('.aqua').click(function(){
		$('.cores_select ul li:nth-child(5) img').click();
	});
	$('.verde').click(function(){
		$('.cores_select ul li:nth-child(6) img').click();
	});
	$('.grama').click(function(){
		$('.cores_select ul li:nth-child(7) img').click();
	});
	$('.amarelo').click(function(){
		$('.cores_select ul li:nth-child(8) img').click();
	});
	$('.laranja').click(function(){
		$('.cores_select ul li:nth-child(9) img').click();
	});
	$('.preto').click(function(){
		$('.cores_select ul li:nth-child(10) img').click();
	});
//FORM
	//abre escolha
	$('.btn img').click(function(){
		$('.img_form input').click();
	});
	//da subimit quando escolhe
	$('.tete').change(function(){
		$('.trn').fadeIn(300);
		$('.trn').delay(2000).fadeOut(100);
		setTimeout(function(){
		$('.img_form').submit()},2000);
	});
	//muda de pagina
	$('.img_form').submit(function(){
		$('.fotopg').click();
		var test=$('.original img').width();
		var tete=$('.original img').height();
		if(test < tete){
			var deviceAgent = navigator.userAgent.toLowerCase();
    		var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
			if (agentID){
				$('.original').addClass('test')
				//alert(test+'/'+tete)
			}
		}
		return false
	});
	
//LARGURA DA FAKE
		var largura=$(window).width();
		largura=(largura*96)/100
		$('.img').width(largura).height(largura);
		//alert(largura)
	$(window).resize(function() {
        var largura=$(window).width();
		largura=(largura*96)/100
		$('.img').width(largura).height(largura);
		//alert(largura);
    });
	$('.original img')
	
	var maskop=$('.select ul li').length;
	$('.select ul').css('width', maskop*100+'%');
	$('.select ul li').css('width','2%');
	var padd=$('.select ul li').width();
	$('.select ul').css('padding-left', '35%');
	$('.select ul li:last img').css('margin-right', '140%');
	$('#mascara footer').width(largura).css('top', largura+'px');
	$('#cor footer').width(largura).css('top', largura+'px');
	$('#fim footer').width(largura).css('top', largura+'px');
	$('.ir_cor').click(function(){
		$('.amei').click()	
		/*if($('.original img').width() < $('.original img').height()){
			if (agentID){
						 
						$('.original img').css('-webkit-transform', 'rotate(-90deg)');
						$('.original img').css('margin','0');
						$('.original img').css('height',largura2);
					 }
		}*/
		var test=$('.original img').width();
		var tete=$('.original img').height();
		if(test < tete){
			var deviceAgent = navigator.userAgent.toLowerCase();
    		var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
			if (agentID){
				$('.original').addClass('test')
				//alert(test+'/'+tete)
			}
		}
	})
	$('.ir_fim').click(function(){
		$('#btnCrop').click();
		$('.fimpg').click();
		$('.original').removeClass('test')
	})
	$('.back').click(function(){
		//$('.umpg').click()
		window.location.href = 'index.html';
	})
	//alert(maskop);
});
$(window).load(function() {
        var options =
        {
            thumbBox: '.thumbBox',
            spinner: '.spinner',
            imgSrc: 'images/bg.jpg'
        }
        var cropper = $('.imageBox').cropbox(options);
        $('#file').on('change', function(){
            var reader = new FileReader();
            reader.onload = function(e) {
                options.imgSrc = e.target.result;
                cropper = $('.imageBox').cropbox(options);
            }
            reader.readAsDataURL(this.files[0]);
            this.files = [];
			setTimeout(function(){
				$('#btnZoomOut').click();
				$('#btnZoomIn').click();
			},500)
        })
		$('.cores_select ul li img').click(function(){
			var varimg= $(this).attr('src');
			$('.thumbBox').css('background-image', 'url('+varimg+')');
			var varimg= $(this).attr('src');
			$('.mask_fake').html('<img src="'+varimg+'">')		
			//alert(varimg)
		})
        $('#btnCrop').on('click', function(){
			//seleciona a mascara que o usuario esolheu
			var mask=$('.thumbBox').attr('style'),			
			maskok=mask.split(';'),
			masknew=maskok[0].replace('background-image: url(',''),			
			varimg2=masknew.replace(')','');
			varimg=varimg2.replace('no-repeat','');
			//da o crop e gera img
            var img = cropper.getAvatar();
           // angleInDegrees+=90*contador;
				//image.src=img				
				//drawRotated(angleInDegrees); 
				//var canvas=document.getElementById("canvas");
				//  var dataURL = canvas.toDataURL();   
				//  document.getElementById('img').src = dataURL;		
				  //gera a imagem		  				  
            $('.cropped').append('<img src="'+img+'" class="watermark">');
			//aplica marca d'agua
			wmark.init({
					/* config goes here */
					//"position": "bottom-right", // default "bottom-right"
					"opacity": 100, // default 50
					"className": "watermark", // default "watermark"
					"path": varimg,
				});
				//exibe na forma fake
			setTimeout(function(){
				var dagua=$('.watermark').attr('src');
				$('.ultima img').attr('src', dagua);
				$('.ultima img').removeAttr('style')
				$('.ultima img').css('width', '100%')
				//alert(dagua)
			},2000);
        })
        $('#btnZoomIn').on('click', function(){
            cropper.zoomIn();
        })
        $('#btnZoomOut').on('click', function(){
            cropper.zoomOut();
        });
		$(window).resize(function(){
			var agentID = deviceAgent.match(/(iphone|ipod|ipad)/);
			if(agentID){
				var lar=$(document).outerWidth();
				var alt=$(document).outerHeight();
				if(lar>alt){
						
				}
			}
		})
 });