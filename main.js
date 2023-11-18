var navBar = document.querySelector('nav');
var scrollPositionThreshold = 50;
var prevScrollPosition = window.scrollY;

window.onscroll = function(){
    var currentScrollPosition = window.scrollY;
    const isAtTop = currentScrollPosition === 0;
    
    if (currentScrollPosition >= scrollPositionThreshold) {
      if (currentScrollPosition > prevScrollPosition) {
        navBar.style.transform = "translate(0, -100%)";
      } 
      else {
        navBar.style.transform = "translate(0)";
      }
    } 
    else {
      navBar.style.transform = "translate(0)";
    }
  prevScrollPosition = currentScrollPosition;
}

function openingImg(event) {
    event.preventDefault();
    var overlay = document.querySelector("#openedImgOverlay");
    var imgOpened = document.querySelector("#imgOpened");
    var thumbnail = this.getBoundingClientRect();
    var thumbnailX = thumbnail.left + thumbnail.width / 2;
    var thumbnailY = thumbnail.top + thumbnail.height / 2;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;


    document.body.classList.add('disable-scroll');

    var initialScale = Math.min(windowWidth / thumbnail.width, windowHeight / thumbnail.height);
    var initialTranslateX = windowWidth / 2 - thumbnailX;
    var initialTranslateY = windowHeight / 2 - thumbnailY;

    overlay.style.transformOrigin = `${thumbnailX}px ${thumbnailY}px`;
    overlay.style.transform = `translate(${initialTranslateX}px, ${initialTranslateY}px) scale(${initialScale})`;

    requestAnimationFrame(function() {
      overlay.classList.add('zoomed');
      overlay.style.transform = 'translate(-50%, -50%) scale(1)';
      overlay.style.opacity = "1";
    });

    var loadingImg = document.createElement('div');
    loadingImg.classList.add('loadingImg');
    overlay.appendChild(loadingImg);

    var imageLoaded = false;
    imgOpened.onload = function() {
        if (!imageLoaded) {
          overlay.removeChild(loadingImg);
          imageLoaded = true;
        }
    };

    imgOpened.src = this.href;
    imgOpened.loading = 'lazy';
}
  
var overlay = document.querySelector("#openedImgOverlay");
overlay.addEventListener('click', function(event) {
  if (event.target === overlay) {
    document.body.classList.remove('disable-scroll');
    overlay.style.transform = 'translate(-50%, -50%) scale(0)';
    overlay.style.opacity = "0";
    var imgOpened = document.querySelector("#imgOpened");
    imgOpened.src = ' ';
    imgOpened.alt = ' ';
  }
});