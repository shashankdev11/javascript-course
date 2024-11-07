document.getElementById("Submit").addEventListener("click", function () {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  event.preventDefault();
  if (username === "Shashank12" || password === "4321") {
    window.location.href = "./image.html";
    console.log(window.location.href);
  } else {
    alert("please enter the correct credentials");
  }
});
