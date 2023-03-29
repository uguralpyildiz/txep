

const navSet = document.querySelector(".navbar");
const logoi = document.querySelector(".logo-i");


document.addEventListener("scroll", () => {

    crScrollPos = window.pageYOffset;
    if (crScrollPos > 150) {
        navSet.style.top = "-400px";
        document.getElementById("logo").style.width = "350px";
        document.getElementById("logo").src = "Texep_Logo_Web_Light.svg";
       
    }



    if (crScrollPos >= 150) {
        navSet.style.position = "fixed !important";
        navSet.style.top = "0px";
        navSet.style.background = "linear-gradient(320deg, #212b4d 40%, #1D2644 40%)";
        document.getElementById("logo").src = "logo_beyaz.svg";
        document.getElementById("logo").style.width = "160px";
        
    }

    if (crScrollPos < 150) {
        navSet.style.position = "";
        navSet.style.background = "";
        navSet.style.top = "";
        document.getElementById("logo").src = "Texep_Logo_Web_Light.svg";
        document.getElementById("logo").style.width = "350px";
    }
});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function () {
//     var currentScrollPos = window.pageYOffset;
//     if (prevScrollpos > currentScrollPos) {

//         nAV.style.top = "500px";
//     } else {
//         nAV.style.top = "-200px";

//     }
//     prevScrollpos = currentScrollPos;
// }



const nthAll = document.querySelectorAll("#nth a");
const dotLinkEffect = document.querySelector(".dot-link-effect");

function removeAllClass_fromNth() {
    const nthAll = document.querySelectorAll("#nth a");
    for (let i = 0; i < nthAll.length; i++) {
        dotLinkEffect.classList.remove("active" + i)
    }
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("click", () => {
        removeAllClass_fromNth()
        dotLinkEffect.classList.add("active" + i)
    })
}

for (let i = 0; i < nthAll.length; i++) {
    nthAll[i].addEventListener("mouseover", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = ".30"
        }
        nthAll[i].style.opacity = "1"
    })

    nthAll[i].addEventListener("mouseout", () => {
        for (let i = 0; i < nthAll.length; i++) {
            nthAll[i].style.opacity = "1"
        }
    })
}

const menuBtn = document.querySelector(".menu-btn");
const navbarLinksM = document.querySelector(".nav-links");
const navLinkContainer = document.querySelector(".nav-link-container");
const downloadBtn = document.querySelector(".download-cv");



document.addEventListener("click", (e) => {
    target = e.target.parentNode;

    if (target === menuBtn) {
        navbarLinksM.classList.toggle("active-nav")


        setTimeout(() => {
            navbarLinksM.classList.toggle("anim-navs")
        }, 100);
    }

    if (target != menuBtn && target != navLinkContainer && target != downloadBtn && target != navbarLinksM) {
        setTimeout(() => {
            navbarLinksM.classList.remove("active-nav")
        }, 100);
        navbarLinksM.classList.remove("anim-navs")

    }


});














const menubtn = document.querySelector(".menubtn")
const overlay = document.querySelector(".overlay")
const navbar = document.querySelector(".navbar")
const body = document.querySelector("body")
const link = document.querySelectorAll(".links a")

menubtn.addEventListener("click", ()=>{
    body.style.overflow = "hidden";
    overlay.style.display = "block";
    navbar.style.left = "0";
})


overlay.addEventListener("click", () => {
    body.style.overflow = "auto";
    navbar.style.left = "-100%";
    overlay.style.display = "none";
})
for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", () => {
        body.style.overflow = "auto";
        navbar.style.left = "-100%";
        overlay.style.display = "none";
    })  
}

