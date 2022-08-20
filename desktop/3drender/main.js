const displayImages = document.querySelector(".boxes");
const miniSplash = 'https://api.unsplash.com/search/photos/?per_page=50&order_by=latest&orientation=landscape&query=render&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
fetch(miniSplash)
.then(response =>{
    if(response.ok){
        return response.json();
    }
    else{
        alert(response.status);
    }
})
.then(data =>{
    for(i = 0 ; i < data.results.length; i++){
        var images = document.createElement("div");
        var imagesDownloadLink = document.createElement("a");
        Object.assign(imagesDownloadLink, {
            href: data.results[i].urls.full,
            target: '_blank'
        });
        imagesDownloadLink.appendChild(images);
        images.classList.add('box');
        images.style.backgroundImage = 'url('+data.results[i].urls.regular+')';
        displayImages.appendChild(imagesDownloadLink);
    }
});