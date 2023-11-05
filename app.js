let audio = document.querySelector("audio");
  let text = document.querySelector(".text");
  document.body.addEventListener("keyup", function (event) {
    appendToDom(event);
    let userKey = event.key.toLowerCase();
    console.log(userKey);
    let mainUserKey = document.getElementById(userKey);
    mainUserKey.classList.add("Leaves");
    audio.playbackRate = 5;
    audio.play();
    mainUserKey.addEventListener("animationend", function () {
      mainUserKey.classList.remove("Leaves");
    });
  });

  function appendToDom(event) {
    if (event.code === "Backspace") {
      text.innerHTML = text.innerHTML.slice(0, -1);
      return;
    }
    if (event.code === "Delete") {
      text.innerHTML = "";
      return;
    }
    text.innerHTML += event.key;
  }