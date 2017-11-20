document.addEventListener("DOMContentLoaded", ready);
function ready() {
//button
      var down = document.getElementById('nav-trigger');

      down.addEventListener("click", function() {
        var showUl = document.getElementById('drop_down');
          if (showUl.style.display == 'none') {
            showUl.style.display = 'block';
          } else {
            showUl.style.display = 'none';
          }
      });

//slider
      var imgArr = ['1.jpg', '2.jpg', '3.jpg'];
      var slider = document.getElementById('images');
      slider.src = "img/" + imgArr[0];

      var prevBtn = document.getElementById('prevBtn');
      var nextBtn = document.getElementById('nextBtn');

      nextBtn.addEventListener("click", next, false);
      prevBtn.addEventListener("click", prev, false);

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

      //sign-modal

          var sign = document.getElementById('sign_in');

          sign.addEventListener("click", function() {
            var showModal = document.getElementById('modal_sign');
              if (showModal.style.display == 'none') {
                showModal.style.display = 'block';
              } else {
                showModal.style.display = 'none';
              }
          });

          //button in sign_form
          var close = document.getElementById('close');

          close.addEventListener("click", function() {
            var showModal = document.getElementById('modal_sign');
              if (showModal.style.display == 'block') {
                showModal.style.display = 'none';
              } else {
                showModal.style.display = 'block';
              }
          });

          var modalClose = document.getElementById('modal_sign')

            modalClose.addEventListener("click", function(e) {
              if (e.target.id === 'modal_sign') {
                modalClose.style.display = 'none';
              }
            })


          //get
          $.get("https://newsapi.org/v1/articles?source=bbc-sport&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31", function(articles) {
            var newsArr = articles;

            for(key in newsArr.articles) {
              console.log(newsArr.articles[key]);
            }
          });


}
