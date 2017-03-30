(function () {

    "use strict";

    window.$ = require("jquery"),
    window.jQuery = $;
    require("jquery-ui-dist/jquery-ui.js");
    var BG = require('./jquery.interactive_bg.min.js');

    $(function () {

      $('.central').on('click', function(){
          $(this).toggleClass('active');
      });

      $('.planet').interactive_bg({
        strength: 1.5,              // Movement Strength when the cursor is moved. The higher, the faster it will reacts to your cursor. The default value is 25.
        scale: 1.5,               // The scale in which the background will be zoomed when hovering. Change this to 1 to stop scaling. The default value is 1.05.
        animationSpeed: "1000ms",   // The time it takes for the scale to animate. This accepts CSS3 time function such as "100ms", "2.5s", etc. The default value is "100ms".
        contain: true,             // This option will prevent the scaled object/background from spilling out of its container. Keep this true for interactive background. Set it to false if you want to make an interactive object instead of a background. The default value is true.
        wrapContent: true         // This option let you choose whether you want everything inside to reacts to your cursor, or just the background. Toggle it to true to have every elements inside reacts the same way. The default value is false
      });

      var canvas = document.getElementById('canvas'),
          context = canvas.getContext('2d');

          // resize the canvas to fill browser window dynamically
          window.addEventListener('resize', resizeCanvas, false);

          function resizeCanvas() {
                  canvas.width = window.innerWidth;
                  canvas.height = window.innerHeight;

                  /**
                   * Your drawings need to be inside this function otherwise they will be reset when
                   * you resize the browser window and the canvas goes will be cleared.
                   */
                  drawStuff(canvas);
          }
          resizeCanvas();

            function getMousePos(canvas, e) {
              var rect = canvas.getBoundingClientRect();
              return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
              };
            }

            canvas.addEventListener('mousemove', function(e) {
              var mousePos = getMousePos(canvas, e);
              drawStuff(canvas, mousePos);
            }, false);

          function drawStuff(canvas, mousePos) {
            context.moveTo(0,canvas.width);
            context.lineTo(100, 100);
            context.stroke();
          }

      $('.central').draggable();


    });

}());
