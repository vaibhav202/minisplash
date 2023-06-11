var navBar = document.querySelector('nav');
var body = document.body;
var html = document.documentElement;
var prevScroll = window.scrollY;

window.onscroll = function(){
    var currentScroll = window.scrollY;
    
    if(prevScroll < currentScroll){
        navBar.style.transform = "translate(0, -100%)"; 
    }
    else{
        navBar.style.transform = "translate(0)";
    }
    prevScroll = currentScroll;
}