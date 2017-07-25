
$(function(){

	var num = $(window).height()>100;
	var offset=$(window).scrollTop();
  
  if(offset>num){

  $('nav').addClass('scrolled');


  }

  $(window).on('scroll',function(){

  if($(window).scrollTop()>num){

     $('nav').addClass('scrolled');
  }
    
  else{
  	 $('nav').removeClass('scrolled');

  }
   
  });

});


$(function(){



  $('.scroll-link').on('click', function(e){
       
       e.preventDefault();

   var sectionID =$(this).attr('data-id');

    scrollToID('#'+sectionID,1000);

 


  });



  $('.scroll-top').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '1000','swing');     
  });

   
    $('#nav-toggle').on('click',function(e){

       e.preventDefault();

       $('#myNavbar').toggle('open');
    }); 



});


$(document).ready(function(){


  $('.img_container').hover(function(){

       $(this).attr('src',$(this).data('hover'));
  }).mouseout(function() {
  
   $(this).attr('src', $(this).data('src'));

  });

   

});



 function scrollToID(id,speed){

    var offset = 30;
    var dataOffset = $(id).offset().top-offset;

    var myNavbar = $('#myNavbar');

    $('html,body').animate({scrollTop:dataOffset},speed);

    if(myNavbar.hasClass('open')){

      myNavbar.css('height,1px').removeClass('in').addClass('collapse');
      myNavbar.removeClass('open');
    }

    }




    function initMap(){
        
         var options={

          zoom:17,
          center:{lat:-6.774587, lng: 39.241197}
         }

          var map = new google.maps.Map(document.getElementById('map'),options);
        

           var marker = new google.maps.Marker({

             position:{lat:-6.774587, lng: 39.241197},

             map:map

           });
              

           }
       



