document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicator');
    let currentSlide = 0;
    const intervalTime = 5000; // Thời gian chuyển slide: 5000ms = 5 giây
    let autoSlideInterval;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
            indicators[i].classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    function nextSlide() {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, intervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    // Thêm sự kiện click vào các nút điều khiển
    document.getElementById('next').addEventListener('click', function() {
        nextSlide();
        stopAutoSlide();
        startAutoSlide(); // Reset lại bộ đếm tự động khi người dùng bấm nút
    });

    document.getElementById('prev').addEventListener('click', function() {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlide);
        stopAutoSlide();
        startAutoSlide(); // Reset lại bộ đếm tự động khi người dùng bấm nút
    });

    indicators.forEach((indicator, i) => {
        indicator.addEventListener('click', () => {
            showSlide(i);
            stopAutoSlide();
            startAutoSlide(); // Reset lại bộ đếm tự động khi người dùng chọn slide
        });
    });


    // Bắt đầu tự động chuyển slide
    startAutoSlide();

    // Hiển thị slide đầu tiên
    showSlide(currentSlide);
});