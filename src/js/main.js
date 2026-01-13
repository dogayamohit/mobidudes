

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // Initialize AOS (Animate on Scroll)
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }

    // ========================================
    // Header Scroll Effect
    // ========================================
    const header = document.getElementById('header');

    function handleScroll() {
        if (window.scrollY > 50) {
            header?.classList.add('scrolled');
        } else {
            header?.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on load

    // ========================================
    // Smooth Scroll for Anchor Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ========================================
    // Counter Animation
    // ========================================
    const counters = document.querySelectorAll('.counter');

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const updateCounter = () => {
            current += step;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    };

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => counterObserver.observe(counter));

    // ========================================
    // Swiper Carousels
    // ========================================

    // Case Studies Swiper
    if (document.querySelector('.case-studies-swiper')) {
        new Swiper('.case-studies-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            navigation: {
                nextEl: '.swiper-btn-next',
                prevEl: '.swiper-btn-prev',
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            }
        });
    }

    // Testimonials Swiper
    if (document.querySelector('.testimonials-swiper')) {
        new Swiper('.testimonials-swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            grabCursor: true,
            pagination: {
                el: '.testimonials-pagination',
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                },
                1200: {
                    slidesPerView: 3,
                }
            },
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            }
        });
    }

    // ========================================
    // Dropdown Hover (Desktop)
    // ========================================
    const dropdowns = document.querySelectorAll('.nav-item.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('mouseenter', function () {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.add('show');
            }
        });

        dropdown.addEventListener('mouseleave', function () {
            if (window.innerWidth >= 992) {
                this.querySelector('.dropdown-menu').classList.remove('show');
            }
        });
    });

    // ========================================
    // Pricing Toggle
    // ========================================
    const pricingToggle = document.getElementById('pricingToggle');

    if (pricingToggle) {
        pricingToggle.addEventListener('change', function () {
            const monthlyPrices = document.querySelectorAll('.amount.monthly');
            const yearlyPrices = document.querySelectorAll('.amount.yearly');

            if (this.checked) {
                monthlyPrices.forEach(el => el.style.display = 'none');
                yearlyPrices.forEach(el => el.style.display = 'inline');
            } else {
                monthlyPrices.forEach(el => el.style.display = 'inline');
                yearlyPrices.forEach(el => el.style.display = 'none');
            }
        });
    }

    // ========================================
    // Portfolio Filter
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active from all
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ========================================
    // FAQ Category Filter
    // ========================================
    const faqCatBtns = document.querySelectorAll('.faq-cat-btn');
    const faqItems = document.querySelectorAll('.accordion-item');

    faqCatBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            faqCatBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-category');

            faqItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // ========================================
    // Pricing Calculator
    // ========================================
    const calculatorForm = document.querySelector('.calculator-form');

    if (calculatorForm) {
        const serviceInputs = calculatorForm.querySelectorAll('input[name="service"]');
        const usersRange = document.getElementById('users');
        const apiRange = document.getElementById('apiCalls');
        const contractSelect = document.getElementById('contract');
        const addonCheckboxes = calculatorForm.querySelectorAll('.calc-checkbox input');

        // Output elements
        const basePrice = document.getElementById('basePrice');
        const userPrice = document.getElementById('userPrice');
        const apiPrice = document.getElementById('apiPrice');
        const addonPrice = document.getElementById('addonPrice');
        const discount = document.getElementById('discount');
        const totalPrice = document.getElementById('totalPrice');
        const annualPrice = document.getElementById('annualPrice');
        const usersValue = document.getElementById('usersValue');
        const apiValue = document.getElementById('apiValue');

        function calculatePrice() {
            // Get base service price
            let base = 0;
            serviceInputs.forEach(input => {
                if (input.checked) base = parseInt(input.value);
            });

            // Get user price ($10 per user)
            const users = parseInt(usersRange?.value || 10);
            const userCost = users * 10;

            // Get API price ($0.50 per 1000 calls)
            const api = parseInt(apiRange?.value || 100);
            const apiCost = api * 0.5;

            // Get addons
            let addonCost = 0;
            addonCheckboxes.forEach(cb => {
                if (cb.checked) addonCost += parseInt(cb.value);
            });

            // Get discount
            const discountRate = parseFloat(contractSelect?.value || 1);
            const discountPercent = Math.round((1 - discountRate) * 100);

            // Calculate total
            const subtotal = base + userCost + apiCost + addonCost;
            const total = subtotal * discountRate;

            // Update display
            if (basePrice) basePrice.textContent = '$' + base;
            if (userPrice) userPrice.textContent = '$' + userCost;
            if (apiPrice) apiPrice.textContent = '$' + Math.round(apiCost);
            if (addonPrice) addonPrice.textContent = '$' + addonCost;
            if (discount) discount.textContent = '-' + discountPercent + '%';
            if (totalPrice) totalPrice.textContent = '$' + Math.round(total);
            if (annualPrice) annualPrice.textContent = '$' + Math.round(total * 12).toLocaleString();
            if (usersValue) usersValue.textContent = users + ' users';
            if (apiValue) apiValue.textContent = api + 'K calls';
        }

        // Add event listeners
        serviceInputs.forEach(input => input.addEventListener('change', calculatePrice));
        usersRange?.addEventListener('input', calculatePrice);
        apiRange?.addEventListener('input', calculatePrice);
        contractSelect?.addEventListener('change', calculatePrice);
        addonCheckboxes.forEach(cb => cb.addEventListener('change', calculatePrice));

        // Initial calculation
        calculatePrice();
    }

    // ========================================
    // Form Validation
    // ========================================
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Simple validation
            const inputs = this.querySelectorAll('[required]');
            let isValid = true;

            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('is-invalid');
                } else {
                    input.classList.remove('is-invalid');
                }
            });

            if (isValid) {
                // Show success message (you would normally send to server here)
                alert('Thank you for your message! We will get back to you soon.');
                this.reset();
            }
        });
    }

    // ========================================
    // Newsletter Form
    // ========================================
    const newsletterForms = document.querySelectorAll('.newsletter-form');

    newsletterForms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;

            if (email) {
                alert('Thank you for subscribing!');
                this.reset();
            }
        });
    });

    // ========================================
    // Mobile Menu Close on Link Click
    // ========================================
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992 && navbarCollapse?.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse)?.hide();
            }
        });
    });

    // ========================================
    // Parallax Effect (Subtle)
    // ========================================
    const parallaxElements = document.querySelectorAll('.sphere-3d');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(el => {
            const speed = 0.1;
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // ========================================
    // Lazy Loading Images
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    imageObserver.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // ========================================
    // Back to Top Button (if exists)
    // ========================================
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // Preloader (if exists)
    // ========================================
    const preloader = document.querySelector('.preloader');

    if (preloader) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                preloader.classList.add('loaded');
            }, 500);
        });
    }

    console.log('aiNexa initialized successfully!');
});
