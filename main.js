//Variables

const removeClassPerId = (id, clase) => {
    document.getElementById(id).classList.remove(clase);
};

const addClassPerId = (id, clase) => {
    document.getElementById(id).classList.add(clase);
};

const showAboutScreen = () => {
    removeClassPerId("aboutScreen", "hidden");
    addClassPerId("homeScreen", "hidden");
};

const aboutButton = document.getElementById("aboutBtn");
aboutButton.addEventListener("click", showAboutScreen);

const showMenu = () => {
    removeClassPerId("navMenu", "hidden");
    removeClassPerId("emptyMenuBtn", "hidden");
    addClassPerId("menuBtn", "hidden");
}

const menuButton = document.getElementById("menuBtn");
menuButton.addEventListener("click", showMenu);

const hideMenu = () => {
    addClassPerId("navMenu", "hidden");
    addClassPerId("emptyMenuBtn", "hidden");
    removeClassPerId("menuBtn", "hidden");
}

const hideMenuButton = document.getElementById("emptyMenuBtn");
hideMenuButton.addEventListener("click", hideMenu);

const showContactScreen = () => {
    removeClassPerId("contactScreen", "hidden");
    addClassPerId("homeScreen", "hidden");
    addClassPerId("aboutScreen", "hidden");
};

const phoneButton = document.getElementById("phoneBtn");
phoneButton.addEventListener("click", showContactScreen);

//Instagram Feed

(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/3915a838-bab3-441e-bf74-c5278aa124bd.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();
