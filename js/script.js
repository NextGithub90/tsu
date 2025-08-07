// Initialize AOS Animation Library
document.addEventListener("DOMContentLoaded", function () {
  // Initialize AOS
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });

  // Animate counter numbers
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-item h3");
    const speed = 200; // Kecepatan animasi (semakin rendah semakin cepat)

    counters.forEach((counter) => {
      const target = parseFloat(counter.innerText);
      const suffix = counter.innerText.replace(/[0-9.]/g, ""); // Mendapatkan suffix seperti +, % dll
      const baseValue = target;
      let count = 0;
      const increment = baseValue / speed;

      const updateCount = () => {
        if (count < baseValue) {
          count += increment;
          // Jika sudah mendekati target, langsung set ke target
          if (count > baseValue - increment) {
            count = baseValue;
          }

          // Format angka sesuai dengan tipe
          let displayValue;
          if (Number.isInteger(baseValue)) {
            displayValue = Math.floor(count);
          } else {
            displayValue = count.toFixed(1);
          }

          counter.innerText = displayValue + suffix;
          setTimeout(updateCount, 1);
        }
      };

      // Reset counter untuk animasi
      counter.innerText = "0" + suffix;
      updateCount();
    });
  }

  // Trigger counter animation when stats section is in viewport
  const statsSection = document.querySelector(".stats-row");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  if (statsSection) {
    observer.observe(statsSection);
  }

  // Navbar scroll effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: "smooth",
        });
      }
    });
  });

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.classList.add("active");
    } else {
      backToTopButton.classList.remove("active");
    }
  });

  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  // Countdown Timer
  function startCountdown() {
    // Set the countdown date (7 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 7);

    // Update the countdown every 1 second
    const countdownTimer = setInterval(function () {
      // Get current date and time
      const now = new Date().getTime();

      // Find the distance between now and the countdown date
      const distance = countdownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
      document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
      document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
      document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

      // If the countdown is finished, clear the interval
      if (distance < 0) {
        clearInterval(countdownTimer);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
      }
    }, 1000);
  }

  // Start the countdown
  startCountdown();

  // Active navigation menu based on scroll position
  function highlightNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", function () {
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    });
  }

  highlightNavigation();

  // Mobile menu toggle
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  if (navbarToggler) {
    navbarToggler.addEventListener("click", function () {
      navbarCollapse.classList.toggle("show");
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (e) {
      if (!navbarToggler.contains(e.target) && !navbarCollapse.contains(e.target) && navbarCollapse.classList.contains("show")) {
        navbarCollapse.classList.remove("show");
      }
    });

    // Close mobile menu when clicking on a nav link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", function () {
        if (navbarCollapse.classList.contains("show")) {
          navbarCollapse.classList.remove("show");
        }
      });
    });
  }

  // Add hover effects to strategy cards
  const strategyCards = document.querySelectorAll(".strategy-card");
  strategyCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
    });
  });

  // Add hover effects to testimonial cards
  const testimonialCards = document.querySelectorAll(".testimonial-card");
  testimonialCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px)";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)";
      this.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)";
    });
  });

  // WhatsApp button click tracking
  const whatsappButton = document.querySelector('a[href^="https://wa.me/"]');
  if (whatsappButton) {
    whatsappButton.addEventListener("click", function () {
      console.log("WhatsApp button clicked");
      // You can add analytics tracking code here
    });
  }
});
