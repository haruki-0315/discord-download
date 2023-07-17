function handleLogin(event) {
    event.preventDefault(); // フォームのデフォルトの動作をキャンセル
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

const secretKey = "discord_download_login";
    
    // JSONデータの読み込み（サーバー上にjsonファイルを配置してください）
    fetch("users.json")
      .then(response => response.json())
      .then(data => {
        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].username === username && data[i].password === password) {
            found = true;
              req.session.secretKey = secretKey;
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

app.get("download.html", (req,res) => {
    const sessionKey = req.session.secretKey;
    if (sessionKey === secretKey) {
        res.send("アクセスが許可されました");

    } else {
        res.redirect("index.html");
    }
});
