//first page
const displayImages = document.querySelector(".desktop-img-container-1");
const miniSplash = 'https://api.unsplash.com/search/photos/?per_page=30&order_by=latest&content_filter=high&orientation=landscape&query=blossom&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
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
        var images = document.createElement("img");
        var imagesDownloadLink = document.createElement("a");
        Object.assign(imagesDownloadLink, {
            href: data.results[i].urls.full,
            target: '_blank'
        });
        imagesDownloadLink.appendChild(images);
        imagesDownloadLink.classList.add('box');
        images.setAttribute('src' , data.results[i].urls.regular);
        displayImages.appendChild(imagesDownloadLink);
    }
});

//second page 
const displayImages2 = document.querySelector(".desktop-img-container-2");
const miniSplash2 = 'https://api.unsplash.com/search/photos/?page=2&per_page=30&order_by=latest&content_filter=high&orientation=landscape&query=blossom&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
fetch(miniSplash2)
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
        var images = document.createElement("img");
        var imagesDownloadLink = document.createElement("a");
        Object.assign(imagesDownloadLink, {
            href: data.results[i].urls.full,
            target: '_blank'
        });
        imagesDownloadLink.appendChild(images);
        imagesDownloadLink.classList.add('box');
        images.setAttribute('src' , data.results[i].urls.regular);
        displayImages2.appendChild(imagesDownloadLink);
    }
});