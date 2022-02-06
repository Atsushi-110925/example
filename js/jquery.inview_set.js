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
function moveAnimation(){
  function randomAnime(){
    $(randomElm).addClass("play");//親要素にplayクラスを付与
    var rnd = Math.floor(Math.random() * randomElmChild.length); //配列数からランダム数値を取得
    var moveData = "fadeUp";//アニメーション名＝CSSのクラス名を指定
    $(randomElmChild[rnd]).addClass(moveData);//アニメーションのクラスを追加
    randomElmChild.splice(rnd,1);//アニメーション追加となった要素を配列から削除
    if(randomElmChild.length == 0 ){//配列の残りがあるか確認
      $(randomElm).removeClass("play");//なくなった場合は親要素のplayクラスを削除
    }else{
      setTimeout(function(){randomAnime();},500); //0.5秒間隔でアニメーションをスタートさせる。※ランダムのスピード調整はこの数字を変更させる  
    }
  }
  
//スクロールしたらランダムに出現 
  var randomElm2 = $(".randomScroll");//親要素取得
  var randomElm2Child = $(randomElm2).children(); //親の子要素を取得
  randomScrollAnime();
  function randomScrollAnime(){
    var elemPos = $(".randomScroll").offset().top-50;//要素より、50px上まで来たら
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= elemPos - windowHeight){
      if(randomElm2Child.length >0 ){ //配列数以上であれば処理をおこなう
        var rnd = Math.floor(Math.random() * randomElm2Child.length);//配列数から表示する数値をランダムで取得
        var moveData ="fadeUp";//アニメーション名＝CSSのクラス名を指定
        if(animeFlag){//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにする
          animeFlag = false;//アニメーション処理が終わるまで一時的にfalseにする
          $(randomElm2Child[rnd]).addClass(moveData);//アニメーションのクラスを追加
          setTimeout(function(){
            animeFlag = true;//次の処理をおこなうためにtrueに変更
            randomScrollAnime();//自身の処理を繰り返す
          },500); //0.5秒間隔で。※ランダムのスピード調整はこの数字を変更させる
          randomElm2Child.splice(rnd,1);//アニメーション追加となった要素を配列から削除
        }
      }
    }else{
      animeFlag = true;
    }
  }
}
  var animeFlag = true;//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにするための定義

// 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function (){
    moveAnimation();/* アニメーション用の関数を呼ぶ*/
  });

// 画面が読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function(){
    moveAnimation();/* アニメーション用の関数を呼ぶ*/
  });
