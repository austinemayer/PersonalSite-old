	var quoteCanvas= document.getElementById('topquote');

		 		if(quoteCanvas){
		 			var ctx2 = quoteCanvas.getContext('2d');

		 			if(ctx2){
		 				var myString = '"You can design the most wonderful place in the world.';
		 				var myString2 ='But it takes people to make the dream a reality."';
		 				ctx2.font='italic 34px "Century Gothic",verdana,arial,helvetica,sans-serif';
		 				ctx2.fillStyle ="#ffffff";
		 				ctx2.fillText(myString,0,30);
		 				ctx2.fillText(myString2,60,70);
		 			}
		 		}
		 		

	var logoCanvas= document.getElementById('trilogo');

		 		if(logoCanvas){
		 			var ctx = logoCanvas.getContext('2d');

		 			if(ctx){
		 				ctx.strokeStyle="rgb(255,255,255)";
						ctx.lineWidth=2;
						ctx.beginPath();
						ctx.moveTo(9,89);
						ctx.lineTo(51,18);
						ctx.lineTo(92,89);
						ctx.stroke();

						ctx.lineWidth=2;
						ctx.beginPath();
						ctx.moveTo(189,88);
						ctx.lineTo(147,17);
						ctx.lineTo(106,88);
						ctx.stroke();

						ctx.lineWidth=5;
						ctx.beginPath();
						ctx.moveTo(193,87);
						ctx.lineTo(99,251);
						ctx.lineTo(5,87);
						ctx.lineTo(193,87);
						ctx.stroke();

						ctx.fillStyle="rgb(255,255,255)";
						ctx.lineWidth=5;
						ctx.beginPath();
						ctx.moveTo(126,204);
						ctx.lineTo(99,250);
						ctx.lineTo(72,204);
						ctx.lineTo(126,204);
						ctx.fill();
						ctx.stroke();

						ctx.lineWidth=5;
						ctx.beginPath();
						ctx.moveTo(3,86);
						ctx.lineTo(51,5);
						ctx.lineTo(98,85);
						ctx.stroke();

						ctx.lineWidth=5;
						ctx.beginPath();
						ctx.moveTo(195,86);
						ctx.lineTo(147,5);
						ctx.lineTo(100,85);
						ctx.stroke();

						ctx.lineWidth=2;
						ctx.beginPath();
						ctx.moveTo(181,94);
						ctx.lineTo(99,236);
						ctx.lineTo(17,94);
						ctx.lineTo(181,94);
						ctx.stroke();

						ctx.fillStyle="rgb(255,255,255)";
						ctx.beginPath();
						ctx.moveTo(193,92);
						ctx.lineTo(198,85);
						ctx.lineTo(194,83);
						ctx.lineTo(189,89);
						ctx.lineTo(193,92);
						ctx.fill();
		 			}
		 		}

     $('#links').on(
             'click', function(e){
             	 $('.closecontact').click();
             	 $('.closevideo').click();
             	 $('.closesources').click();
                 $('.content').animate({top: '430px', opacity: 1}, 'slow').show();
            });

     $('#close').on(
             'click', function(e){
             	 $('.closelightbox').click();
                 $('.content').animate({opacity: 0, top: '700px'}, 'slow').hide('slow');
            });

      $('.lightbox').on(
             'click', function(e){
             	$('#imgcontent').html('<img src="images/pf1.jpg" />');
             	 $('.videocontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('.lightboxcontent').animate({opacity: 1}, 'slow').show();
                 $('#trilogo').animate({opacity: 0}, 'slow');
                 $('#topquote').animate({opacity: 0}, 'slow');  
            });

     $('.closelightbox').on(
             'click', function(e){
                 $('.lightboxcontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('#trilogo').animate({opacity: 1}, 'slow');
                 $('#topquote').animate({opacity: 1}, 'slow');

            });


     $('#contact').on(
             'click', function(e){
             	     vid.pause();
                 $('.videocontent').animate({opacity: 0}, 'slow').hide('slow');
             	 $('.lightboxcontent').animate({opacity: 0}, 'slow').hide('slow');
             	 $('.sourcecontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('.content').animate({opacity: 0, top: '700px'}, 'slow').hide('slow');
                 $('.contactcontent').animate({opacity: 1}, 'slow').show();
                 $('#trilogo').animate({opacity: 0}, 'slow');
                 $('#topquote').animate({opacity: 0}, 'slow');
            });

     $('.closecontact').on(
             'click', function(e){
                 $('.contactcontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('#trilogo').animate({opacity: 1}, 'slow');
                 $('#topquote').animate({opacity: 1}, 'slow');   
            });

      $('.designvid').on(
             'click', function(e){
             	 $('.lightboxcontent').animate({opacity: 0}, 'slow').hide('slow');
             	 $('.content').animate({opacity: 0, top: '700px'}, 'slow').hide('slow');
                 $('.videocontent').animate({opacity: 1}, 'slow').show();
                 $('#trilogo').animate({opacity: 0}, 'slow');
                 $('#topquote').animate({opacity: 0}, 'slow');
            });

     $('.closevideo').on(
             'click', function(e){
             		vid.pause();
                 $('.videocontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('#trilogo').animate({opacity: 1}, 'slow');
                 $('#topquote').animate({opacity: 1}, 'slow');   
            });

     $('#sources').on(
             'click', function(e){
             	 $('.lightboxcontent').animate({opacity: 0}, 'slow').hide('slow');
             	 $('.contactcontent').animate({opacity: 0}, 'slow').hide('slow');
             	 $('.content').animate({opacity: 0, top: '700px'}, 'slow').hide('slow');
                 $('.videocontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('.sourcecontent').animate({opacity: 1}, 'slow').show();
                 $('#trilogo').animate({opacity: 0}, 'slow');
                 $('#topquote').animate({opacity: 0}, 'slow');
            });

     $('.closesources').on(
             'click', function(e){
             		vid.pause();
                 $('.sourcecontent').animate({opacity: 0}, 'slow').hide('slow');
                 $('#trilogo').animate({opacity: 1}, 'slow');
                 $('#topquote').animate({opacity: 1}, 'slow');   
            });

     //-------------------------------light box------------------------------------
     
     
    $('.lightboxselect').click(function(e) {
        e.preventDefault();
         
        var imagelocation = $(this).attr("href");
            $('#imgcontent').html('<img src="' + imagelocation + '" />');
            $('#lightboxControl').show(); 
    });
 

	//-----------------------interactive map-----------------------------
	$('a.dot').click(function(){
		
		$(this).addClass('selected');
		$('.location_detail').animate({opacity: 1}, 'slow').show();
	});

	//-----------------------html video---------------------------------
	var vid = document.getElementById('vid');

	


