window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector("header").style.backgroundColor = "#000000ac";
  } else {
    document.querySelector("header").style.backgroundColor = "#00000000";
  }
}