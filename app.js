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