function openNav(){
    document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
    document.getElementById("myNav").style.width = "0%"; 
}


var navBar = document.getElementById("nav");

window.onscroll = function() {stickyNav()};

function stickyNav() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    navBar.style.position = "fixed";
    navBar.style.width = "100%";
    navBar.style.background = "#fff";
    navBar.style.zIndex = "999999"
    navBar.style.color = "#717cf2";
    navBar.classList = "has_shadow"
  } else {
    navBar.style.position = "relative";
    navBar.style.background = "transparent";
    navBar.style.zIndex = "1"
    navBar.style.color = "#fff";
    navBar.classList = "no_shadow"
  }
}