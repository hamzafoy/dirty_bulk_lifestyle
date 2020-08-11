function menuFunction() {
    var x = document.getElementById("myLinks");
    var v = document.getElementById("shop_submenu");
    var u = document.getElementById("social_media_submenu");
    if (x.style.display === "block") {
      x.style.display = "none";
      v.style.display = "none";
      u.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

function subMenuFunction() {
    var x = document.getElementById("shop_submenu");
    var v = document.getElementById("submenu_arrows");
    if (x.style.display === "block") {
      x.style.display = "none";
      v.style.backgroundImage = "url('img/down_arrow.svg')";
    } else {
      x.style.display = "block";
      v.style.backgroundImage = "url('img/up_arrow.svg')";
    }
}

function subMenuFunction2() {
    var x = document.getElementById("social_media_submenu");
    var v = document.getElementById("submenu_arrows_2");
    if (x.style.display === "block") {
      x.style.display = "none";
      v.style.backgroundImage = "url('img/down_arrow.svg')";
    } else {
      x.style.display = "block";
      v.style.backgroundImage = "url('img/up_arrow.svg')";
    }
}

function myFunction(x) {
    x.classList.toggle("change");
}