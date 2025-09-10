function potire() {
    // テキストボックスの値を取得
    let name = document.getElementById("nameId").value;

    // アラート表示
    alert(name + "さん、ポチりました！");

    // ここは画面遷移先のURLを作って実行しているだけなので無視してOK
    window.location.href = `helloworld.html?name=${encodeURIComponent(name)}`;

}

// HTML側のボタンと紐づける
let btn = document.getElementById("btnId");
// ボタンがクリックされたらpotire()を実行
btn.addEventListener("click", potire);
