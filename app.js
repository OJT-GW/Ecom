
fetch("header.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((data) => (document.getElementById("header").innerHTML = data))
  .catch((error) => console.log("Error loading header:", error));

fetch("footer.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((data) => (document.getElementById("footer").innerHTML = data))
  .catch((error) => console.log("Error loading footer:", error));

fetch("Hieu/slide.html")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.text();
  })
  .then((data) => {
    document.getElementById("slide").innerHTML = data;
    const script = document.createElement("script");
    script.src = "Hieu/script.js";
    script.onload = () => console.log("script.js loaded successfully");
    script.onerror = () => console.log("Error loading script.js");
    document.body.appendChild(script);
  })
  .catch((error) => console.log("Error loading slide:", error));
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
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.log('Lỗi khi tải header:', error));
// Tải footer và chèn vào phần #footer
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.log('Lỗi khi tải footer:', error));
fetch('body.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('body').innerHTML = data;
    })
    .catch(error => console.log('Lỗi khi tải footer:', error));

