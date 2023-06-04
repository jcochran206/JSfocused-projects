//UI elements to interact with 
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
//array of photos
let photosArray = [];

//limit for photos
const count = 30;
const apiKey = '';
//unsplash API 
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//check if all images are loaded
function imageLoaded(){
    console.log('image loaded');
    imagesLoaded++;
    if(imagesLoaded === totalImages){
        ready = true;
        loader.hidden = true;
        console.log('ready =', ready)
    }
}

//Helper function for set attributes
function setAttributes(element, attributes){
    for(const key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

//Create elements for links and photos, add to dom
function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash 
        const item = document.createElement("a");
        setAttributes(item, {
            href: photo.links.html,
            target: '_blank',
        })
        
        //create an img for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description,
            title: photo.alt_description,
        })
        //Event listener check when each is finished loading
        img.addEventListener('load', imageLoaded); 
        //put <img> inside <a>, then both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}


//Get photos from unsplaced fetch request 
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        displayPhotos(); 
        console.log(photosArray);

    }catch (error){
        console.log(error, 'did not fetch unsplash data')
    }
}

//check to see if scrolling near bottom of page, load more pictures
window.addEventListener('scroll', () => {
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready){
        console.log('load more')
        ready = false;
        getPhotos();
    }
});

//on load callback
//getPhotos();