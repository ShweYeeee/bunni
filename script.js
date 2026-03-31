const homepage = document.querySelector("#home-page");
const aboutpage = document.querySelector("#about-page");
const flowerspage = document.querySelector("#flowers-page");
const bouquetpage = document.querySelector("#bouquet-page");
const contactuspage = document.querySelector("#contactus-page");
const resourcespage = document.querySelector("#resources-page");
const donatepage = document.querySelector("#donate-page");

const home = document.querySelector("#home");
const about = document.querySelector("#about");
const flowers = document.querySelector("#Flowers");
const bouquet = document.querySelector("#Bouquet");
const contactus = document.querySelector("#ContactUs");
const resources = document.querySelector("#resorces");
const donate = document.querySelector("#donate");


function showPage(pageId) {
    // Hide all pages
    var pages = document.getElementsByClassName('page');
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }

    // Show the selected page
    document.getElementById(pageId).style.display = 'block';
}
function navigateTo(pageName, url) {
    // Dynamically update content here (e.g., using innerHTML or DOM manipulation)
    document.getElementById('content-area').innerHTML = `<h1>Welcome to ${pageName}</h1>`;
    
    // Change the URL in the browser's address bar
    history.pushState({page: pageName}, pageName, url);
}

home.addEventListener("click", function() {
    showPage("home-page");
});

about.addEventListener("click", function() {
    showPage("about-page");
});

flowers.addEventListener("click", function() {
    showPage("flowers-page");
});

bouquet.addEventListener("click", function() {
    showPage("bouquet-page");
});
contactus.addEventListener("click", function() {
    showPage("contactus-page");
});
resources.addEventListener("click", function() {
    showPage("resources-page");
});
donate.addEventListener("click", function() {
    showPage("donate-page");
}); 

// Show the home page by default
showPage("donate-page");

function filterSelection(category) {
    let cards = document.getElementsByClassName("card");

    for (let i = 0; i < cards.length; i++) {
      cards[i].style.display = "none";
      if (category === "all" || cards[i].classList.contains(category)) {
        cards[i].style.display = "block";
      }
    }

    let buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
  }

  function scrollToRabbits() {
    document.getElementById("rabbits").scrollIntoView({ behavior: "smooth" });
  }

  function filterEvents(type) {
    const cards = document.querySelectorAll('.event-card');
    const buttons = document.querySelectorAll('.filters button');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    cards.forEach(card => {
      if (type === 'all' || card.dataset.type === type) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  }