// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.nav-links a');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
        });
    });
}

// ===== DROPDOWN MENU TOGGLE (MOBILE) =====
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const dropdownLink = dropdown.querySelector('a');
    
    if (window.innerWidth <= 768) {
        dropdownLink.addEventListener('click', (e) => {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
    }
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value.trim();
        
        // Basic validation
        if (!name || !email || !subject || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Since we can't directly send emails without a backend,
        // we'll show a success message and provide contact info
        showMessage(
            'Thank you for your message! We have received your inquiry. Our team will get back to you shortly via email or phone. You can also reach us at official.hfnexus@gmail.com or +92 319 9931164',
            'success'
        );
        
        // Reset form
        contactForm.reset();
        
        // In a real scenario, you would send the form data to a backend server
        // Example with fetch:
        /*
        fetch('your-backend-endpoint.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            showMessage(data.message, data.success ? 'success' : 'error');
            if (data.success) {
                contactForm.reset();
            }
        })
        .catch(error => {
            showMessage('An error occurred. Please try again.', 'error');
        });
        */
    });
}

// ===== SHOW FORM MESSAGE =====
function showMessage(message, type) {
    if (formMessage) {
        formMessage.textContent = message;
        formMessage.className = 'form-message ' + type;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            formMessage.className = 'form-message';
        }, 5000);
    }
}

// ===== FAQ ACCORDION =====
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        faqItem.classList.toggle('active');
        
        // Close other FAQs
        faqQuestions.forEach(otherQuestion => {
            if (otherQuestion !== question) {
                otherQuestion.parentElement.classList.remove('active');
            }
        });
    });
});

// ===== SMOOTH SCROLL BEHAVIOR =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and sections for animation
document.querySelectorAll('.about-card, .service-card, .course-card, .testimonial-card, .process-step, .benefit-item').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(element);
});

// ===== NAVBAR SCROLL EFFECT =====
let lastScrollTop = 0;
const navbar_element = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow on scroll
    if (scrollTop > 0) {
        navbar_element.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    } else {
        navbar_element.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
    }
    
    lastScrollTop = scrollTop;
});

// ===== PHONE AND EMAIL DETECTION =====
// Make phone numbers and emails clickable on mobile
document.querySelectorAll('a[href^="tel:"], a[href^="mailto:"], a[href*="whatsapp"]').forEach(link => {
    link.addEventListener('click', (e) => {
        // Allow default behavior for these links
        // This ensures they work correctly on all devices
    });
});

// ===== COUNTER ANIMATION (FOR STATISTICS) =====
const animateCounters = () => {
    const counters = document.querySelectorAll('.stat h3');
    
    counters.forEach(counter => {
        const target = parseInt(counter.innerText);
        const increment = target / 20;
        let current = 0;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                counter.innerText = Math.ceil(current) + (counter.innerText.includes('+') ? '+' : counter.innerText.includes('%') ? '%' : counter.innerText.includes('K') ? 'K' : '');
                setTimeout(updateCount, 50);
            } else {
                counter.innerText = counter.getAttribute('data-target') || counter.innerText;
            }
        };
        
        // Start animation when element is in view
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !counter.hasAttribute('data-animated')) {
                    counter.setAttribute('data-animated', 'true');
                    updateCount();
                    statsObserver.unobserve(counter);
                }
            });
        }, { threshold: 0.5 });
        
        statsObserver.observe(counter);
    });
};

// Call counter animation
animateCounters();

// ===== FORM INPUT VALIDATION =====
const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea, .contact-form select');

formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        if (input.hasAttribute('required') && input.value.trim() === '') {
            input.style.borderColor = '#ef4444';
        } else {
            input.style.borderColor = '#e2e8f0';
        }
    });
    
    input.addEventListener('focus', () => {
        input.style.borderColor = '#6366f1';
    });
});

// ===== WINDOW RESIZE HANDLER =====
window.addEventListener('resize', () => {
    // Close mobile menu on resize to desktop
    if (window.innerWidth > 768) {
        navbar.classList.remove('active');
    }
});

// ===== ACCESSIBILITY IMPROVEMENTS =====
// Keyboard navigation for links
document.querySelectorAll('a, button').forEach(element => {
    element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            element.click();
        }
    });
});

// ===== LOAD EVENT =====
document.addEventListener('DOMContentLoaded', () => {
    // Remove loading states if any
    document.body.style.opacity = '1';
});

// ===== SCROLL TO TOP (OPTIONAL) =====
// You can uncomment this if you want a "scroll to top" button
/*
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
scrollToTopBtn.className = 'scroll-to-top';
scrollToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: linear-gradient(135deg, #6366f1, #8b5cf6);
    color: white;
    border: none;
    padding: 12px 16px;
    border-radius: 50%;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s ease;
    box-shadow: 0 5px 20px rgba(99, 102, 241, 0.3);
`;

document.body.appendChild(scrollToTopBtn);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'flex';
        scrollToTopBtn.style.alignItems = 'center';
        scrollToTopBtn.style.justifyContent = 'center';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
*/
