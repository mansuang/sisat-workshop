// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 215, 0, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.background = 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)';
        navbar.style.backdropFilter = 'none';
    }
});

// Gallery Image Loading
function loadGalleryImages() {
    const galleryGrid = document.getElementById('galleryGrid');
    const imageFiles = [
        'LINE_ALBUM_ภาพการอบรม_250910_1.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_2.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_3.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_4.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_5.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_6.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_7.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_8.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_9.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_10.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_11.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_12.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_13.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_14.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_15.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_16.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_17.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_18.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_19.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_20.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_21.jpg',
        'LINE_ALBUM_ภาพการอบรม_250910_22.jpg',
        'students/phonthida_kankam_2.jpg',
        'students/pinthuon_promraksa_1.jpg',
        'students/pinthuon_promraksa_2.jpg',
        'students/pinthuon_promraksa_3.jpg',
        'students/pinthuon_promraksa_4.jpg'
    ];

    imageFiles.forEach((filename, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item fade-in-up';
        galleryItem.style.animationDelay = `${index * 0.1}s`;

        galleryItem.innerHTML = `
            <img src="images/gallery/${filename}" alt="ภาพกิจกรรม ${index + 1}" loading="lazy">
            <div class="gallery-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        `;

        // Add click event for image modal
        galleryItem.addEventListener('click', () => {
            openImageModal(`images/gallery/${filename}`, `ภาพกิจกรรม ${index + 1}`);
        });

        galleryGrid.appendChild(galleryItem);
    });
}

// Image Modal
function openImageModal(imageSrc, imageAlt) {
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <span class="modal-close">&times;</span>
                <img src="${imageSrc}" alt="${imageAlt}">
                <div class="modal-caption">${imageAlt}</div>
            </div>
        </div>
    `;

    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // Close modal events
    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
        if (e.target === modal.querySelector('.modal-overlay')) {
            closeModal();
        }
    });

    // ESC key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });

    function closeModal() {
        document.body.removeChild(modal);
        document.body.style.overflow = 'auto';
    }
}

// Add modal styles
const modalStyles = `
    .image-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        animation: fadeIn 0.3s ease;
    }
    
    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    
    .modal-content {
        position: relative;
        max-width: 90%;
        max-height: 90%;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    .modal-content img {
        width: 100%;
        height: auto;
        max-height: 80vh;
        object-fit: contain;
    }
    
    .modal-close {
        position: absolute;
        top: 10px;
        right: 15px;
        font-size: 30px;
        color: white;
        cursor: pointer;
        z-index: 1;
        background: rgba(0, 0, 0, 0.5);
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.3s ease;
    }
    
    .modal-close:hover {
        background: rgba(0, 0, 0, 0.8);
    }
    
    .modal-caption {
        padding: 15px;
        text-align: center;
        background: #f8f9fa;
        color: #333;
        font-weight: 500;
    }
    
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;

// Inject modal styles
const styleSheet = document.createElement('style');
styleSheet.textContent = modalStyles;
document.head.appendChild(styleSheet);

// Contact Form Handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const message = this.querySelector('textarea').value;

        // Simple validation
        if (!name || !email || !message) {
            showNotification('กรุณากรอกข้อมูลให้ครบถ้วน', 'error');
            return;
        }

        // Simulate form submission
        showNotification('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับในเร็วๆ นี้', 'success');
        this.reset();
    });
}

// Notification System
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;

    document.body.appendChild(notification);

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);

    // Manual close
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.remove();
    });
}

// Add notification styles
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    }
    
    .notification-content {
        background: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
        display: flex;
        align-items: center;
        gap: 10px;
        min-width: 300px;
        border-left: 4px solid #FFD700;
    }
    
    .notification-success .notification-content {
        border-left-color: #28a745;
    }
    
    .notification-error .notification-content {
        border-left-color: #dc3545;
    }
    
    .notification-content i {
        font-size: 1.2rem;
    }
    
    .notification-success .notification-content i {
        color: #28a745;
    }
    
    .notification-error .notification-content i {
        color: #dc3545;
    }
    
    .notification-content span {
        flex: 1;
        color: #333;
    }
    
    .notification-close {
        background: none;
        border: none;
        font-size: 1.5rem;
        color: #666;
        cursor: pointer;
        padding: 0;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .notification-close:hover {
        color: #333;
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;

// Inject notification styles
const notificationStyleSheet = document.createElement('style');
notificationStyleSheet.textContent = notificationStyles;
document.head.appendChild(notificationStyleSheet);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    // Load gallery images
    loadGalleryImages();

    // Observe sections for animation
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Add loading animation to timeline items
    document.querySelectorAll('.timeline-item').forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        observer.observe(item);
    });
});

// Add loading state for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
});

// Back to top button
function createBackToTopButton() {
    const backToTop = document.createElement('button');
    backToTop.className = 'back-to-top';
    backToTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
    backToTop.setAttribute('aria-label', 'กลับขึ้นด้านบน');

    document.body.appendChild(backToTop);

    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    // Scroll to top when clicked
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Add back to top button styles
const backToTopStyles = `
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: #FFD700;
        color: #000;
        border: none;
        border-radius: 50%;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
    }
    
    .back-to-top.show {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        background: #FFA500;
        transform: translateY(-3px);
        box-shadow: 0 6px 20px rgba(255, 165, 0, 0.4);
    }
`;

// Inject back to top styles
const backToTopStyleSheet = document.createElement('style');
backToTopStyleSheet.textContent = backToTopStyles;
document.head.appendChild(backToTopStyleSheet);

// Initialize back to top button
document.addEventListener('DOMContentLoaded', createBackToTopButton);

// Preloader
function createPreloader() {
    const preloader = document.createElement('div');
    preloader.className = 'preloader';
    preloader.innerHTML = `
        <div class="preloader-content">
            <div class="preloader-logo">
                <i class="fas fa-robot"></i>
            </div>
            <div class="preloader-text">กำลังโหลด...</div>
            <div class="preloader-spinner"></div>
        </div>
    `;

    document.body.appendChild(preloader);

    // Hide preloader when page is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.remove();
            }, 300);
        }, 1000);
    });
}

// Add preloader styles
const preloaderStyles = `
    .preloader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        transition: opacity 0.3s ease;
    }
    
    .preloader-content {
        text-align: center;
        color: #000;
    }
    
    .preloader-logo {
        font-size: 4rem;
        margin-bottom: 20px;
        animation: bounce 1s infinite;
    }
    
    .preloader-text {
        font-size: 1.2rem;
        font-weight: 500;
        margin-bottom: 20px;
    }
    
    .preloader-spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(0, 0, 0, 0.1);
        border-left: 4px solid #000;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto;
    }
    
    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-20px);
        }
        60% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

// Inject preloader styles
const preloaderStyleSheet = document.createElement('style');
preloaderStyleSheet.textContent = preloaderStyles;
document.head.appendChild(preloaderStyleSheet);

// Initialize preloader
document.addEventListener('DOMContentLoaded', createPreloader);
