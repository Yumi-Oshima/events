function potire() {
    // テキストボックスの値を取得
    let name = document.getElementById("nameId").value;

    // アラート表示
    alert(name + "さん、ポチりました！");

    // ここは画面遷移先のURLを作っているだけなので無視してOK
    let url = new URL(window.location.href);
    url.pathname = "./helloworld.html"; // 遷移先
    url.searchParams.set("name", name);
    // 画面遷移
    window.location.href = url.href;
}

// HTML側のボタンと紐づける
let btn = document.getElementById("btnId");
// ボタンがクリックされたらpotire()を実行
btn.addEventListener("click", potire);

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
