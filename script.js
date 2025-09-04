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
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Particle generation for new background
function createParticle() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Random position and animation duration
    const startX = Math.random() * window.innerWidth;
    const duration = 10 + Math.random() * 10; // 10-20 seconds
    const delay = Math.random() * 5; // 0-5 seconds delay
    
    particle.style.cssText = `
        left: ${startX}px;
        animation-duration: ${duration}s;
        animation-delay: ${delay}s;
    `;
    
    particlesContainer.appendChild(particle);
    
    // Remove particle after animation
    setTimeout(() => {
        if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
        }
    }, (duration + delay) * 1000);
}

// Generate particles periodically
function startParticleGeneration() {
    // Create initial particles
    for (let i = 0; i < 20; i++) {
        setTimeout(() => createParticle(), i * 500);
    }
    
    // Continue generating particles
    setInterval(createParticle, 2000);
}

// Scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    section.classList.add('fade-in');
    observer.observe(section);
});

// Tech icon interactions
function initTechIcons() {
    const techIcons = document.querySelectorAll('.tech-icon');
    
    techIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Add a pulse effect when clicked
            icon.style.animation = 'none';
            icon.offsetHeight; // Trigger reflow
            icon.style.animation = 'orbitIcon 8s linear infinite';
            
            // Show tooltip or notification
            const techName = icon.querySelector('i').className.split(' ').pop().replace('fa-', '').toUpperCase();
            showNotification(`${techName} - Technology I'm proficient in!`, 'success');
        });
        
        // Add hover sound effect (optional)
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'scale(1.15)';
        });
        
        icon.addEventListener('mouseleave', () => {
            icon.style.transform = '';
        });
    });
}

// Skill bars animation
const skillBars = document.querySelectorAll('.skill-bar');
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.style.width;
            bar.style.width = '0%';
            setTimeout(() => {
                bar.style.width = width;
            }, 500);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillObserver.observe(bar);
});

// Enhanced typing animation for software engineer text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Software Engineer typing animation
function initSoftwareEngineerAnimation() {
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        const text = 'Software Engineer';
        let currentIndex = 0;
        let isDeleting = false;
        
        function typeEffect() {
            const currentText = text.substring(0, currentIndex);
            typingText.textContent = currentText;
            
            if (!isDeleting) {
                currentIndex++;
                if (currentIndex === text.length) {
                    setTimeout(() => {
                        isDeleting = true;
                    }, 2000); // Pause at end
                }
            } else {
                currentIndex--;
                if (currentIndex === 0) {
                    isDeleting = false;
                    setTimeout(() => {
                        // Start typing next word
                        typingText.textContent = 'Full Stack Developer';
                        setTimeout(() => {
                            typingText.textContent = 'System Architect';
                            setTimeout(() => {
                                typingText.textContent = 'Software Engineer';
                            }, 2000);
                        }, 2000);
                    }, 1000);
                }
            }
            
            const speed = isDeleting ? 50 : 150;
            setTimeout(typeEffect, speed);
        }
        
        typeEffect();
    }
}

// Achievement showcase functionality
function initAchievementShowcase() {
    const achievementCards = document.querySelectorAll('.achievement-card');
    const navDots = document.querySelectorAll('.nav-dot');
    let currentIndex = 0;
    let autoPlayInterval;

    function showAchievement(index) {
        // Hide all cards
        achievementCards.forEach(card => {
            card.classList.remove('active');
        });
        
        // Remove active class from all dots
        navDots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show current card and activate current dot
        achievementCards[index].classList.add('active');
        navDots[index].classList.add('active');
        
        currentIndex = index;
    }

    function nextAchievement() {
        currentIndex = (currentIndex + 1) % achievementCards.length;
        showAchievement(currentIndex);
    }

    function startAutoPlay() {
        autoPlayInterval = setInterval(nextAchievement, 4000); // Change every 4 seconds
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    // Add click event to navigation dots
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoPlay();
            showAchievement(index);
            startAutoPlay(); // Restart autoplay
        });
    });

    // Start autoplay
    startAutoPlay();

    // Pause autoplay on hover
    const showcase = document.querySelector('.achievement-showcase');
    if (showcase) {
        showcase.addEventListener('mouseenter', stopAutoPlay);
        showcase.addEventListener('mouseleave', startAutoPlay);
    }
}

// Achievement slider interaction
function initAchievementSlider() {
    const achievementSlides = document.querySelectorAll('.achievement-slide');
    
    achievementSlides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            slide.style.transform = 'scale(1.1)';
            slide.style.color = '#667eea';
        });
        
        slide.addEventListener('mouseleave', () => {
            slide.style.transform = 'scale(1)';
            slide.style.color = '#fff';
        });
    });
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        typeWriter(heroTitle, originalText, 50);
    }
    
    // Start particle generation
    startParticleGeneration();
    
    // Initialize software engineer animation
    initSoftwareEngineerAnimation();
    
    // Initialize achievement slider
    initAchievementSlider();
    
    // Initialize achievement showcase
    initAchievementShowcase();
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const subject = contactForm.querySelector('input[placeholder="Subject"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully!', 'success');
        contactForm.reset();
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        border-radius: 10px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4ecdc4, #44a08d)' : 
                    type === 'error' ? 'linear-gradient(135deg, #ff6b6b, #ee5a24)' : 
                    'linear-gradient(135deg, #667eea, #764ba2)'};
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill item hover effects
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.05)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
    });
});

// Research card hover effects
document.querySelectorAll('.research-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Achievement card counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    
    updateCounter();
}

// Animate achievement counters when they come into view
const achievementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const counter = entry.target.querySelector('h4');
            const text = counter.textContent;
            const number = parseInt(text.match(/\d+/)[0]);
            
            animateCounter(counter, number);
            achievementObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.achievement-card').forEach(card => {
    achievementObserver.observe(card);
});

// Smooth reveal animation for timeline items
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

document.querySelectorAll('.timeline-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add active state to navigation links based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add CSS for active navigation state
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #667eea !important;
    }
    .nav-link.active::after {
        width: 100% !important;
    }
`;
document.head.appendChild(style);

// Performance optimization: Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Navbar background change
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
}, 16)); // ~60fps

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded successfully!');
    
    // Start particle generation
    startParticleGeneration();
    
    // Initialize software engineer animation
    initSoftwareEngineerAnimation();
    
    // Initialize achievement slider
    initAchievementSlider();
    
    // Initialize tech icons interactions
    initTechIcons();
    
    // Initialize achievement showcase
    initAchievementShowcase();
}); 