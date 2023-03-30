const nameInput = document.querySelector(".c-name")
const areaContainer = document.querySelectorAll(".area-container")
const emailInput = document.querySelector(".c-email")
const errMessage = document.querySelectorAll(".errmessage")
const textareaInput = document.querySelector(".textarea")
const submitCont = document.querySelector("#submitC");
const downloadCv = document.querySelector("#downloadCv");
const downloadText = document.querySelector(".download-text");
const submitContText = document.querySelector(".submit-text");
const spinnerAnim = document.querySelector(".spinner-anim");
const selectElement = document.getElementById("subject");
const selecEl = document.querySelector(".select-err")


function validate(email) {
    var emailValid = /^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/;
    return emailValid.test(email);
}
selectElement.addEventListener("input", () => {
    selecEl.innerHTML = ""
})

submitCont.addEventListener("click", () => {
    
    
    for (let i = 0; i < areaContainer.length; i++) {
        
        if (nameInput.value.trim().length < 2 || validate(emailInput.value) === false || textareaInput.value.trim().length < 10 || selectElement.value === "subject") {
            areaContainer[i].classList.add("error")
            errMessage[i].style.display = "block";
            if (nameInput.value.trim().length < 1) {

                errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>I need to know your name!";
            }
            if (emailInput.value.trim().length < 1) {

                errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>I need to know where to reach you!";
            }
            if (textareaInput.value.trim().length < 1) {

                errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>You need to send me a message!";
            }
            if (nameInput.value.trim().length > 2) {
                areaContainer[0].classList.remove("error")
                errMessage[0].style.display = "none";
            }
            if (validate(emailInput.value) === true) {
                areaContainer[1].classList.remove("error")
                errMessage[1].style.display = "none";
            }
            if (textareaInput.value.trim().length > 10) {
                areaContainer[2].classList.remove("error")
                errMessage[2].style.display = "none";
            }
           
            if (selectElement.value === "subject") {
                selecEl.innerHTML = "<i class='fa-solid fa-circle-info'></i> please select";
            }
            submitCont.classList.add("shake")
            setTimeout(() => {
                submitCont.classList.remove("shake")
            }, 400);

        } else if (validate(emailInput.value) === true) {
            submitCont.classList.remove("shake")
            areaContainer[i].classList.remove("error")
            errMessage[i].style.display = "none";
            submitContText.style.top = "-100px";
            submitCont.style.pointerEvents = "none";
            setTimeout(() => {
                submitCont.innerHTML = '<span class="spinner-anim"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle></svg></span>'
            }, 250);

            var nameValue = nameInput.value;

            setTimeout(() => {
                submitCont.classList.add("okbtn")
                submitCont.innerHTML = '<span class="download-text"><i class="fa-solid fa-check"></i>Thank You!</span>'
                nameInput.value = "";
                emailInput.value = "";
                textareaInput.value = "";
            }, 2500);

            setTimeout(() => {
                submitCont.classList.remove("okbtn")
                submitCont.innerHTML = 'SUBMIT'
                submitCont.style.pointerEvents = "auto";
            }, 7000);

        }
    }

})



nameInput.addEventListener("input", () => {

    if (nameInput.value.trim().length > 2) {
        areaContainer[0].classList.remove("error")
        errMessage[0].style.display = "none";
    }
    if (nameInput.value.trim().length <= 2) {
        areaContainer[0].classList.add("error")
        errMessage[0].style.display = "block";
        errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>Are you sure it's a name?";
    }
    if (nameInput.value.trim().length < 1) {
        errMessage[0].innerHTML = "<i class='fa-solid fa-circle-info'></i>I need to know your name!";
    }
})

emailInput.addEventListener("input", () => {

    if (validate(emailInput.value) === true) {
        areaContainer[1].classList.remove("error")
        errMessage[1].style.display = "none";
    }
    if (validate(emailInput.value) === false) {
        areaContainer[1].classList.add("error")
        errMessage[1].style.display = "block";
        errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>Uh oh, that doesn't look like an email address...";
    }
    if (emailInput.value.trim().length < 1) {
        errMessage[1].innerHTML = "<i class='fa-solid fa-circle-info'></i>I need to know where to reach you!";
    }

})

textareaInput.addEventListener("input", () => {
    errMessage[2].style.color = "";
    if (textareaInput.value.trim().length > 10) {
        areaContainer[2].classList.remove("error")
        errMessage[2].style.display = "none";
    }
    if (textareaInput.value.trim().length <= 10) {
        areaContainer[2].classList.add("error")
        errMessage[2].style.display = "block";
        errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>Message too short!";
    }
    if (textareaInput.value.trim().length < 1) {
        errMessage[2].innerHTML = "<i class='fa-solid fa-circle-info'></i>You need to send me a message!";
    }
})


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

