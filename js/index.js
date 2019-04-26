$(document).ready(function () {
    var typed = new Typed(".element", {
        strings: ["HELLO, I'M MANISH TANDEL.", "THE AWESOME GUY!!!"],
        typeSpeed: 60,
        backSpeed: 50, 
        loop: true
    });
    particlesJS.load('particles-js', '../assets/particles.json', function() {
        console.log('callback - particles.js config loaded');
      });
});