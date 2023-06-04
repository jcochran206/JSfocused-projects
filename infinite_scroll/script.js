//UI elements to interact with 
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

//array of photos
let photosArray = [];

//Create elements for links and photos, add to dom
function displayPhotos() {
    photosArray.forEach((photo) => {
        // create <a> to link to unsplash 
        const item = document.createElement("a");
        item.setAttribute('href', photo.links.html);
        item.setAttribute('target', '_blank');
        //create an img for photo
        const img = document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        //put <img> inside <a>, then both inside image container
        item.appendChild(img);
        imageContainer.appendChild(item);

    });
}


//limit for photos
const count = 10;
const apiKey = 'api key here';
//unsplash API 
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

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

//on load 
getPhotos();