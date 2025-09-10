// 画面遷移先で名前を表示するためのコード
function showName() {
    // URLからnameパラメータを取得
    let url = new URL(window.location.href);
    let name = url.searchParams.get("name");

    // nameがnullでなければ、main要素に名前を表示
    if (name) {
        let main = document.querySelector("main");
        main.textContent = name + "ぽちったね。ちんこ。";
    }
}
// 画面遷移先で名前を表示するためのコードを実行
showName();
