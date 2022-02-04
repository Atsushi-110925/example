// 1. ページがスクロールされた時にイベントを設定する
$(window).scroll(function () {
    
    // 2. ウィンドウの位置を取得する
    var scrollTop = $(this).scrollTop(); // ウィンドウ枠内の上の位置を取得する
    var scrollBottom = scrollTop + $(this).height(); // ウィンドウ枠内の下の位置を取得する

    // 3. 指定した要素にそれぞれ処理を追加する
    $(".gallery .gallery-item").each(function (i) {

        // 4. ウィンドウの位置と表示したい要素の位置を比較する
        if (scrollBottom > $(this).offset().top) {
            
            // 5. 0.3秒毎ごとに1つずつfadeinクラスを付与する
            var target = this;
            setTimeout(function () {
                $(target).addClass("fadein");
            }, 300 * i);

        }

    });
});
