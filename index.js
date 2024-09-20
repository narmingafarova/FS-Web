// NAVBAR
const navbarBtn = document.querySelector(".navbar-btn")
const navbarContent = document.querySelector(".mobile-navbar .navbar-content")
const closeMenuBtn = document.querySelector(".close-menu-btn")

navbarBtn.onclick = () => {
    navbarContent.classList.add("open-menu")
}

closeMenuBtn.onclick = () => {
    navbarContent.classList.remove("open-menu")
}


// RESOURCES DROPDOWN
const resources = document.querySelector(".resources")
const resourcesBtn = document.querySelector(".resources-btn")

resourcesBtn.onclick = () => {
    resources.classList.toggle("opened");
}


// FEATURES VIDEOS
document.addEventListener("DOMContentLoaded", function() {
    const featureItems = document.querySelectorAll(".feature-item");
    const stickyImage = document.getElementById("sticky-image");

    window.addEventListener("scroll", function() {
        let found = false;
        featureItems.forEach(block => {
            const rect = block.getBoundingClientRect();
            if (rect.top + 200 <= window.innerHeight && rect.bottom >= 200) {
                stickyImage.src = block.getAttribute("data-image");
                found = true;
            }
        });
        if (!found) {
            stickyImage.src = ""; // todo default src qoy
        }
    });
});


// ACCORDION
const accordionHeaders = document.querySelectorAll(".accordion-header")

const closeAllAccordionItems = (openedItem) => {
    accordionHeaders.forEach(header => {
        let item = header.parentElement

        if (item !== openedItem) {
            let content = item.querySelector('.accordion-content')
            item.classList.remove("open")
            content.style.maxHeight = null
        }
    })
}

accordionHeaders.forEach(header => {
    header.onclick = () => {
        let item = header.parentElement
        let content = item.querySelector('.accordion-content')
        let isAlreadyOpen = item.classList.contains("open")

        closeAllAccordionItems(item)

        if (!isAlreadyOpen) {
            item.classList.add("open")
            content.style.maxHeight = content.scrollHeight + "px"
        } else {
            item.classList.remove("open")
            content.style.maxHeight = null
        }
    }
})
