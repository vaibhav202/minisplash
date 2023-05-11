var body = document.body;
var nav = document.querySelector('nav');

body.onscroll = navClr();
// body.addEventListener('scroll', navClr);
function navClr(){
    if(body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        nav.classList.add('bg-neutral-800');
    }
    else{
        nav.classList.remove('bg-neutral-800');
    }
}