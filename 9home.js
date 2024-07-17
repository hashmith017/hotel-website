function details(){
    var ele = document.querySelector('.p');
    var ele1 = document.querySelector('.c');
    ele.textContent = "Road No 1 , Banjara Hills , Hyderabad , 500034";
    ele1.textContent = "30.1km from Rajiv Gandhi International Airport";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
function details1(){
    var ele = document.querySelector('.p1');
    var ele1 = document.querySelector('.c1');
    ele.textContent = "Apollo Bunder , Mumbai , 400 001";
    ele1.textContent = "25.0km from Chhatrapati Shivaji International Airport";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
function details2(){
    var ele = document.querySelector('.p2');
    var ele1 = document.querySelector('.c2');
    ele.textContent = "34-B , Belvedere Road , Alipore , Kolkata , 700027";
    ele1.textContent = "22.9km from Netaji Subhash Chandra Bose International Airport";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
function details3(){
    var ele = document.querySelector('.p3');
    var ele1 = document.querySelector('.c3');
    ele.textContent = "2 Sardar Patel Marg Diplomatic Enclave,New Delhi , 110021";
    ele1.textContent = "17.5km from Indira Gandhi International Airport";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
function details4(){
    var ele = document.querySelector('.p4');
    var ele1 = document.querySelector('.c4');
    ele.textContent = "Binny Road , Chennai , Tamil Nadu - 600002 INDIA";
    ele1.textContent = "16.5km from Chennai International Airport";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
function details5(){
    var ele = document.querySelector('.p5');
    var ele1 = document.querySelector('.c5');
    ele.textContent = "DMCC Plot No. 2-27 , Al Thanyah,";
    ele1.textContent = "Jumeirah Lakes Towers , Dubai , United Arab Emirates";
    ele.classList.toggle('hidden')
    ele1.classList.toggle('hidden')
}
var slideIndex = 0;
showSlides();
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 5000);
}
function plusSlides(n) {
    showSlides(slideIndex += n);
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

var click = document.getElementById('clickme');
click.addEventListener('click', myfunction);

function myfunction() {
  var tablewrap = document.getElementById('displaytable');
  tablewrap.classList.toggle('hidden')
};

