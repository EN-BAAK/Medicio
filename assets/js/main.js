//!     Variables
//  The Constant Time
const time = 8000;
//  Get The Navbar Of The Header Section
let navbar = document.getElementById("navbar"),
    //  Get The Up Button
    upButton = document.getElementById("up-button"),
    //  Get The Header
    header = document.getElementById("header"),
    //  Get The Topbar
    topbar = document.getElementById("topbar"),
    //  Get The Bar Of The Header Section
    bar = document.getElementById("bar"),
    //  Get THe List From Header
    listOne = document.querySelector("header .dropdown a"),
    listTwo = document.querySelector("header .dropdown-two a"),
    //  Get The Landing Section
    landing = document.getElementById("landing"),
    //  Get The Title Of Landing
    landingH2 = document.getElementById("h2-landing"),
    //  The Array Of Landing Slides
    arrLandingH2 = [
        "Welcome To Medicio",
        "Sequi ea ut et est quaerat",
        "Lorem Ipsum Dolor",
    ],
    //  Get The Clicks On The Landing Section
    rightLandingButton = document.querySelector(".landing .right-button"),
    leftLandingButton = document.querySelector(".landing .left-button"),
    //  The Bullets Of The Landing Section
    bullets = document.querySelectorAll(".landing .bullets li"),
    //  Array Of Title's Department
    arrTitleDepartment = [
        "Cardiology",
        "Neurology",
        "Hepatology",
        "Pediatrics",
    ],
    //  Get The Inputs Audio Of The Department Section
    inputDepartment = document.querySelectorAll(".department .selection label"),
    //  Get The Questions From Questions Section
    arrQues = document.querySelectorAll(".ques .content .ask"),
    //  Get The Height Of The Page
    windowHeight = this.innerHeight,
    //  Get The Last Element Without Animation To Stop Loop Of SetAnimation
    contactSection = document.getElementById("contact"),
    close = false,
    //  Get All Loading Element In The Page
    aniElement = document.querySelectorAll("*[ani]"),
    //  Get The Number Element From Count Section To Add Incremental Animation
    numberCount = document.querySelectorAll(".counts #number"),
    currentTime = 0,
    opened = false;
