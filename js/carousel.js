document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#photoCarousel"), {
        interval: 2000, // Vitesse de 2 secondes
        ride: "carousel"
    });
});
