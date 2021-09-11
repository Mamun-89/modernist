// mobile menu

(() => {
  const openNav = document.querySelector(".mobileMenu");
  const closeNav = document.querySelector(".closNav");
  const navMenu = document.querySelector(".main-menu");
  const menuItem = document.querySelector(".menuItem");
  const subMenu = document.querySelector(".sub-menu")

  openNav.addEventListener("click", toggleNav);
  closeNav.addEventListener("click", toggleNav);


  // document.onclick = function(e) {
  //   if (e.target.class!=='openNav' && e.target.class!=='closeNav'){
  //     e.target.classList.remove("open");
  //     e.target.document.body.classList.remove("hidden-scrolling");
  //   }
  // }
  function toggleNav() {
    navMenu.classList.toggle("open");
    document.body.classList.toggle("hidden-scrolling");

  }

})
();

// slider
const slideItem = document.querySelectorAll('.item');
const prevSlide = document.querySelector('.prevSlide');
const nextSlide = document.querySelector('.nextSlide');

var current = 0;

function reset() {
  for (var i = 0; i < slideItem.length; i++) {
    slideItem[i].style.display = 'none';
  }
}


function startSlide() {
  reset();
  slideItem[0].style.display = 'flex';
}
startSlide();

function leftSide() {
  reset();
  slideItem[current - 1].style.display = 'flex';
  current--;
}

function rightSide() {
  reset();
  slideItem[current + 1].style.display = 'flex';
  current++;
}

prevSlide.addEventListener('click', function () {

  if (current === 0) {
    current = slideItem.length;
  }
  leftSide();
})
nextSlide.addEventListener('click', function () {
  if (current === slideItem.length - 1) {
    current = -1;

  }
  rightSide();
})

// email validation

function validation() {
  let form = document.getElementById('form');
  let email = document.getElementById('email').value;
  let text = document.getElementById('emailText');
  let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (email.match(pattern)) {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = "You email is valid.";
    text.style.color = "green";
  } else {
    form.classList.remove('valid');
    form.classList.add('invalid');
    text.innerHTML = "Please enter valid email address.";
    text.style.color = "red";
  }


  if (email == "") {
    form.classList.add('valid');
    form.classList.remove('invalid');
    text.innerHTML = "";
    text.style.color = "green";
  }

}

// for toggle dropdown
// const subBtn=document.querySelector('.sub-btn');
// const subMenu=document.querySelector('.submenu');
// subBtn.addEventListener('click',function(){
//   subMenu.slideToggle(true);
// })