//!     Main
//  Display Loading Page
window.addEventListener("load", function () {
    document.getElementById("load").classList.add("none");
});
//  Make A Slider On Testimonials Section
var swiper = new Swiper(".testi .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
        },
    },
});
//  Make A Slider On Gallery Section
var swiper = new Swiper(".gallery .swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 6000,
    },
    effect: "slide", // تعيين التأثير لـ slide
    centeredSlides: true, // تحديد الـ slide الواقع في الوسط
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        type: "bullets",
    },
    breakpoints: {
        767: {
            slidesPerView: 3,
        },
        1200: {
            slidesPerView: 5,
        },
    },
});
//  Landing Sliding
var IndexLanding = 0;
setInterval(() => {
    IndexLanding %= 3;
    landingH2.innerHTML = arrLandingH2[IndexLanding];
    bullets.forEach((e) => {
        +e.getAttribute("index") == IndexLanding
            ? e.classList.add("active")
            : e.classList.remove("active");
    });
    landing.style.backgroundImage = `url(./assets/images/slide/slide-${++IndexLanding}.jpg)`;
}, time);
window.onscroll = () => {
    //  To Control The Topbar And Header Position On The Top
    if (window.scrollY >= 200) {
        topbar.classList.add("scrolled");
        header.classList.add("scrolled");
        upButton.classList.add("active");
    } else {
        topbar.classList.remove("scrolled");
        header.classList.remove("scrolled");
        upButton.classList.remove("active");
    }
    if (!close) {
        //  Set Tha Animation Of Loading
        setAnimtion();
    }
};
//  Clicked On The Bar Button
bar.onclick = function () {
    navbar.classList.toggle("mobile");
    switchClasses(bar.children[0], "fa-bars", "fa-x");
};
//  To Open The List inside The Header Main List
listOne.onclick = function () {
    listOne.classList.toggle("clicked");
};
listTwo.onclick = function () {
    listTwo.classList.toggle("clicked");
};
//  Switch The Background Of Landing
rightLandingButton.onclick = function () {
    IndexLanding %= 3;
    landingH2.innerHTML = arrLandingH2[IndexLanding];
    bullets.forEach((e) => {
        +e.getAttribute("index") == IndexLanding
            ? e.classList.add("active")
            : e.classList.remove("active");
    });
    landing.style.backgroundImage = `url(./assets/images/slide/slide-${++IndexLanding}.jpg)`;
};
leftLandingButton.onclick = function () {
    IndexLanding--;
    IndexLanding = IndexLanding <= 0 ? 3 : IndexLanding;
    landing.style.backgroundImage = `url(./assets/images/slide/slide-${IndexLanding}.jpg)`;
    var newIndex = IndexLanding - 1;
    bullets.forEach((e) => {
        +e.getAttribute("index") == newIndex
            ? e.classList.add("active")
            : e.classList.remove("active");
    });
    landingH2.innerHTML = arrLandingH2[newIndex];
};
//  Select The Bullets Of Landing Bullets
bullets.forEach((e) => {
    e.onclick = function () {
        bullets.forEach((el) => {
            el.classList.remove("active");
        });
        e.classList.add("active");
        var index = +e.getAttribute("index");
        landingH2.innerHTML = arrLandingH2[index];
        landing.style.backgroundImage = `url(./assets/images/slide/slide-${++index}.jpg)`;
    };
});
//  Change The Department Content Depending On The Select
inputDepartment.forEach((e) => {
    e.onclick = function () {
        var value = Number(e.dataset.dep);
        document.getElementById("department-h3").innerHTML =
            arrTitleDepartment[value - 1];
        document.getElementById(
            "department-img"
        ).src = `./assets/images/departments-${value}.jpg`;
    };
});
//  Click On Question To Show Answer
arrQues.forEach((e) => {
    e.onclick = function () {
        arrQues.forEach((el) => {
            if (el === e) {
                if (e.getAttribute("opened") === "false") {
                    e.setAttribute("opened", "true");
                    e.parentElement.parentElement.childNodes[1].classList.add(
                        "active"
                    );
                } else {
                    e.setAttribute("opened", "false");
                    e.parentElement.parentElement.childNodes[1].classList.remove(
                        "active"
                    );
                }
            } else {
                el.setAttribute("opened", "false");
                el.parentElement.parentElement.childNodes[1].classList.remove(
                    "active"
                );
            }
        });
    };
});
upButton.onclick = function () {
    window.scrollTo(0, 0);
};
//  Add An Animation To The Elements Which Reach To It
function setAnimtion() {
    if (bReachSection(contactSection, windowHeight)) {
        close = true;
        return;
    }
    aniElement.forEach((e) => {
        if (bReachSection(e, windowHeight)) {
            e.style.animation = `${e.getAttribute(
                "ani"
            )} 1s .3s linear forwards`;
        }
    });
    if (!opened && bReachSection(numberCount[0], windowHeight)) {
        opened = true;
        numberCount.forEach((e) => {
            Increase(e);
        });
    }
}
//  Increase The Number In Counts Section
function Increase(el) {
    var number = +el.getAttribute('number')
    const timer = setInterval(function () {
        currentTime++;
        el.textContent = currentTime;
        if (currentTime >= number) {
            clearInterval(timer);
        }
    }, 50);
}
//!     Function
//!     Template Functions
//  Create Element
const bCreateElement = function (element, className, id, text) {
    var newElement = document.createElement(element);
    className !== null ? (newElement.className = className) : null;
    id !== null ? (newElement.id = id) : null;
    if (text !== null) {
        newElement.appendChild(document.createTextNode(text));
    }

    return newElement;
};
//  Switch The Classes
function switchClasses(element, class1, class2) {
    if (element.classList.contains(class1)) {
        element.classList.remove(class1);
        element.classList.add(class2);
    } else {
        element.classList.remove(class2);
        element.classList.add(class1);
    }
}
//  Check If Reach To Section
function bReachSection(element, window) {
    var elementOffsetTop = element.offsetTop,
        elementOuterHeight = element.offsetHeight,
        windowScollTop = this.pageYOffset;
    return windowScollTop >=
        elementOffsetTop + elementOuterHeight - window * 1.5
        ? true
        : false;
}