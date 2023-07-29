<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // ここでフォームのデータを処理するためのコードを追加します
  
  // 例として、フォームのデータをメールで送信するコードを追加します
  $to = "discord-download-form@outlook.jp"; // 宛先メールアドレスを指定します
  $subject = "お問い合わせフォームからのメッセージ";
  $body = "お名前: $name\nメールアドレス: $email\nメッセージ: $message";

  if (mail($to, $subject, $body)) {
    echo "メッセージが送信されました。";
  } else {
    echo "メッセージの送信に失敗しました。";
  }
}
?>
