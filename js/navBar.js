function Navbar() {
    const logoContainer = document.getElementById("logo-container");
    const menuDiv = document.getElementById("slide-panel");
    changeText = function() {
        logoContainer.childNodes.forEach(x => Math.random() < 0.5? x.className = "sup": x.className="");
    }

    dropMenu = function() {
        menuDiv.classList.replace("show", "hide-right");
    }

    openMenu = function() {
        menuDiv.classList.replace("hide-right", "show");
    }

    menuCanelButton = document.getElementsByClassName("cancel-menu-button")[0];
    menuButton = document.getElementsByClassName("menu-button")[0];
    menuCanelButton.addEventListener("click", dropMenu);
    menuButton.addEventListener("click", openMenu);
    setInterval(changeText, 1000);
}

new Navbar();

