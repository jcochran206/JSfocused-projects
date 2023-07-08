//dom element (target)
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

//dark or light mode for images
function imageMode(color){
    image1.src = `img/undraw_team_up_${color}.svg`;
    image2.src = `img/undraw_join_${color}.svg`;
    image3.src = `img/undraw_color_palette_${color}.svg`;
}
//dark mode styles


//light mode styles


//function to switch dynamically (action)
function switchTheme(event){
    //change theme of document sections
    console.log(event)
}

//event listener 
toggleSwitch.addEventListener('change', switchTheme);