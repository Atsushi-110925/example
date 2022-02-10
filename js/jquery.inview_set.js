//main h2またはblurクラスがついた要素が画面内にきたら、スタイルblurstyleを適用する
$('main h2, .blur').not('.simple').on('inview', function() {
	$(this).addClass('blurstyle');
});

//upスタイルが画面内にきたら、スタイルupstyleを適用する
$('.up').on('inview', function() {
	$(this).addClass('upstyle');
});

//leftスタイルが画面内にきたら、スタイルleftstyleを適用する
$('.left').on('inview', function() {
	$(this).addClass('leftstyle');
});

//rightスタイルが画面内にきたら、スタイルrightstyleを適用する
$('.right').on('inview', function() {
	$(this).addClass('rightstyle');
});

//photo.html
function delayScrollAnime() {
  var time = 0.2;
  var value = time;
  $('.delayScroll').each(function () {
    var parent = this;
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    var childs = $(this).children();
    
    if (scroll >= elemPos - windowHeight && !$(parent).hasClass("play")) {
      $(childs).each(function () {
        if (!$(this).hasClass("fadeUp")) {
          $(parent).addClass("play");
          $(this).css("animation-delay", value + "s");
          $(this).addClass("fadeUp");
          value = value + time;
          var index = $(childs).index(this);
          if((childs.length-1) == index){
            $(parent).removeClass("play");
          }
        }
      })
    }else {
      $(childs).removeClass("fadeUp");
      value = time;
    }
  })
}

  $(window).scroll(function (){
    delayScrollAnime();
  });

  $(window).on('load', function(){
    delayScrollAnime();
  });


 $('.flex .box a').click(function() {
        var imgSrc = $(this).children().attr('src');
        $('.bigimg').children().attr('src', imgSrc);
        $('.modal').fadeIn();
        $('body,html').css('overflow-y', 'hidden');
        return false
      });

$('.close-btn').click(function() {
        $('.modal').fadeOut();
        $('body,html').css('overflow-y', 'visible');
        return false
      });
