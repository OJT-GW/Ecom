// Hàm để thêm hình ảnh từ thư mục local
function addImages() {
    // Thêm hình ảnh cho AirPods Pro 2
    const airpodsImage = document.getElementById("airpods-image");
    airpodsImage.src = "./anhPhuKien/AirPods-Pro-2.jpeg"; // Đường dẫn tới hình ảnh trong thư mục

    // Thêm hình ảnh cho Sạc 20W USB-C Power Adapter
    const adapterImage = document.getElementById("adapter-image");
    adapterImage.src = "./anhPhuKien/Sạc-20W-USB-C-Power-Adapter.jpg"; // Đường dẫn tới hình ảnh trong thư mục

    // Thêm hình ảnh cho Magic Mouse 2
    const mouseImage = document.getElementById("mouse-image");
    mouseImage.src = "./anhPhuKien/Magic-Mouse-2.jpeg"; // Đường dẫn tới hình ảnh trong thư mục

    // Thêm hình ảnh cho Apple Pencil Pro
    const pencilImage = document.getElementById("pencil-image");
    pencilImage.src = "./anhPhuKien/Apple-Pencil-Pro.jpeg"; // Đường dẫn tới hình ảnh trong thư mục

    // Thêm hình ảnh cho phần khuyến mãi
    const promoImage = document.getElementById("promotion-image");
    promoImage.src = "./anhPhuKien/business-promotion.jpeg"; // Đường dẫn tới hình ảnh trong thư mục
}

// Gọi hàm khi tải trang xong
window.onload = addImages;