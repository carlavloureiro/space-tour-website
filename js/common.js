document.addEventListener('DOMContentLoaded', function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
            setupHeaderLinks(); 
            setupMobileMenu();  
        });
});

function setupHeaderLinks() {
    const links = document.querySelectorAll('.nav-link');
    const currentUrl = window.location.href;

    links.forEach(link => {
        // Verifica se o link corresponde à URL atual
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
    });
}

function setupMobileMenu() {
    const menuIcon = document.querySelector('.menu-icon'); 
    const nav = document.querySelector('.header-navigation'); 

    if (menuIcon && nav) {
        menuIcon.addEventListener('click', function () {
            nav.style.display = "flex";
            nav.classList.toggle('active');
            if (nav.classList.contains("active")) {
                menuIcon.setAttribute('src', '/images/homepage-header/Close.png');
            }
            else {
                menuIcon.setAttribute('src', '/images/homepage-header/menu.png')
            }
            
        });
    }
}

const mobileMediaQuery = window.matchMedia('(max-width: 600px)');

function alterarBackground(e) {
    if (e.matches) {
        let path = window.location.pathname;
        let segments = path.split('/').pop();
        let pageName;
            if (!segments || segments === 'index.html') {
                document.body.style.background = `url('/images/home/Mobile-home.png')`;
            } else {
                pageName = segments.split('.').shift();
                document.body.style.background = `url('/images/${pageName}/Mobile-${pageName}.png')`;
                document.body.style.backgroundSize = 'cover';
            }      
    }
}

alterarBackground(mobileMediaQuery);
mobileMediaQuery.addEventListener('change', alterarBackground);
