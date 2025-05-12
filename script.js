// Toggle Responsive Navbar
function myFunction() {
    const nav = document.getElementById("myTopnav");
    nav.classList.toggle("responsive");
}

// Smooth Scroll to Sections
document.querySelectorAll('.navbar-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith("#")) {
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            } else {
                console.error(Element with ID '${targetId.substring(1)}' not found.);
            }
        } else {
            console.error('Invalid or missing href attribute.');
        }
    });
});
