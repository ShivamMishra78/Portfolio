// ---------------------------
// PROJECT MODAL
// ---------------------------
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalImage = document.getElementById('modalImage');
const modalLink = document.getElementById('modalLink');

function openProject(title, desc, img, link){
  modalTitle.innerText = title;
  modalDesc.innerText = desc;
  modalImage.src = img;
  modalLink.href = link;
  modal.style.display = "flex";
}

function closeProject(){
  modal.style.display = "none";
}

// Close modal if clicked outside
window.addEventListener('click', (e)=>{
  if(e.target === modal) closeProject();
});

// ---------------------------
// DARK/LIGHT MODE TOGGLE
// ---------------------------
const modeToggle = document.getElementById('modeToggle');
if(modeToggle){
  modeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark-mode');
  });
}

// ---------------------------
// SKILL BAR ANIMATION (Skills Page)
// ---------------------------
const skills = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.8;
  skills.forEach(skill => {
    const skillTop = skill.getBoundingClientRect().top;
    if(skillTop < triggerBottom){
      skill.style.width = skill.getAttribute('data-width');
    }
  });
});

// ---------------------------
// FUN SECTION: GUESS NUMBER GAME
// ---------------------------
const funBtn = document.getElementById('funBtn');
if(funBtn){
  funBtn.addEventListener('click', ()=>{
    const num = prompt("Guess a number between 1-10");
    const random = Math.floor(Math.random()*10)+1;
    if(parseInt(num)===random) alert("Congrats! You guessed it right: "+random);
    else alert("Oops! The correct number was "+random);
  });
}

// ---------------------------
// TESTIMONIAL CAROUSEL
// ---------------------------
let carouselIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonials(){
  if(testimonials.length>0){
    testimonials.forEach((t,i) => t.style.display = 'none');
    carouselIndex++;
    if(carouselIndex > testimonials.length) carouselIndex = 1;
    testimonials[carouselIndex-1].style.display = 'block';
    setTimeout(showTestimonials,3000);
  }
}
showTestimonials();