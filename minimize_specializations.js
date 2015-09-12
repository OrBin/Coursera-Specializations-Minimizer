function eventFire(el, etype){
  if (el.fireEvent) {
    el.fireEvent('on' + etype);
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}

$(document).ready(function() {
	interval_id = setInterval(function() { 
		if ($(".bt3-col-sm-12[data-js=list-items-container]").val() != undefined) {
			clearInterval(interval_id);
			Array.prototype.forEach.call($("[data-js=toggle-specialization]"), function(element) {
				eventFire(element, "click");
			});						
		}
	}, 400);
});
