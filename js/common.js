document.addEventListener('DOMContentLoaded', function () {
    let path = window.location.pathname;
    let fetchPath;

    if (path.endsWith('index.html') || path === '/' || path === '/<space-tour-website>/') {
        fetchPath = './html/header.html';
    } else {
        fetchPath = './html/header.html';
    }

    fetch(fetchPath)
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
                menuIcon.setAttribute('src', './images/homepage-header/Close.png');
            }
            else {
                // Corrija o caminho para '../' ou './' dependendo da página onde você está
                let path = window.location.pathname;
                if (path.endsWith('index.html') || path === '/' || path === '/<space-tour-website>/') {
                    menuIcon.setAttribute('src', './images/homepage-header/menu.png'); 
                } else {
                    menuIcon.setAttribute('src', '../images/homepage-header/menu.png'); 
                }
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
                document.body.style.background = `url('./images/home/Mobile-home.png')`;
            } else {
                pageName = segments.split('.').shift();
                document.body.style.background = `url('./images/${pageName}/Mobile-${pageName}.png')`;
                document.body.style.backgroundSize = 'cover';
            }      
    }
}

alterarBackground(mobileMediaQuery);
mobileMediaQuery.addEventListener('change', alterarBackground);
