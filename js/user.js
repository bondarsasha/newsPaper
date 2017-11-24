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

      var slider = document.getElementById('images');
      var imgArr = ['1.jpg', '2.jpg', '3.jpg'];
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

            //parse_news
            function acceptance(newsArr) {
              for(key in newsArr) {
                var title = newsArr[key].title;
                var author = newsArr[key].author;
                var description = newsArr[key].description;
                var publishedAt = newsArr[key].publishedAt;
                var url = newsArr[key].url;
                var urlToImage = newsArr[key].urlToImage;
                var createNews = document.getElementById('parse_news');

                var newsItem = document.createElement('div');
                newsItem.className = 'news-item';
                createNews.appendChild(newsItem);

                var newsTitle = document.createElement('h3');
                newsTitle.className = 'news-title';
                newsItem.appendChild(newsTitle);

                var aTitle = document.createElement('a');
                aTitle.href = url;
                aTitle.textContent = title;
                newsTitle.appendChild(aTitle);

                var div = document.createElement('div');
                newsItem.appendChild(div);

                var newsRubric = document.createElement('span');
                newsRubric.className = 'news-rubric';
                newsRubric.textContent = author;
                div.appendChild(newsRubric);

                var newsData = document.createElement('span');
                newsData.className = 'news-data';
                newsData.textContent = publishedAt;
                div.appendChild(newsData);

                var clearfix = document.createElement('div');
                clearfix.className = 'clearfix';
                newsItem.appendChild(clearfix);

                var aContent = document.createElement('a');
                aContent.className = 'col-xs-12 col-sm-5';
                aContent.href = url;
                clearfix.appendChild(aContent);

                var imgContent = document.createElement('img');
                imgContent.src = urlToImage;
                imgContent.alt = title;
                imgContent.style.width = '100%';
                aContent.appendChild(imgContent);

                var newsText = document.createElement('div');
                newsText.className = 'col-xs-12 col-sm-7 news-text';
                newsText.textContent = description;
                clearfix.appendChild(newsText);
              }
            }

          //get
          $.get("https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=6f7c85381a5c44deb7e024cd02c60e31",
            function(e) {
              var newsArr = e.articles;
              acceptance(newsArr);
            }
          );

          //parseWeather
          function getWeather(weathArr) {
            for(key in weathArr) {
              var city = weathArr[key].city;
              var temp = weathArr[key].temp;

              var weather = document.getElementById('weather');
              var getCity = document.createElement('span');
                getCity.className = 'get-city';
                getCity.textContent = city;
                weather.appendChild(getCity);

              var getTemp = document.createElement('span');
                getTemp.className = 'get-temp';
                getTemp.textContent = temp;
                weather.appendChild(getTemp);
            }
          }

          //weather
          $.ajax({
            url: "http://localhost/dashboard/paper/JSon/weather.json",
            beforeSend: function( xhr ) {
              xhr.overrideMimeType( "text/plain; charset=x-user-defined" );
            }
          })
            .done(function( data ) {
              console.log(data);
              var weathArr = JSON.parse(data);
              getWeather(weathArr);
            });



}
