var access_token = localStorage.getItem("token");
if (access_token != null) {
  window.location.href = "./index.html";
}

function login() {
  //mendapatkan input pengguna
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //menggunakan XMLHTTPRequest untuk terhubung ke API
  const xhttp = new XMLHttpRequest();
  xhttp.open("POST", "https://ets-pemrograman-web-f.cyclic.app/users/login");
  xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xhttp.send(
    JSON.stringify({
      email: username,
      password: password,
    })
  );
  //menerima respon
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4) {
      objects = JSON.parse(this.responseText);
      if (objects["status"] == "success") {
        const accesstoken = objects["data"]["access_token"];
        console.log(accesstoken);
        localStorage.setItem("token", accesstoken);
        Swal.fire({
          text: objects["message"],
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.href = "./index.html";
          }
        });
      } else {
        Swal.fire({
          text: objects["error"],
          icon: "error",
          confirmButtonText: "OK",
        });
      }
    }
  };
  return false;
}