// Typing Animation

class TypeWriter {
  
  // CV Download Functionality
function generateAndDownloadCV() {
  const cvContent = `NKOSENHLE LUNGISANI SIYANDA NYEMBE
0836349065 |syandalungisani31@gmail.com
LinkedIn Profile: www.linkedin.com/in/Syanda-Lungisani
GitHub: https://github.com/syandalungisani31-gif
Personal Website: https://siyandankosi.vercel.app/
City: Kleinfontein,Ladysmith, 3370

ASPIRING SOFTWARE DEVELOPER

Final-year BSc IT student and aspiring software engineer passionate about building efficient, user-focused solutions. Skilled in programming and software development through both academic studies and independent projects, I thrive in collaborative environments, continuously learning and solving real-world problems with innovative technology. Open to mentorship, networking, and opportunities to grow in the tech industry.

EDUCATION & CERTIFICATIONS

Tertiary Qualifications
Bachelor of Sciences in Information Technology – North West University – Present
Expected Graduation – 2026



Short Courses
Work Readiness Program 2025

SOFT SKILLS
Time-Management | Problem solving | Leadership | Team Collaboration | Organized | Web development | Software development | Creativity | Adaptability | Critical Thinking | Networking | Accountability | Work ethic | Goal Oriented | Attention to detail

TOOLS & TECHNOLOGIES
• Languages: JavaScript, Java, C#, HTML5, CSS3, SQL
• Frameworks: Git
• Software Tools: Visual Studio, Visual Studio Code, Oracle
• Databases: (MySQL, SQLite)
• Additional software: Git,  BlueJ , CodeBlocks



PROFESSIONAL EXPERIENCE

NWU | Vanderbijlpark                                    JAN 2023 – OCT 2024
Sinior First Football Team Captain


REFERENCES

Mr Thomas Thema
Head of Sport (NWU), Vanderbijlpark
0603231800, Thomas.Thema@nwu.ac.za



  // Create and download the file
  const blob = new Blob([cvContent], { type: "text/plain" })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = "NKOSENHLELUNGISANISIYANDA_NYEMBE_CV.txt"
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  window.URL.revokeObjectURL(url)
}
    constructor(element, words, wait = 4000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.element.innerHTML = this.txt;

        let typeSpeed = 200;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Initialize typing animations
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById('typing-name');
    const taglineElement = document.getElementById('typing-tagline');

    if (nameElement) {
        new TypeWriter(nameElement, ['Siyanda Nkosi'], 2000);
    }

    if (taglineElement) {
        new TypeWriter(taglineElement, [
            'Developer. Designer. Creator.',
            'Building Ideas Into Reality.',
            'Crafting Digital Experiences.',
            'Solving Problems Through Code.'
        ], 4000);
    }
});

// Theme Toggle
const themeBtn = document.getElementById('theme-btn');
const body = document.body;

themeBtn.addEventListener('click', () => {
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
    themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
}

// Mobile Navigation
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

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 100) {
        nav.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(30, 35, 40, 0.98)' 
            : 'rgba(250, 247, 242, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = body.getAttribute('data-theme') === 'dark' 
            ? 'rgba(30, 35, 40, 0.95)' 
            : 'rgba(250, 247, 242, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === #${current}) {
            link.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            if (entry.target.classList.contains('skills-grid')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Animate skill bars
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        setTimeout(() => {
            bar.style.width = width + '%';
        }, 200);
    });
}

// Initialize scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.about-image, .about-text, .skills-grid, .project-card, .timeline-item, .contact-info, .contact-form'
    );
    
    animateElements.forEach((el, index) => {
        el.classList.add('fade-in');
        observer.observe(el);
        
        // Add stagger delay
        el.style.transitionDelay = ${index * 0.1}s;
    });
});

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        
        const filter = btn.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// Form submission
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate form submission
    const submitBtn = this.querySelector('.btn-primary');
    const originalContent = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        alert('Thank you for your message! I\'ll get back to you soon.');
        this.reset();
        submitBtn.innerHTML = originalContent;
        submitBtn.disabled = false;
        
        // Reset form labels
        document.querySelectorAll('.form-group label').forEach(label => {
            label.style.top = '1rem';
            label.style.fontSize = '1rem';
            label.style.color = 'var(--text-light)';
        });
    }, 2000);
});

// CV Download
document.querySelector('.download-cv').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual CV file path
    link.download = 'NKOSENHLELUNGISANISIYANDA_NYEMBE_CV.pdf';
    
    // Simulate download
    alert('CV download would start here. Please add your actual CV file path.');
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (hero && heroContent && scrolled < hero.offsetHeight) {
        heroContent.style.transform = translateY(${scrolled * 0.3}px);
    }
});

// Add hover effects to project cards
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
timelineItems.forEach((item, index) => {
    item.style.animationDelay = ${index * 0.2}s;
});

// Social links hover effects
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-3px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) scale(1)';
    });
});

// Add floating animation to profile picture
const profilePicture = document.querySelector('.profile-picture img');
if (profilePicture) {
    setInterval(() => {
        profilePicture.style.transform = 'translateY(-5px)';
        setTimeout(() => {
            profilePicture.style.transform = 'translateY(0)';
        }, 1000);
    }, 3000);
}

// Preloader (optional)
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add smooth reveal animation for sections
const sections = document.querySelectorAll('section');
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'all 0.8s ease';
});

// Reveal sections on scroll
const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    sectionObserver.observe(section);
});

// Add custom cursor effect (optional enhancement)
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.custom-cursor');
    if (cursor) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    }
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply throttling to scroll events
window.addEventListener('scroll', throttle(() => {
    // Scroll-dependent functions here
}, 16)); // ~60fps

console.log('Portfolio loaded successfully! 🚀');
