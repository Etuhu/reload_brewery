//Слайдеры
const releasesSwiper = new Swiper(".releases-swiper", {
    speed: 1000,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 5000,
    // },
    watchOverflow: true,
    navigation: {
        nextEl: ".releases-swiper-button-next",
        prevEl: ".releases-swiper-button-prev",
    },
    lazy: {
        loadPrevNext: true,
    },
    preloadImages: false,
    watchSlidesProgress: true,
    simulateTouch: true,
    pagination: {
        el: ".releases-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
            spaceBetween: 5,
        },
    },
});


const topBeerSwiper = new Swiper(".top-beer-swiper", {
    speed: 1000,
    slidesPerView: 4,
    slidesPerGroup: 4,
    spaceBetween: 30,
    // autoplay: {
    //     delay: 5000,
    // },
    simulateTouch: false,
    watchOverflow: true,
    navigation: {
        nextEl: ".top-beer-swiper-button-next",
        prevEl: ".top-beer-swiper-button-prev",
    },
    lazy: {
        loadPrevNext: true,
    },
    preloadImages: false,
    watchSlidesProgress: true,
    pagination: {
        el: ".top-beer-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 20,
        },
        300: {
            slidesPerView: 2.2,
            slidesPerGroup: 2,
            spaceBetween: 5,
        },
    },
});

const gallerySwiper = new Swiper(".gallery-swiper", {
    speed: 1000,
    slidesPerView: 5,
    slidesPerGroup: 1,
    spaceBetween: 0,
    // autoplay: {
    //     delay: 5000,
    // },
    simulateTouch: false,
    watchOverflow: true,
    navigation: {
        nextEl: ".gallery-swiper-button-next",
        prevEl: ".gallery-swiper-button-prev",
    },
    lazy: {
        loadPrevNext: true,
    },
    simulateTouch: true,
    preloadImages: false,
    watchSlidesProgress: true,
    pagination: {
        el: ".gallery-swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 1200px
        1200: {
            slidesPerView: 5,
            slidesPerGroup: 1,
        },
        768: {
            slidesPerView: 4.2,
            slidesPerGroup: 2,
        },
        576: {
            slidesPerView: 2.3,
            slidesPerGroup: 2,
        },
        300: {
            slidesPerView: 2.2,
            slidesPerGroup: 1,
            spaceBetween: 0,
        },
    },
});

//Таймер обратного отсчета
var deadline = '2022-04-27 11:33:07';
var firstCounter = document.getElementById("firstCounter");
var releaseCounters = document.querySelectorAll(".release-item .release-counter");


function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor( (t/1000) % 60 );
    var minutes = Math.floor( (t/1000/60) % 60 );
    var hours = Math.floor( (t/(1000*60*60)) % 24 );
    var days = Math.floor( t/(1000*60*60*24) );
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    // let timeinterval = setInterval(function(){
    //     let t = getTimeRemaining(endtime);
    //     clock.innerHTML = t.days + ':' + t.hours + ':' + t.minutes + ':' + t.seconds;
    //     if (t.total<=0) {
    //         clearInterval(timeinterval);
    //     }
    // },1000);

    function updateClock() {
        var t = getTimeRemaining(endtime);
        console.log(t);
        // clock.innerHTML = t.days + ':' + t.hours + ':' + t.minutes + ':' + t.seconds;
        clock.innerHTML = ('0' + t.days).slice(-2) + ':' + ('0' + t.hours).slice(-2) + ':' + ('0' + t.minutes).slice(-2) + ':' + ('0' + t.seconds).slice(-2);
        if (t.total <= 0){
         clearInterval(timeinterval);
         clock.innerHTML = "Release!";
        }
    }

    updateClock(); // запустите функцию один раз, чтобы избежать задержки
    var timeinterval = setInterval(updateClock,1000);
}

initializeClock('firstCounter', deadline);