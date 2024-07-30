const navLinks = document.querySelectorAll('nav a');
        const sections = document.querySelectorAll('section');

        function setActiveLink() {
            let index = sections.length;

            while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

            navLinks.forEach((link) => link.classList.remove('active'));
            navLinks[index].classList.add('active');
        }

        window.addEventListener('scroll', setActiveLink);
        document.addEventListener('DOMContentLoaded', setActiveLink);