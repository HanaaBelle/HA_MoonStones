//Script marche avec les anciennes versions de certains navigateurs

    document.querySelector('a').addEventListener('click', function (event) {
    event.preventDefault();
    window.open(this.href, '_blank');
});

//Script marche avec les nouvelles versions de navigateurs

    const images = document.getElementsByTagName('img');

    for (let i = 0; i < images.length; i++) {
    images[i].style.cursor = 'pointer';

    images[i].addEventListener('click', function () {
    const imageUrl = encodeURIComponent(this.src);
    window.location.href = `image-viewer.html?src=${imageUrl}`;
});

}