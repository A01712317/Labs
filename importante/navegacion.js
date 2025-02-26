// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const sectionId = this.getAttribute('data-section');

            sections.forEach(section => {
                if (section.id === sectionId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });
});
