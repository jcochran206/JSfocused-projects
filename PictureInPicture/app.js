//target dom elements needed for function 
const videoElement = document.getElementById('video');
const button = document.getElementById('btn');

//prompt to select media stream, pass to video element then play
async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    }catch(error){
        //catch error here
        console.log('error here:', error);
    }
}

button.addEventListener('click', async () =>{
    //disable btn
    button.disabled = true;
    //start Pic in Pic
    await videoElement.requestPictureInPicture();
    //reset
    button.disabled = false;
})


//on load call function 
selectMediaStream();

