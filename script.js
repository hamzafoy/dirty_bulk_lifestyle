//Navigation Menu JS



function menuFunction() {
    var x = document.getElementById("myLinks");
    var v = document.getElementById("shop_submenu");
    var u = document.getElementById("social_media_submenu");
    var t = document.getElementById("submenu_arrows");
    var s = document.getElementById("submenu_arrows_2");
    if (x.style.display === "block") {
      x.style.display = "none";
      v.style.display = "none";
      u.style.display = "none";
      t.style.backgroundImage = "url('img/down_arrow.svg')";
      s.style.backgroundImage = "url('img/down_arrow.svg')";
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



// ------- Shop Menu Functions



// Shop Menu Event Listeners



document.getElementById('item_1_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_1_alt.jpg';
});

document.getElementById('item_1_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_1.jpg';
});

document.getElementById('item_3_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_3_alt.png';
});

document.getElementById('item_3_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_3.png';
});

document.getElementById('item_7_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_7_alt.png';
});

document.getElementById('item_7_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_7.png';
});

document.getElementById('item_8_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_8_alt.png';
});

document.getElementById('item_8_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_8.png';
});

document.getElementById('item_9_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_9_alt.png';
});

document.getElementById('item_9_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_9.png';
});

document.getElementById('item_10_switch').addEventListener('mouseenter', function() {
  this.src = 'img/apparel/shop_item_10_alt.png';
});

document.getElementById('item_10_switch').addEventListener('mouseleave', function() {
  this.src = 'img/apparel/shop_item_10.png';
});



// Shop Page Dropdown Menu



document.getElementById("shop_item_4_switch").onchange = changeShopItemFour;

function changeShopItemFour() {
  var img = document.getElementById("item_4_switch");
  img.src = this.value;
}

document.getElementById('item_4_switch').addEventListener('mouseenter', function() {

  var x = document.getElementById('shop_item_4_switch')

  if (x.value === "img/apparel/shop_item_4.png") {
    this.src = "img/apparel/shop_item_4_alt.png";
  } else if (x.value === "img/apparel/shop_item_4_alt_1.png") {
    this.src = "img/apparel/shop_item_4_alt_2.png";
  } else if (x.value === "img/apparel/shop_item_4_alt_3.png") {
    this.src = "img/apparel/shop_item_4_alt_4.png"
  }

});

document.getElementById('item_4_switch').addEventListener('mouseleave', function() {
  
  var x = document.getElementById('shop_item_4_switch')

  if (x.value === "img/apparel/shop_item_4.png") {
    this.src = "img/apparel/shop_item_4.png";
  } else if (x.value === "img/apparel/shop_item_4_alt_1.png") {
    this.src = "img/apparel/shop_item_4_alt_1.png";
  } else if (x.value === "img/apparel/shop_item_4_alt_3.png") {
    this.src = "img/apparel/shop_item_4_alt_3.png"
  }

});


document.getElementById("shop_item_5_switch").onchange = changeShopItemFive;

function changeShopItemFive() {
  var img = document.getElementById("item_5_switch");
  img.src = this.value;
}

document.getElementById('item_5_switch').addEventListener('mouseenter', function() {

  var x = document.getElementById('shop_item_5_switch')

  if (x.value === "img/apparel/shop_item_5.png") {
    this.src = "img/apparel/shop_item_5_alt.png";
  } else if (x.value === "img/apparel/shop_item_5_alt_1.png") {
    this.src = "img/apparel/shop_item_5_alt_2.png";
  } else if (x.value === "img/apparel/shop_item_5_alt_3.png") {
    this.src = "img/apparel/shop_item_5_alt_4.png"
  } else if (x.value === "img/apparel/shop_item_5_alt_5.png") {
    this.src = "img/apparel/shop_item_5_alt_6.png"
  }
  
});

document.getElementById('item_5_switch').addEventListener('mouseleave', function() {
  
  var x = document.getElementById('shop_item_5_switch')

  if (x.value === "img/apparel/shop_item_5.png") {
    this.src = "img/apparel/shop_item_5.png";
  } else if (x.value === "img/apparel/shop_item_5_alt_1.png") {
    this.src = "img/apparel/shop_item_5_alt_1.png";
  } else if (x.value === "img/apparel/shop_item_5_alt_3.png") {
    this.src = "img/apparel/shop_item_5_alt_3.png"
  } else if (x.value === "img/apparel/shop_item_5_alt_5.png") {
    this.src = "img/apparel/shop_item_5_alt_5.png"
  }
  
});


document.getElementById("shop_item_11_switch").onchange = changeShopItemFive;

function changeShopItemFive() {
  var img = document.getElementById("item_11_switch");
  img.src = this.value;
}

document.getElementById('item_11_switch').addEventListener('mouseenter', function() {

  var x = document.getElementById('shop_item_11_switch')

  if (x.value === "img/apparel/shop_item_11.png") {
    this.src = "img/apparel/shop_item_11_alt.png";
  } else if (x.value === "img/apparel/shop_item_11_alt_1.png") {
    this.src = "img/apparel/shop_item_11_alt_2.png";
  }
  
});

document.getElementById('item_11_switch').addEventListener('mouseleave', function() {
  
  var x = document.getElementById('shop_item_11_switch')

  if (x.value === "img/apparel/shop_item_11.png") {
    this.src = "img/apparel/shop_item_11.png";
  } else if (x.value === "img/apparel/shop_item_11_alt_1.png") {
    this.src = "img/apparel/shop_item_11_alt_1.png";
  }
  
});