// 特定のページへのアクセス制御の処理
if (sessionStorage.getItem("secretKey") !== "discord_download_login") {
  // 秘密のキーが存在しない場合の処理
  alert("ログインが必要です");
  window.location.href = "index.html";
} else {
  // 特定のページへのアクセスを許可する処理
  console.log("アクセスが許可されました");
}
