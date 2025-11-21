const temples = [
  {
    templeName: "San Diego California Temple",
    location: "San Diego, California, USA",
    dedicated: "1993-04-25",
    area: 72000,
    imageUrl: "images/temple1.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, USA",
    dedicated: "1893-04-06",
    area: 253015,
    imageUrl: "images/temple2.jpg",
  },
  {
    templeName: "Laie Hawaii Temple",
    location: "Laie, Oahu, Hawaii, USA",
    dedicated: "1919-11-27",
    area: 42000,
    imageUrl: "images/temple3.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019-03-10",
    area: 41010,
    imageUrl: "images/temple4.jpg",
  },
  {
    templeName: "Paris France Temple",
    location: "Le Chesnay, France",
    dedicated: "2017-05-21",
    area: 44000,
    imageUrl: "images/temple5.jpg",
  },
  {
    templeName: "Accra Ghana Temple",
    location: "Accra, Ghana",
    dedicated: "2004-01-11",
    area: 17500,
    imageUrl: "images/temple6.jpg",
  },
  {
    templeName: "Johannesburg South Africa Temple",
    location: "Johannesburg, South Africa",
    dedicated: "1985-08-25",
    area: 19184,
    imageUrl: "images/temple7.jpg",
  },
  {
    templeName: "Abuja Nigeria Temple",
    location: "Abuja, Nigeria",
    dedicated: "2024-12-01",
    area: 31000,
    imageUrl: "images/temple8.jpg",
  },
  {
    templeName: "Brasília Brazil Temple",
    location: "Brasília, Brazil",
    dedicated: "2023-09-17",
    area: 25000,
    imageUrl: "images/temple9.jpg",
  },
  {
    templeName: "Lima Peru Los Olivos Temple",
    location: "Lima, Peru",
    dedicated: "2024-01-14",
    area: 44800,
    imageUrl: "images/temple3.jpg",
  },
  {
    templeName: "Pocatello Idaho Temple",
    location: "Pocatello, Idaho, USA",
    dedicated: "2021-11-07",
    area: 6700,
    imageUrl: "images/temple2.jpg",
  },
];

const gallery = document.getElementById("templeGallery");
const navButtons = document.querySelectorAll("#filter-nav a");
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("filter-nav");

const renderTemples = (list) => {
  gallery.innerHTML = "";

  list.forEach((temple) => {
    const card = document.createElement("article");
    card.className = "temple-card";

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";
    card.appendChild(image);

    const content = document.createElement("div");
    content.className = "temple-content";

    const title = document.createElement("h3");
    title.textContent = temple.templeName;
    content.appendChild(title);

    const meta = document.createElement("div");
    meta.className = "temple-meta";
    meta.innerHTML = `
      <p><span>Location:</span> ${temple.location}</p>
      <p><span>Dedicated:</span> ${new Intl.DateTimeFormat("en-US", {
        dateStyle: "long",
      }).format(new Date(temple.dedicated))}</p>
      <p><span>Total Area:</span> ${temple.area.toLocaleString()} sq ft</p>
    `;

    content.appendChild(meta);
    card.appendChild(content);
    gallery.appendChild(card);
  });
};

const setActiveButton = (target) => {
  navButtons.forEach((btn) => btn.classList.remove("active"));
  target.classList.add("active");
};

const applyFilter = (filter) => {
  const filtered = temples.filter((temple) => {
    const year = new Date(temple.dedicated).getFullYear();
    switch (filter) {
      case "old":
        return year < 1900;
      case "new":
        return year > 2000;
      case "large":
        return temple.area > 90000;
      case "small":
        return temple.area < 10000;
      default:
        return true;
    }
  });

  renderTemples(filtered);
};

navButtons.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    setActiveButton(link);
    applyFilter(link.dataset.filter);

    if (nav.classList.contains("active")) {
      nav.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

const yearElement = document.getElementById("currentyear");
const modifiedElement = document.getElementById("lastModified");

yearElement.textContent = new Date().getFullYear();
modifiedElement.textContent = `Last Modification: ${document.lastModified}`;

renderTemples(temples);
