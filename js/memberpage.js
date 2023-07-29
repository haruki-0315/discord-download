// 特定のページへのアクセス制御の処理
if (sessionStorage.getItem("secretKey") !== "discord_member_login") {
  // 秘密のキーが存在しない場合の処理
  alert("ログインが必要です");
  window.location.href = "memberlogin.html";
} else {
  // 特定のページへのアクセスを許可する処理
  console.log("アクセスが許可されました");
}

function handleLogout() {
  sessionStorage.removeItem("secretKey");
  window.location.href = "memberlogin.html"; // ログインページにリダイレクト
}

window.onload = function() {
  var counterElement = document.getElementById("counter");
  var count = parseInt(counterElement.innerHTML);
  count++;
  counterElement.innerHTML = count;
};
