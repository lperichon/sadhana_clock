// 
//  --- our app behavior logic ---
//
run(function () {
    // a little inline controller
    when('#welcome');
    when('#settings', function() {
		// load settings from store.
		store.all(function(saved) {
		  // TODO load settings into form
		});
	});
    when('#clock', function () {
        //store.all(function (saved) {
	  var canvas;
	  var ctx;
	  var lastend = 0;
	  var myTotal = getTotal();

	  canvas = document.getElementById("canvas");
	  ctx = canvas.getContext("2d");

	  ctx.clearRect(0, 0, canvas.width, canvas.height);
	  plotData(ctx);
        //});
    });
    when('#save', function () {
	// iterate over all fields
          // save or delete
        display('#welcome');
    });
});
