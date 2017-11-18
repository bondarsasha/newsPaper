document.addEventListener("DOMContentLoaded", ready);
function ready() {

      var down = document.getElementById('nav-trigger');

      down.addEventListener("click", function() {
        var showUl = document.getElementById('drop_down');
          if (showUl.style.display == 'none') {
            showUl.style.display = 'block';
          } else {
            showUl.style.display = 'none';
          }
      });


      var imgArr = ['1.jpg', '2.jpg', '3.jpg'];
      var slider = document.getElementById('images');
      slider.src = "img/" + imgArr[0];

      var right = document.getElementById('rightBtn');
      var left = document.getElementById('leftBtn');

      // right.addEventListener("click", next, false);
      // left.addEventListener("click", prev, false);

      var i=0;

      function prev() {
          if (i == 0) {
            i = imgArr.length;
          } i--;
          slider.src = "img/" + imgArr[i];
      };

      function next() {
          j = imgArr.length-1;
            if(i == j) {
              i = 0;
            }
            i++;
            slider.src = "img/" + imgArr[i];
      }
      setInterval( next, 2000 );
}
