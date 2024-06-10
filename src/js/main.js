import $ from "jquery";

let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    const map = new Map(document.getElementById("map"), {
        center: { lat: 52.432777404785156, lng: 31.00490379333496 },
        zoom: 16,
        styles: [
            {
                "featureType": "all",
                "elementType": "all",
                "stylers": [
                    {
                        "saturation": "0"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "color": "#35495F"
                    },
                    {
                        "lightness": "-15"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "saturation": "-100"
                    },
                    {
                        "lightness": "20"
                    },
                    {
                        "visibility": "simplified"
                    },
                    {
                        "gamma": ".5"
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "lightness": "60"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "color": "#35495F"
                    },
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#a0aebd"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "12"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "landscape.natural",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.landcover",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "landscape.natural.terrain",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#35495F"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "-7"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "all",
                "stylers": [
                    {
                        "gamma": "6.14"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#35495F"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "-18"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "100"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "simplified"
                    },
                    {
                        "hue": "#ffc200"
                    },
                    {
                        "saturation": "100"
                    },
                    {
                        "gamma": "0.85"
                    },
                    {
                        "lightness": "17"
                    },
                    {
                        "weight": "1.00"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "hue": "#ffc200"
                    },
                    {
                        "saturation": "-100"
                    },
                    {
                        "gamma": "0.5"
                    },
                    {
                        "weight": "1.00"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "lightness": "80"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#efc337"
                    },
                    {
                        "saturation": "0"
                    },
                    {
                        "lightness": "35"
                    },
                    {
                        "gamma": "1.00"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            }
        ]
    });

    new google.maps.Marker({
        position: { lat: 52.432777404785156, lng: 31.00490379333496 },
        map: map,
        title: 'My location',
        icon: {
            path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
            scale: 10,
            fillColor: '#ffc200',
            fillOpacity: 1,
            strokeWeight: 1,
            strokeColor: '#ffc200'
        }
    });
}

initMap();


$(function () {
    //Бургер меню

    $(document).ready(function () {
        $(".burger-menu").click(function () {
            $(".burger-menu").toggleClass("burger-menu-active");
            $(".header-bottom").toggleClass("show");
            $("body").toggleClass("body-lock");
        });
    });

    $(document).ready(function () {
        $(function () {
            //BEGIN
            $(".accordion__title").on("click", function (e) {
                e.preventDefault();
                var $this = $(this);

                if (!$this.hasClass("show-accordion")) {
                    $(".accordion__body").slideUp(400);
                    $(".accordion__title").removeClass("show-accordion");
                }

                $this.toggleClass("show-accordion");
                $this.next().slideToggle();
            });
            //END
        });
    });
    //scroll-top
    $(function () {
        $(".button-up").click(function () {
            $("html, body").animate({ scrollTop: 0 }, 800);
            return false;
        });
    });
    //header fix
    $(document).ready(function () {
        var lastScrollTop = 0;
        $(window).scroll(function (event) {
            var st = $(this).scrollTop();
            if (st > lastScrollTop) {
                $("header").addClass("header_down");
                $("header").removeClass("header_up");
                $(".header-main").removeClass("header");
                $(".button-up").addClass("scroll-top_down");
                $(".button-up").removeClass("scroll-top_up");
            } else {
                $("header").addClass("header_up");
                $(".header-main").addClass("header");
                $("header").removeClass("header_down");
                $(".button-up").addClass("scroll-top_up");
                $(".button-up").removeClass("scroll-top_down");
            }

            // Удаление класса header_up, если прокрутка почти до начала страницы
            if (st < 150) {
                $(".header-main").removeClass("header");
                $("header").removeClass("header_up");
            }

            lastScrollTop = st;
        });
    });


    $(document).ready(function () {
        var lastScrollTopr = 0;
        $(window).scroll(function (event) {
            var str = $(this).scrollTop();
            if (str > lastScrollTopr) {
                $(".button-up").addClass("scroll-top_down");
                $(".button-up").removeClass("scroll-top_up");
            } else if (str <= 800) {
                $(".button-up").removeClass("scroll-top_up");
            } else {
                $(".button-up").addClass("scroll-top_up");
                $(".button-up").removeClass("scroll-top_down");
            }
            lastScrollTopr = str;
        });
    });

    $(document).ready(function () {
        $("img.imgsvg").each(function () {
            var $img = $(this);
            var imgClass = $img.attr("class");
            var imgURL = $img.attr("src");
            $.get(
                imgURL,
                function (data) {
                    var $svg = $(data).find("svg");
                    if (typeof imgClass !== "undefined") {
                        $svg = $svg.attr("class", imgClass + " replaced-svg");
                    }
                    $svg = $svg.removeAttr("xmlns:a");
                    if (
                        !$svg.attr("viewBox") &&
                        $svg.attr("height") &&
                        $svg.attr("width")
                    ) {
                        $svg.attr(
                            "viewBox",
                            "0 0 " +
                            $svg.attr("height") +
                            " " +
                            $svg.attr("width")
                        );
                    }
                    $img.replaceWith($svg);
                },
                "xml"
            );
        });
    });
});

const swiper = new Swiper(".swiper-main", {
    // Optional parameters
    loop: true,
    // autoplay:true,
    // If we need pagination
    autoplay: {
        delay: 5000,
    },
    pagination: {
        el: ".swiper-main__pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-main__next",
        prevEl: ".swiper-main__prev",
    },
});
const swiperNews = new Swiper(".swiper-news", {
    // Optional parameters
    // loop: true,
    spaceBetween: 16,
    navigation: {
        nextEl: ".swiper-news-next",
        prevEl: ".swiper-news-prev",
    },
    pagination: {
        el: ".swiper-news-pagination",
        clickable: true,
    },
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 3,
        },
    },
});
//
const swiperAuto = new Swiper(".swiper-auto", {
    // Optional parameters
    // loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-auto-next",
        prevEl: ".swiper-auto-prev",
    },
    // autoplay: {
    //     delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 3,
        },
    },
});
//
const swiperProduct = new Swiper(".swiper-product", {
    // Optional parameters
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-product-next",
        prevEl: ".swiper-product-prev",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        // hide: false,
        draggable: true,
    },
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 2,
        },
        900: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 4,
        },
    },
});
const swiperCertificates = new Swiper(".swiper-certificates", {
    // Optional parameters
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-certificates-next",
        prevEl: ".swiper-certificates-prev",
    },
    // autoplay: {
    //   delay: 3000,
    // },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 1,
        },
        650: {
            slidesPerView: 3,
        },
        1170: {
            slidesPerView: 4,
        },
    },
});
const swiperChanel = new Swiper(".swiper-brand-chanel", {
    speed: 2000,
    spaceBetween: 60,
    loop: true,
    autoplay: {
        delay: 1,
        disableOnInteraction: false, // или сделать так, чтобы восстанавливался autoplay после взаимодействия
    },
    breakpoints: {
        // when window width is >= 320px
        350: {
            slidesPerView: 3,
        },
        650: {
            slidesPerView: 4,
        },
        1170: {
            slidesPerView: 6,
        },
    },
});
