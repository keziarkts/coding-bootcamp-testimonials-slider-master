function goToTanyaPage() {
    window.location.href = "tanya-page.html";
}

function goToJohnPage() {
    window.location.href = "john-page.html";
}

// For transition between pages:
window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 700)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})

