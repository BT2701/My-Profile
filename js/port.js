const menu = document.querySelector(".nav-links")
const menuButton = document.querySelector(".nav-icons")
const overlay = document.querySelector("#overlay")
const view_more = document.querySelector(".banner-btn")
const view_value = document.querySelector(".view-more")
menuButton.addEventListener('click', () => {
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})
overlay.addEventListener('click', () => {
    menu.classList.toggle("nav-open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
})
view_more.addEventListener('click', (event) => {
    view_value.classList.toggle("visible");
    event.preventDefault();
})

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    var scrollTopButton = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopButton.style.display = "block";
    } else {
        scrollTopButton.style.display = "none";
    }
}

function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
document.addEventListener("DOMContentLoaded", function () {
    // Lấy phần tử <li> có class là "nav-link"
    var navLink = document.querySelector(".resume");

    // Thêm sự kiện click vào phần tử <li>
    navLink.addEventListener("click", function (event) {
        // Ngăn chặn hành động mặc định của thẻ <a> (chuyển hướng trang)
        event.preventDefault();

        // Tải file PDF
        var pdfUrl = "resume/DuongThanhTruong.pdf"; // Thay đổi đường dẫn đến file PDF của bạn ở đây
        window.open(pdfUrl, "_blank"); // Mở file PDF trong cửa sổ mới
    });
});




document.querySelector('.circle').addEventListener('click', function () {
    document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
});
document.querySelector('.works-btn-control').addEventListener('click', function () {
    document.getElementById('personal-project').scrollIntoView({ behavior: 'smooth' });
});


const circle = document.querySelector('.circle');

// Lắng nghe sự kiện cuộn (scroll)
window.addEventListener('scroll', function () {
    // Tính toán chiều cao của cửa sổ (viewport height)
    const viewportHeight = window.innerHeight;
    // Tính toán khoảng cách từ đỉnh trang tới vị trí cuộn hiện tại (scroll position)
    const scrollTop = window.scrollY;

    // Nếu vị trí cuộn lớn hơn hoặc bằng chiều cao cửa sổ thì ẩn dần (fade out)
    if (scrollTop >= viewportHeight) {
        circle.style.opacity = 0; // Mờ đi hoàn toàn
    } else {
        // Tính toán độ mờ dựa trên tỷ lệ cuộn
        const opacity = 1 - (scrollTop / viewportHeight);
        circle.style.opacity = opacity;
    }
});


document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the section should be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                // entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});


// process english
// Hàm kiểm tra phần tử có trong viewport không
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Hàm xác định cấp bậc
function getLevelCategory(level) {
    if (level <= 2) return 'Beginner'; // Sơ cấp
    if (level <= 4) return 'Intermediate'; // Trung cấp
    return 'Advanced'; // Cao cấp
}

// Thêm hiệu ứng cho từng nấc và hiển thị thông tin cấp bậc
function activateLevels() {
    const skillsItem = document.querySelector('.skills-item');
    const levels = document.querySelectorAll('.progress-bar .level');
    const textElement = document.querySelector('.skills-text');
    const categoryElement = document.querySelector('.level-category');
    const currentLevel = 3; // Level hiện tại (3/6)

    if (isInViewport(skillsItem)) {
        levels.forEach((level, index) => {
            if (index < currentLevel) {
                setTimeout(() => {
                    level.classList.add('active');
                    if (index === currentLevel - 1) {
                        // Hiển thị text và cấp bậc khi tất cả các level đã sáng
                        setTimeout(() => {
                            textElement.classList.remove('hidden'); // Hiển thị text
                            textElement.classList.add('visible');

                            // Xác định cấp bậc và hiển thị
                            const category = getLevelCategory(currentLevel);
                            categoryElement.textContent = `Category: ${category}`;
                            categoryElement.classList.remove('hidden');
                            categoryElement.classList.add('visible');
                            categoryElement.classList.add('show');
                        }, 500); // Đợi một chút trước khi text xuất hiện
                    }
                }, index * 300); // Hiệu ứng mỗi nấc cách nhau 300ms
            }
        });
    }
}

// Lắng nghe sự kiện cuộn trang
window.addEventListener('scroll', activateLevels);
