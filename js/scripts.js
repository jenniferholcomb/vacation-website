window.onload = function () {
  let btnDark = document.querySelector("button.dark");
 // let btnDark2 = btnDark;
  let btnLight = document.querySelector("button.light");
  let btnSmall = document.querySelector("button.smallFont");
  let btnLarge = document.querySelector("button.largeFont");
  let body = document.body;
  let p = document.getElementById("intro");


  btnDark.onclick = function () {
    body.style.backgroundColor = "blue";
    body.style.color = "white";
  };

//  btnDark2.onclick = function () {
//    body.style.backgroundColor = "white";
//    body.style.color = "black";
//  };

  btnLight.onclick = function () {
    body.style.backgroundColor = "yellow";
    body.style.color = "black";
  };

  btnSmall.onclick = function () {
    p.style.fontSize = "large";
  };

  btnLarge.onclick = function () {
    p.style.fontSize = "small";
  };



}