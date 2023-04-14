let MenuBtn = document.getElementById('MenuBtn')
MenuBtn.addEventListener('click', function(e) {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})



var typed = new Typed('.auto-input',{
    strings: ['Computer Science Engineer','Software Engineer','ML Engineer','Data Analyst'],
    typeSpeed: 60,
    backSpeed: 60,
    backDelay: 200,
    loop: true
})