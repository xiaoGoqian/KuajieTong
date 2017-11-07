//大轮播
window.onload = function () {
    $(function () {
        $('#myCarousel').carousel({
            interval: 3000
        })
    });


    // 底部的轮播图
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 5,
        loop: true
    })
    document.getElementById('pro_click_Left').onclick = function (e) {
        // e.preventDefault();
        mySwiper.swipePrev()
        return false;
    }
    document.getElementById('pro_click_Right').onclick = function (e) {
        // e.preventDefault();
        mySwiper.swipeNext()
        return false;
    }



}
// 底部的轮播