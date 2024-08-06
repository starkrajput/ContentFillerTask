//Navbar
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbarS');
    const menuIcon = document.getElementById('menu-iconS');
    const navbarMenu = document.getElementById('navbar-menuS');

    let isOpen = false;
    let isScrollingUp = true;
    let lastScrollY = window.scrollY;
    let isAtTop = true;

    const toggleMenu = () => {
        isOpen = !isOpen;
        if (isOpen) {
            navbarMenu.classList.add('open');
        } else {
            navbarMenu.classList.remove('open');
        }
    };

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            isScrollingUp = false;
            navbar.classList.add('hidden');
        } else {
            isScrollingUp = true;
            navbar.classList.remove('hidden');
        }

        lastScrollY = currentScrollY;
        isAtTop = currentScrollY === 0;
        if (!isAtTop) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    menuIcon.addEventListener('click', toggleMenu);
    window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', () => {
    const uniqueCards = document.querySelectorAll('.unique-card');

    const uniqueObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, { threshold: 0.1 });

    uniqueCards.forEach(uniqueCard => {
        uniqueObserver.observe(uniqueCard);
    });
});


