  var myColor = ["#ECD078","#D95B43","#C02942","#542437","#53777A"];
  var myData = [10,30,20,60,40];

  function getTotal(){
    var myTotal = 0;
    for (var j = 0; j < myData.length; j++) {
      myTotal += (typeof myData[j] == 'number') ? myData[j] : 0;
    }
    return myTotal;
  }

  function plotData(ctx) {
    for (var i = 0; i < myData.length; i++) {
      ctx.fillStyle = myColor[i];
      ctx.beginPath();
      ctx.moveTo(200,150);
      ctx.arc(200,150,150,lastend,lastend+(Math.PI*2*(myData[i]/myTotal)),false);
      ctx.lineTo(200,150);
      ctx.fill();
      lastend += Math.PI*2*(myData[i]/myTotal);
    }

    
  }

  function plotTimer(ctx) {
    ctx.fillStyle = "rgba(190, 190, 190, 0.8)";
    ctx.beginPath();
    ctx.moveTo(200,150);
    var gray_arc = ctx.arc(200,150,150,0,Math.PI*2,false);
    ctx.lineTo(200,150);
    ctx.fill();
  }
