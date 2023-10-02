let projects = [
  {
    id:1,
    name:'Hotel nacional',
    subtitle:'hotel website template',
    photo1:'/projects/nacional1.webp',
    photo2:'/projects/nacional2.webp',
    photo3:'/projects/nacional5.webp',
    tech:'VueJS / NodeJS',
    desc:'Multilanguage template based on an important hotel located in Spain, designed from scratch with a main page, administrator CRUD, and reservation system. Created using Vue.js, vuetify and Node.js with a database in MongoDB. ',
    github:'https://github.com/YojayDeHorta/Hotel-nacional-completo',
    page:'https://hotelnacional.netlify.app/'
  },
  {
      id:2,
      name:'Hotel casa barlovento',
      subtitle:'hotel website',
      photo1:'/projects/barlovento1.webp',
      photo2:'/projects/barlovento2.webp',
      photo3:'/projects/barlovento3.webp',
      tech:'VueJS / NodeJS',
      desc:'Multilanguage project destined for an important hotel in Colombia with CRUD of administrator where the loading and uploading of data is handled. Created using Vue.js, vuetify and Node.js with database in Firebase.',
      github:'',
      page:'https://www.hotelcasabarlovento.com/'
  },
  {
    id:6,
    name:'Anime List',
    subtitle:'Anime database',
    photo1:'/projects/anime1.webp',
    photo2:'/projects/anime2.webp',
    photo3:'/projects/anime3.webp',
    tech:'ReactJS / MaterialUI ',
    desc:'Website for anime information with filters, search and user reviews. Created with ReactJS and MaterialUI using jikan API.',
    github:'https://github.com/YojayDeHorta/Anime-list-react',
    page:'https://animelistproject.netlify.app'
  },
  {
      id:3,
      name:'Unit Converter',
      subtitle:'unit conversion application',
      photo1:'/projects/unit1.webp',
      photo2:'/projects/unit2.webp',
      photo3:'/projects/unit4.webp',
      tech:'AstroJS / NestJS',
      desc:'Website for unit converter, the units available to convert are: length, speed, time and currency exchange. Created using Astrojs and Nestjs using Currency Conversion API.',
      github:'https://github.com/YojayDeHorta/equivalenciasApp',
      page:'https://equivalencies.onrender.com'
  },
  {
    id:4,
    name:'Pinky store',
    subtitle:'store website',
    photo1:'/projects/pinkystore1.webp',
    photo2:'/projects/pinkystore2.webp',
    photo3:'/projects/pinkystore3.webp',
    tech:'Bootstrap / PHP',
    desc:'Web page created with Bootstrap and php with a Mysql database simulating a website to buy fruits where there is a login for users and a customer management system in addition to the products for sale for administrators',
    github:'',
    page:'http://pinkystore.rf.gd/'
  },
  {
    id:5,
    name:'HapFit',
    subtitle:'fitness app',
    photo1:'/projects/hapfit1.webp',
    photo2:'/projects/hapfit2.webp',
    photo3:'/projects/hapfit3.webp',
    tech:'Vuejs / Electron / Nodejs',
    desc:'Mobile application created using Vue.js, electron, Node.js with Mysql database, file upload with cloudinary and stripe payment gateway. Project for a chain of gyms where the goal is to keep customers in touch, offer exclusive services and plans, upload plans and help routines for new ones, and make new friends. This website is a demo of an Android app made specifically for the size of a phone, you can view the app here:',
    github:'https://github.com/YojayDeHorta/HapFit',
    page:'https://hap-fit.vercel.app'
  },
];
var modal = new bootstrap.Modal(document.getElementById("modal"), {});
const buttonsModal = document.querySelectorAll('button.buttonModal');
let carouselimg = document.getElementsByClassName('carousel-inner')[0]
let modalbody = document.getElementsByClassName('modal-body')[0]
let modalfooter = document.getElementsByClassName('modal-footer')[0]


let data = [
  {
    name: 'Hotel',
    tech: 'javascript',

  },
];
buttonsModal.forEach((button) => {
  button.addEventListener('click', () => {
    let obj = projects.find(o => o.id == button.value);

    // console.log(obj, button.value);
    carouselimg.innerHTML = `
    <div class="carousel-item active">
      <img class="imgProjects" src="${obj.photo1}" alt="${obj.photo1}" class="d-block" >
    </div>
    <div class="carousel-item ">
      <img class="imgProjects" src="${obj.photo2}" alt="${obj.photo2}" class="d-block" >
    </div>
    <div class="carousel-item ">
      <img class="imgProjects" src="${obj.photo3}" alt="${obj.photo3}" class="d-block" >
    </div>
    `
    modalbody.innerHTML = `
    <h1>${obj.name}</h1>
    <h4>${obj.subtitle}</h4>
    <p>${obj.desc}</p>
    `
    modalfooter.innerHTML = ""
    if (obj.github != '') {
      modalfooter.innerHTML = `
      <a target="_blank" class="btn btn-secondary" href="${obj.github}">Visit Github <i class="bi bi-github"></i></a>
      `
    }
    if (obj.page != '') {
      modalfooter.innerHTML += `
        <a target="_blank"   href="${obj.page}"  class="btn btn-success  me-auto">Web page <i class="bi bi-box-arrow-up-right"></i></a>
      `
    }
    modalfooter.innerHTML += `
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    `
    modal.show();
  });
});