// Dark Mode Toggle (press D key to toggle)
document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "d") {
    document.body.classList.toggle("dark-mode");
    alert("Dark mode toggled!");
  }
});

// Scroll to Top Button
const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑ Top";
scrollBtn.className = "btn btn-success"; // Bootstrap style
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.borderRadius = "8px";
scrollBtn.style.display = "none";
scrollBtn.style.zIndex = "1000";
document.body.appendChild(scrollBtn);

// Show/hide scroll button
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Scroll to top smoothly
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Welcome Toast on Load
window.addEventListener("load", () => {
  console.log("Welcome to Rajpur Public School website!");

  const toast = document.createElement("div");
  toast.innerText = "Welcome to Rajpur Public School!";
  toast.style.position = "fixed";
  toast.style.bottom = "20px";
  toast.style.left = "20px";
  toast.style.backgroundColor = "#198754";
  toast.style.color = "white";
  toast.style.padding = "10px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
  toast.style.zIndex = "999";
  toast.style.transition = "opacity 0.5s";
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 500);
  }, 4000);
});

// Smooth scroll for internal links (only if target exists)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


  