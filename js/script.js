"use strict";

// Helps to determine on which device our page is open

const isMobile = {
    Android: function () {
       return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
       return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
       return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
       return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
       return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

// Burger menu
const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

// Slider 1
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var dots = document.getElementsByClassName("dot");
    var title = document.getElementsByClassName("completed-projects__right-title");
    var elements = document.getElementsByClassName("completed-projects__container-element");

    if (n > elements.length) {
        slideIndex = 1;
    }

    if (n < 1) {
        slideIndex = elements.length;
    }

    for(i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        if (dots[i].classList.contains("active")) {
            dots[i].classList.remove("active");
        }
    }
    for (i = 0; i < title.length; i++) {
        if (title[i].classList.contains("active-title")) {
            title[i].classList.remove("active-title");
        }
    }
    elements[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].classList.add("active");
    title[slideIndex-1].classList.add("active-title");
}

// Slider 2

var slideIndex2 = 1;
showSlides2(slideIndex2);

function realizePlusSlides(n) {
    showSlides2(slideIndex2 += n);
}

function showSlides2(n) {
    var slides2 = document.getElementsByClassName("realize-mySlide");

    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }
    for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    slides2[slideIndex2-1].style.display = "block";
}

// Form validation
document.addEventListener("DOMContentLoaded", function () {
   // Form 1
   const form = document.getElementById("form-1");
   form.addEventListener("submit", formSend);
   
   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      if (error === 0) {
        alert(`The form has been sent!`);
        form.reset();
      } else {
        alert(`Fill in the required fields!`)
      }
    };

    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll("._reqForm1");

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                formAddError(input);
                error++;
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    function formAddError(input) {
        input.parentElement.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error');
    }

    // Form 2
    const form2 = document.getElementById("form-2");
    form2.addEventListener("submit", form2Send);

    async function form2Send(e) {
        e.preventDefault();

        let errorForm2 = form2Validate(form2);
        
        if (errorForm2 === 0) {
            alert(`The form has been sent!`);
            form2.reset();
        } else {
            alert(`Fill in the required fields!`)
        }
    }

    function form2Validate(form2) {
        let errorForm2 = 0;
        let form2Req = document.querySelectorAll('._reqForm2');

        for (let index = 0; index < form2Req.length; index++) {
            const input2 = form2Req[index];
            formRemoveError2(input2);

            if (input2.classList.contains('_email')) {
                if (emailTest(input2)) {
                    formAddError2(input2);
                    errorForm2++;
                }
            } else if (input2.getAttribute("type") === "checkbox" && input2.checked === false) {
                formAddError2(input2);
                errorForm2++;
            } else {
                if (input2.value === '') {
                    formAddError2(input2);
                    errorForm2++;
                }
            }
        }
        return errorForm2;
    }

    function formAddError2(input2) {
        input2.parentElement.classList.add('_error');
        input2.classList.add('_error');
    }

    function formRemoveError2(input2) {
        input2.parentElement.classList.remove('_error');
        input2.classList.remove('_error');
    }
    // Email test function
    function emailTest(input2) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input2.value);
    }

    // Form 3

    const form3 = document.getElementById("form-3");
    form3.addEventListener("submit", form3Send);

    async function form3Send(e) {
        e.preventDefault();

        let errorForm3 = form3Validate(form3);

        if (errorForm3 === 0) {
            alert(`The form has been sent!`);
            form3.reset();
        } else {
            alert(`Fill in the required fields!`)
        }
    }

    function form3Validate(form3) {
        let errorForm3 = 0;
        let form3Req = document.querySelectorAll('._reqForm3');

        for (let index = 0; index < form3Req.length; index++) {
            const input3 = form3Req[index];
            formRemoveError3(input3);

            if (input3.getAttribute("type") === "checkbox" && input3.checked === false) {
                formAddError3(input3);
                errorForm3++;
            } else {
                if (input3.value === '') {
                    formAddError3(input3);
                    errorForm3++;
                }
            }
        }
        return errorForm3;
    }

    function formAddError3(input3) {
        input3.parentElement.classList.add('_error');
        input3.classList.add("_error");
    }

    function formRemoveError3(input3) {
        input3.parentElement.classList.remove('_error');
        input3.classList.remove('_error');
    }

    // Form 4

    const form4 = document.getElementById("form-4");
    form4.addEventListener("submit", form4Send);

    async function form4Send(e) {
        e.preventDefault();

        let errorForm4 = form4Validate(form4);

        if (errorForm4 === 0) {
            alert(`The form has been sent!`);
            form4.reset();
        } else {
            alert(`Fill in the required fields!`);
        }
    }

    function form4Validate(form4) {
        let errorForm4 = 0;
        let form4Req = document.querySelectorAll("._reqForm4");

        for (let index = 0; index < form4Req.length; index++) {
            const input4 = form4Req[index];
            formRemoveError4(input4);

            if (input4.getAttribute("type") === "checkbox" && input4.checked === false) {
                formAddError4(input4);
                errorForm4++;
            } else {
                if (input4.value === '') {
                    formAddError4(input4);
                    errorForm4++;
                }
            }
        }
        return errorForm4;
    }

    function formAddError4(input4) {
        input4.parentElement.classList.add('_error');
        input4.classList.add('_error');
    }
    function formRemoveError4(input4) {
        input4.parentElement.classList.remove('_error');
        input4.classList.remove('_error');
    }
});


// Scroll on click
const menuLinks = document.querySelectorAll(".menu__link[data-goto]");
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });
            e.preventDefault();
        }
    }
}