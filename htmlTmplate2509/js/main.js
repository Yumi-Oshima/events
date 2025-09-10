function potire() {
    // テキストボックスの値を取得
    let name = document.getElementById("nameId").value;

    // アラート表示
    alert(name + "さん、ポチりました！");

    // ここは画面遷移先のURLを作っているだけなので無視してOK
    let url = new URL(window.location.href);
    url.pathname = "https://yumi-ganmo.github.io/events/htmlTmplate2509/html/helloworld.html"; // 遷移先
    url.searchParams.set("name", name);
    // 画面遷移
    window.location.href = url.href;
}

// HTML側のボタンと紐づける
let btn = document.getElementById("btnId");
// ボタンがクリックされたらpotire()を実行
btn.addEventListener("click", potire);
