const services = [{
  type: 'solid',
  icon: 'crop',
  headerText: 'Web Design',
  discription: 'Web design encompasses the creation and arrangement of visual elements, typography, and user interface components to design engaging and accessible websites for optimal user experience.'
}, {
  type: 'solid',
  icon: 'code',
  headerText: 'Web Development',
  discription: 'Web development is the process of creating and maintaining websites and web applications, encompassing both front-end and back-end development.'
},{
  type: 'brands',
  icon: 'js',
  headerText: 'Js Developer',
  discription: 'A JavaScript developer is a coding expert proficient in using the JavaScript programming language to build dynamic and interactive web applications. They work on the client and server sides, leveraging JavaScript libraries and frameworks to create responsive, feature-rich websites and web services.'
}];
let serviceHTML = '';
services.forEach((service)=>{
  serviceHTML += `
  <div>
    <i class="fa-${service.type} fa-${service.icon}"></i>
    <h2>${service.headerText}</h2>
    <p>${service.discription}</p>
    <a href="#">Learn more</a>
  </div>
  `;
});

document.querySelector('.js-services-list').innerHTML = serviceHTML;




const showCases = [{
  image: '/img/lightburger.png',
  projectName: 'Light Burger',
  discription: 'The web helps you to order any kind of food that are on the menu list we have on this web'
}, {
  image: '/img/messayhotel.png',
  projectName: 'Messay International Hotel',
  discription: 'The website helps you to book a room that you want and to order a food from where ever you are'
},{
  image: '/img/coming soon.avif',
  projectName: 'Hawassa Mart',
  discription: 'The web helps you to buy any kind of product that you want for your face care routien and to get your self a phone'
}];


let showCasesHTML = '';
showCases.forEach((showCase)=>{
  showCasesHTML += `
  <div class="work">
    <img src="${showCase.image}" alt="">
    <div class="layer">
        <h3>${showCase.projectName}</h3>
        <p>${showCase.discription}</p>
        <a href="#"> <i class="fa-sharp fa-solid fa-arrow-up-right-from-square"></i> </a>
    </div>
  </div>
  `;
});

document.querySelector('.js-work-list').innerHTML = showCasesHTML;