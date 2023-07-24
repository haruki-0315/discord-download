function handleLogin(event) {
    event.preventDefault(); // フォームのデフォルトの動作をキャンセル
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    // JSONデータの読み込み（サーバー上にjsonファイルを配置してください）
    fetch("json/users.json")
      .then(response => response.json())
      .then(data => {
        var found = false;
        for (var i = 0; i < data.length; i++) {
          if (data[i].username === username && data[i].password === password) {
              sessionStorage.setItem("secretKey", "discord_member_login");
            found = true;
            break;
          }
        }

        if (found) {
          window.location.href = "memberpage.html"; // ダウンロードページにリダイレクト
        } else {
          document.getElementById("loginError").innerText = "ユーザー名もしくはパスワードが違います。";
          document.getElementById("loginError").style.display = "block";
        }
      })
      .catch(error => console.log(error));
  }
