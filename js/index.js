// Toggle the Side Menu

var toggled = function(){

    //$(this).delay(500).queue(function(){
    $("#wrapper").toggleClass("toggled");
   // });
}


 $("#menu-toggle").click(function(e) {
        e.preventDefault();
        toggled();
    });


// Channels List
var nasaTV = '<iframe src=\'https://www.filmon.com/tv/channel/export?channel_id=330&amp;autoPlay=1\' id=\'channelFrame\' frameborder=\'0\' allowfullscreen=\'\' scrolling=\'no\' width=\'640\' height=\'480\' frameborder=\'0\'></iframe>';
var lifeHacker = '<iframe src=\'https://www.filmon.com/tv/channel/export?channel_id=1546&amp;autoPlay=1\' id=\'channelFrame\' frameborder=\'0\' allowfullscreen=\'\' scrolling=\'no\' width=\'640\' height=\'480\' frameborder=\'0\'></iframe>';


// Toggle All Channels


var getTvFrame = document.getElementById('tvFrame');
var getTvFrameLength = document.getElementById('tvFrame').innerHTML.length;


 $("#nasaTV").on("click", function () {
	
    if(!getTvFrameLength){
        $("iframe").remove()
    	$(nasaTV).appendTo("#tvFrame");
        setTimeout(toggled, 2000);
    }
   
});


$("#lifeHacker").on("click", function () {
	
    if(!getTvFrameLength){
      $("iframe").remove()  
  	  $(lifeHacker).appendTo("#tvFrame");
      setTimeout(toggled, 2000);
 }
 });




 // Toggle for the Tree
 $(document).ready(function () {
	$('label.tree-toggler').click(function () {
		$(this).parent().children('ul.tree').toggle(300);
	});
});
