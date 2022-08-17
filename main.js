//theme toggler

//Navigation menu toogle
// var menuToggler = document.querySelector('.bars');
// var navItems = document.querySelector('.nav-items');
// var bar1 = document.querySelector('.bar1');
// var bar2 = document.querySelector('.bar2');
// var bar3 = document.querySelector('.bar3');
// menuToggler.onclick = function menuToggler(){
//     if(navItems.style.display === 'none'){
//         navItems.style.display = 'flex';
//     }
//     else{
//         navItems.style.display = 'none';
//     }
// }

// const displayImages = document.querySelector(".boxes");
// const miniSplash = 'https://api.unsplash.com/search/photos/?per_page=20&order_by=latest&orientation=landscape&query=nature+landscape+mountains+rivers+forest&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
// fetch(miniSplash)
// .then(response =>{
//     if(response.ok){
//         return response.json();
//     }
//     else{
//         alert(response.status);
//     }
// })
// .then(data =>{
//     for(i = 0 ; i < data.results.length; i++){
//         var images = document.createElement("img");
//         var imagesDownloadLink = document.createElement("a");
//         Object.assign(imagesDownloadLink, {
//             href: data.results[i].urls.raw,
//         });
//         images.setAttribute('src' , data.results[i].urls.regular);
//         imagesDownloadLink.download;
//         imagesDownloadLink.appendChild(images);
//         imagesDownloadLink.classList.add('box');
//         images.style.width = '100%';
//         images.style.height = '100%';
//         displayImages.appendChild(imagesDownloadLink);
//         // images.style.backgroundImage = 'url('+data.results[i].urls.raw+')';
//         // images.innerHTML = '<img src='+data.results[i].urls.raw+'>';
//     }
// });
