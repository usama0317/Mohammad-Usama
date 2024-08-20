var audio = document.getElementById("audioPlayer"), loader = document.getElementById("preloader"); function settingtoggle() { document.getElementById("setting-container").classList.toggle("settingactivate"), document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"), document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow") } function playpause() { !1 == document.getElementById("switchforsound").checked ? audio.pause() : audio.play() } function visualmode() { document.body.classList.toggle("light-mode"), document.querySelectorAll(".needtobeinvert").forEach(function (e) { e.classList.toggle("invertapplied") }) } window.addEventListener("load", function () { loader.style.display = "none", document.querySelector(".hey").classList.add("popup") }); let emptyArea = document.getElementById("emptyarea"), mobileTogglemenu = document.getElementById("mobiletogglemenu"); function hamburgerMenu() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"), document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"), document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"), document.getElementById("burger-bar3").classList.toggle("hamburger-animation3") } function hidemenubyli() { document.body.classList.toggle("stopscrolling"), document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"), document.getElementById("burger-bar1").classList.remove("hamburger-animation1"), document.getElementById("burger-bar2").classList.remove("hamburger-animation2"), document.getElementById("burger-bar3").classList.remove("hamburger-animation3") } const sections = document.querySelectorAll("section"), navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"), mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li"); window.addEventListener("scroll", () => { let e = ""; sections.forEach(t => { let o = t.offsetTop; t.clientHeight, pageYOffset >= o - 200 && (e = t.getAttribute("id")) }), mobilenavLi.forEach(t => { t.classList.remove("activeThismobiletab"), t.classList.contains(e) && t.classList.add("activeThismobiletab") }), navLi.forEach(t => { t.classList.remove("activeThistab"), t.classList.contains(e) && t.classList.add("activeThistab") }) }), console.log("%c Designed and Developed by Vinod Jangid ", "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"); let mybutton = document.getElementById("backtotopbutton"); function scrollFunction() { document.body.scrollTop > 400 || document.documentElement.scrollTop > 400 ? mybutton.style.display = "block" : mybutton.style.display = "none" } function scrolltoTopfunction() { document.body.scrollTop = 0, document.documentElement.scrollTop = 0 } window.onscroll = function () { scrollFunction() }, document.addEventListener("contextmenu", function (e) { "IMG" === e.target.nodeName && e.preventDefault() }, !1); let Pupils = document.getElementsByClassName("footer-pupil"), pupilsArr = Array.from(Pupils), pupilStartPoint = -10, pupilRangeX = 20, pupilRangeY = 15, mouseXStartPoint = 0, mouseXEndPoint = window.innerWidth, currentXPosition = 0, fracXValue = 0, mouseYEndPoint = window.innerHeight, currentYPosition = 0, fracYValue = 0, mouseXRange = mouseXEndPoint - mouseXStartPoint; const mouseMove = e => { fracXValue = (currentXPosition = e.clientX - mouseXStartPoint) / mouseXRange, fracYValue = (currentYPosition = e.clientY) / mouseYEndPoint; let t = pupilStartPoint + fracXValue * pupilRangeX, o = pupilStartPoint + fracYValue * pupilRangeY; pupilsArr.forEach(e => { e.style.transform = `translate(${t}px, ${o}px)` }) }, windowResize = e => { mouseXEndPoint = window.innerWidth, mouseYEndPoint = window.innerHeight, mouseXRange = mouseXEndPoint - mouseXStartPoint }; window.addEventListener("mousemove", mouseMove), window.addEventListener("resize", windowResize);

// particlesJS("particles-container", {
//     particles: {
//         number: { value: 150, density: { enable: true, value_area: 800 } },
//         color: { value: "#ffffff" },
//         shape: {
//             type: "triangle",
//             stroke: { width: 0, color: "#000000" },
//             polygon: { nb_sides: 5 },
//             image: { src: "img/github.svg", width: 100, height: 100 }
//         },
//         opacity: {
//             value: 0.5,
//             random: false,
//             anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
//         },
//         size: {
//             value: 2, // Reduced size of the particles
//             random: true,
//             anim: { enable: false, speed: 10, size_min: 0.1, sync: false } // Slower size animation speed
//         },
//         line_linked: {
//             enable: true,
//             distance: 100, // Reduced distance between linked lines
//             color: "#ffffff",
//             opacity: 0.4,
//             width: 1
//         },
//         move: {
//             enable: true,
//             speed: 2, // Reduced speed
//             direction: "none",
//             random: false,
//             straight: false,
//             out_mode: "out",
//             bounce: false,
//             attract: { enable: false, rotateX: 600, rotateY: 1200 }
//         }
//     },
//     interactivity: {
//         detect_on: "canvas",
//         events: {
//             onhover: { enable: true, mode: "repulse" },
//             onclick: { enable: true, mode: "push" },
//             resize: true
//         },
//         modes: {
//             grab: { distance: 400, line_linked: { opacity: 1 } },
//             bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 6 },
//             repulse: { distance: 200, duration: 0.9 },
//             push: { particles_nb: 4 },
//             remove: { particles_nb: 2 }
//         }
//     },
//     retina_detect: true
// });

// var count_particles, stats, update;
// stats = new Stats();
// stats.setMode(0);
// stats.domElement.style.position = "absolute";
// stats.domElement.style.left = "0px";
// stats.domElement.style.top = "0px";
// document.body.appendChild(stats.domElement);
// count_particles = document.querySelector(".js-count-particles");
// update = function () {
//     stats.begin();
//     stats.end();
//     if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
//         count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
//     }
//     requestAnimationFrame(update);
// };
// requestAnimationFrame(update);
