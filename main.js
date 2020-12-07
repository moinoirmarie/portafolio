// Remueve o agrega class por id

const removeClassPerId = (id, clase) => {
    document.getElementById(id).classList.remove(clase);
};

const addClassPerId = (id, clase) => {
    document.getElementById(id).classList.add(clase);
};

// Mostrar y ocultar menu

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

// Muestra "Sobre mí"

const showAboutScreen = () => {
    removeClassPerId("aboutScreen", "hidden");
    addClassPerId("homeScreen", "hidden");
    addClassPerId("portfolioHome", "hidden");
    addClassPerId("contactScreen", "hidden");
};

const aboutButton = document.getElementById("aboutBtn");
aboutButton.addEventListener("click", showAboutScreen);

const aboutButton02 = document.getElementById("aboutBtn02");
aboutButton02.addEventListener("click", showAboutScreen);

// Muestra "Contacto"

const showContactScreen = () => {
    removeClassPerId("contactScreen", "hidden");
    addClassPerId("homeScreen", "hidden");
    addClassPerId("aboutScreen", "hidden");
    addClassPerId("portfolioHome", "hidden");
};

const phoneButton = document.getElementById("phoneBtn");
phoneButton.addEventListener("click", showContactScreen);

const contactButton = document.getElementById("contactBtn02");
contactButton.addEventListener("click", showContactScreen);

// Muestra portafolio

const showPortfolioHome = () => {
    removeClassPerId("portfolioHome", "hidden");
    addClassPerId("contactScreen", "hidden");
    addClassPerId("homeScreen", "hidden");
    addClassPerId("aboutScreen", "hidden");
};

const portfolioHomeButton = document.getElementById("cover");
const portfolioHomeButton02 = document.getElementById("portfolioBtn");
portfolioHomeButton.addEventListener("click", showPortfolioHome);
portfolioHomeButton02.addEventListener("click", showPortfolioHome);

// Volver al Home

const goBackToHome = () => {
    removeClassPerId("homeScreen", "hidden");
    addClassPerId("contactScreen", "hidden");
    addClassPerId("aboutScreen", "hidden");
    addClassPerId("portfolioHome", "hidden");
}

const homeButton = document.getElementById("backToHome");
homeButton.addEventListener("click", goBackToHome);

// Instagram Feed

(function(){
    var i, e, d = document, s = "script";i = d.createElement("script");i.async = 1;
    i.src = "https://cdn.curator.io/published/3915a838-bab3-441e-bf74-c5278aa124bd.js";
    e = d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();


// Typeform

(function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })();