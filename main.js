const containerImages = document.getElementById("container-content-services");
const imagesCarousel = document.querySelectorAll("#container-content-services img");
const depoiment1 = document.getElementById("img2");
const depoiment2 = document.getElementById("img1");
const showMain = document.getElementById("main");
const closeMain = document.getElementById("close");
const itemsHidden = document.getElementById("show-main-items");
const nextImageDepoiment = document.querySelector(".btn-next");
const beforeImageDepoiment = document.querySelector(".btn-before");
const registerEmailValue = document.getElementById("textfield");
const buttonregister = document.getElementById("btn-register")
const widthWindow = window.screen.width;
let reload = document.location;

if (widthWindow < 580) {
  
  let indexImageCurrent = 0;
  
  function nextImageCarousel() {
    indexImageCurrent++;
    
    if (indexImageCurrent > imagesCarousel.length - 1) {
      indexImageCurrent = 0;
    }
    containerImages.style.transform = `translateX(${-indexImageCurrent * 300}px)`;
  }
  setInterval(nextImageCarousel, 2500);
}

nextImageDepoiment.addEventListener('click',() => {
  depoiment1.style.display = "flex";
  depoiment2.style.display = "none";
})

beforeImageDepoiment.addEventListener('click',() => {
  depoiment1.style.display = "none";
  depoiment2.style.display = "flex";
})

showMain.addEventListener("click", () => {
  itemsHidden.style.transform = "translateY(90px)";
  itemsHidden.style.display = "flex";
});

closeMain.addEventListener("click", () => {
  itemsHidden.style.display = "none";
});

  buttonregister.addEventListener("click", (e) => {
    e.preventDefault()
    console.log()
    if(registerEmailValue.value === '') {
      registerEmailValue.placeholder = 'Confira seus dados';
      registerEmailValue.style.backgroundColor = '#ddd';
      registerEmailValue.style.color = "#000";
      setTimeout(() => {
        registerEmailValue.style.backgroundColor = '#fff';
        registerEmailValue.style.color = "#f9f9f9";
        registerEmailValue.placeholder = 'Digite seu e-mail'
      },2000)
    }
    registerEmailValue.value = ''
});

