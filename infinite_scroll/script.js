//limit for photos
const count = 10;
const apiKey = 'key here';
//unsplash API 
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get photos from unsplaced fetch request 
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        const jsonData = await response.json();
        console.log(jsonData);

    }catch (error){
        console.log(error, 'did not fetch unsplash data')
    }
}

//on load 
getPhotos();