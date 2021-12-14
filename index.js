document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.querySelector("#text").textContent = "This is really cool!"
    console.log(x)
  });
  
  let x = 4;

  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );