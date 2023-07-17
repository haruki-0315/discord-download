function handleLogin(event) {
    event.preventDefault(); // フォームのデフォルトの動作をキャンセル
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // JSONデータの読み込み（サーバー上にjsonファイルを配置してください）
    fetch("users.json")
      .then(response => response.json())
      .then(data => {
        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].username === username && data[i].password === password) {
            found = true;
            break;
          }
        }
        if (found) {
          window.location.href = "download.html"; // ダウンロードページにリダイレクト
        } else {
          document.getElementById("loginError").innerText = "ユーザー名もしくはパスワードが違います。";
          document.getElementById("loginError").style.display = "block";
        }
      })
      .catch(error => console.log(error));
  }

const cookieSession = require('cookie-session');
const express = require('express');
const app = express();

app.use(cookieSession({
  name: 'session',
  keys: ['discord_download_login'], // 秘密のキーを設定してください
  maxAge: 24 * 60 * 60 * 1000 // セッションの有効期限（例では24時間）を設定してください
}));

// ここから先のルートハンドラーやミドルウェアでセッションを使用できます

app.listen(3000, () => {
  console.log('サーバーがポート3000で起動しました');
});
