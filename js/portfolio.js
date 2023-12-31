let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add('active-tab');
}

let sidemenu = document.getElementById('sidemenu');

function openMenu(){
    sidemenu.style.right = '0';
}
function closeMenu(){
    sidemenu.style.right = '-100%';
}

const openMenuIcon = document.querySelector('.open-menu-icon');
const closeMenuIcon = document.querySelector('.close-menu-icon');
openMenuIcon.addEventListener('click', openMenu);
closeMenuIcon.addEventListener('click', closeMenu);


const scriptURL = 'https://script.google.com/macros/s/AKfycbydwZ-Dpu1-lX4lCkEmTNgJUGS438s9j2bXBkV47j_rSLbdNNdwf1HyscdZ6neNPfGs/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = 'Message sent successfully';
        setTimeout(function(){
            msg.innerHTML = '';
        }, 5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})

const headerText = document.querySelector('.header-text')
const icon = document.getElementById('icon');
const profile = document.getElementById('profile-of-sasu');
const logo = document.querySelector('.logo');
const navBar = document.querySelectorAll('.js-nav-bar');
icon.addEventListener('click', ()=> {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        headerText.classList.add('header-text-dark');
        icon.src = "dark theme icon/sun.png";
        profile.src = "/img/black-anime-uchiha-sasuke-.jpg";
        
        logo.src =  "img/logo.jpg";
    }else {
        headerText.classList.remove('header-text-dark');
        icon.src = "dark theme icon/moon.png";
        profile.src = "/img/zazake.jpg";
        logo.src =  "img/logo2.png";
    }
})
navBar.forEach((element)=>{
    element.addEventListener('click', closeMenu);
});
