//fist page
const displayImages = document.querySelector(".img-container-1");
const miniSplash = 'https://api.unsplash.com/search/photos/?per_page=30&order_by=latest&content_filter=high&orientation=portrait&query=aerial+aerial%20view&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
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
        var linkToImg = document.createElement("a");
        linkToImg.href = data.results[i].urls.raw;
        linkToImg.target = 'imgOpened';
        linkToImg.addEventListener('click', openingImg);
        linkToImg.appendChild(images);
        linkToImg.classList.add('box');
        images.src = data.results[i].urls.small;
        images.loading = 'lazy';
        displayImages.appendChild(linkToImg);
    }
});

//second page
const displayImages2 = document.querySelector(".img-container-2");
const miniSplash2 = 'https://api.unsplash.com/search/photos/?page=2&per_page=30&order_by=latest&content_filter=high&orientation=portrait&query=aerial+aerial%20view&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
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
        var linkToImg = document.createElement("a");
        linkToImg.href = data.results[i].urls.raw;
        linkToImg.target = 'imgOpened';
        linkToImg.addEventListener('click', openingImg);
        linkToImg.appendChild(images);
        linkToImg.classList.add('box');
        images.src = data.results[i].urls.small;
        images.loading = 'lazy';
        displayImages2.appendChild(linkToImg);
    }
});