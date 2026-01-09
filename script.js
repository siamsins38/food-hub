function updateDateTime() {
  const dateTimeContainer = document.getElementById('date-time');
  const now = new Date();

  // Format: Saturday, 8 January 2026, 04:30:15 PM
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  };

  dateTimeContainer.textContent = now.toLocaleString('en-US', options);
}

// Update every second
setInterval(updateDateTime, 1000);

// Initial call
updateDateTime();
// backtotop js 
// Get the button
const backToTop = document.getElementById("backToTop");

// Show button when user scrolls down 200px
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});

// Smooth scroll to top
backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

