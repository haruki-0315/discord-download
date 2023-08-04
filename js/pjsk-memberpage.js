// 特定のページへのアクセス制御の処理
if (sessionStorage.getItem("secretKey") !== "discord_member_login") {
  // 秘密のキーが存在しない場合の処理
  alert("ログインが必要です");
  window.location.href = "pjsk-memberlogin.html";
} else {
  // 特定のページへのアクセスを許可する処理
  console.log("アクセスが許可されました");
}

function handleLogout() {
  sessionStorage.removeItem("secretKey");
  window.location.href = "pjsk-memberlogin.html"; // ログインページにリダイレクト
}

var today = new Date("2023-07-29");
   var calendarElement = document.getElementById("calendar");
   calendarElement.innerHTML = today.toDateString();

var scheduleData = [
     { date: "2023-07-29", event: "Meeting with clients" },
     { date: "2023-07-30", event: "Team outing" }
   ];
   
   for (var i = 0; i < scheduleData.length; i++) {
     var schedule = scheduleData[i];
     var dateElement = document.getElementById(schedule.date);
     dateElement.innerHTML += "<br>" + schedule.event;
   }

window.onload = function() {
  var counterElement = document.getElementById("counter");
  var count = parseInt(counterElement.innerHTML);
  count++;
  counterElement.innerHTML = count;
};
