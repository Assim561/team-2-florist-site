function test() {
	alert("Your message has been sent.");


}



window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    document.getElementById("navbar").style.padding = "20px 10px";
  } else {
    document.getElementById("navbar").style.padding = "10px 10px";
     }
}