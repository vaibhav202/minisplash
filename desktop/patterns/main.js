const displayImages = document.querySelector(".boxes");
const miniSplash = 'https://api.unsplash.com/search/photos/?per_page=30&order_by=latest&orientation=landscape&query=patterns&client_id=jNPKpYi80xqW7F7Ot37Mqsaft-NsbggphFw0WRAyw-E';
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
            href: data.results[i].urls.raw,
            target: '_blank'
        });
        imagesDownloadLink.download;
        imagesDownloadLink.setAttribute('data-scroll' , '');
        imagesDownloadLink.appendChild(images);
        imagesDownloadLink.classList.add('box');
        images.setAttribute('src' , data.results[i].urls.regular);
        displayImages.appendChild(imagesDownloadLink);
        // images.style.backgroundImage = 'url('+data.results[i].urls.raw+')';
        // images.innerHTML = '<img src='+data.results[i].urls.raw+'>';
    }
});