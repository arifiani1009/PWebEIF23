var access_token = localStorage.getItem("token");
if (access_token == null) {
  window.location.href = "./login.html";
}

console.log(access_token);

function loadUser() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://ets-pemrograman-web-f.cyclic.app/scores/score");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.setRequestHeader("Authorization", "Bearer " + access_token);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      const objects = JSON.parse(this.responseText);
      if (objects["status"] == "success") {
        const scores = objects["data"];
        console.log(scores.length);
        var table = '<table>' + '<thead><td>Nama</td><td>Score</td></thead><tbody>';
        for(let i = 0; i<scores.length; i++){
          table += '<tr>';
          table += "<td>" + scores[i]["nama"] + "</td>";
          table += "<td>" + scores[i]["score"] + "</td>";
          table += "</tr>"
        }
        table += "</tbody></table>"
        document.getElementById("myTable").innerHTML = table;
      }
    }
  };
}

loadUser();

function loadGame() {
  window.location.href = "tangkaptelur/index.html";
}

function logout() {
  localStorage.removeItem("token");
  window.location.href = "login.html";
}