
$(document).ready(function(){
	$window = $(window);
                
   $('div.parallaxBg').each(function(){
     var $parobj = $(this);
                    
      $(window).scroll(function() {
              
		var yPos = -( ($window.scrollTop() - $parobj.offset().top) / $parobj.data('speed'));
		var coords = '50% '+ yPos + 'px';
		$parobj.css({ backgroundPosition: coords });
		
});

 });	

}); 
