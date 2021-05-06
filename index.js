// Please use event listeners to run functions.
document.addEventListener('onLoad', function(obj) {
	// obj will be empty for viewer count widget
	// this will fire only once when the widget loads
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  $('#goal-total').text("20");
  $('#goal-current').text(obj.detail.twitch);
  
  var percentage = (100*obj.detail.twitch)/20;
  var widthvalue = ($('.condensed__container').width()*percentage) / 100;
  $('#barra-percentage').css('width', widthvalue)
});

document.addEventListener('onEventReceived', function(obj) {
  	// obj will contain information about the event
  
   $('#goal-current').text(obj.detail.twitch);
  
  var percentage = (100*obj.detail.twitch)/20;
  var widthvalue = ($('.condensed__container').width()*percentage) / 100;
  $('#barra-percentage').css('width', widthvalue)
});
