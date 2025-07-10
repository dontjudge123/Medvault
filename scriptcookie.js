// JavaScript for managing cookies
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookies = decodedCookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(name) === 0) {
            return cookie.substring(name.length + 1, cookie.length);
        }
    }
    return "";
}

function acceptCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    setCookie('cookieAccepted', 'true', 30); // Set the cookie for 30 days
}

function declineCookies() {
    document.getElementById('cookie-consent').style.display = 'none';
    setCookie('cookieAccepted', 'false', 30); // Set the cookie for 30 days
}

const cookieStatus = getCookie('cookieAccepted');
if (cookieStatus === 'true') {
    // User accepted cookies
    // Additional code if needed
} else if (cookieStatus === 'false') {
    // User declined cookies
    // Additional code if needed
} else {
    // Cookie not set, show cookie consent
    const consentElem = document.getElementById('cookie-consent');
    if (consentElem) {
        consentElem.style.display = 'block';
    }
}

// JavaScript for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// JavaScript for scroll-to-top button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    const scrollToTopButton = document.querySelector('.scroll-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}