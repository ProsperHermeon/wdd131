const experiences = [
  {
    id: 'lion-head-dawn',
    title: 'Lion\'s Head Dawn Hike',
    category: 'adventure',
    summary: 'Twirl your headlamp to constellations, summit by sunrise, and picnic with 360° views.',
    time: '05:00 - 08:30',
    location: 'Signal Hill',
    image: 'images/capetown1.jpg',
    alt: 'Hiker on Lion\'s Head at sunrise'
  },
  {
    id: 'bo-kaap-flavors',
    title: 'Bo-Kaap Spice Studio',
    category: 'food',
    summary: 'Borrow a family masala blend, fold samoosas, and learn the stories behind Cape Malay curries.',
    time: '11:00 - 13:00',
    location: 'Bo-Kaap',
    image: 'images/capetown4.jpg',
    alt: 'Cape Malay spices'
  },
  {
    id: 'winelands-cycle',
    title: 'Constantia Cycle & Cellar',
    category: 'adventure',
    summary: 'Cruise vine-lined roads, sip cool-climate chardonnay, and picnic under 300-year-old oaks.',
    time: '09:30 - 14:00',
    location: 'Constantia Valley',
    image: 'images/capetown7.jpg',
    alt: 'Cyclists in vineyards'
  },
  {
    id: 'bree-vinyl',
    title: 'Bree Street Vinyl & Aperitivo',
    category: 'culture',
    summary: 'Browse rare pressings, hear pop-up jazz, and share aperitivo plates as the city glows.',
    time: '17:00 - 20:30',
    location: 'Bree Street',
    image: 'images/capetown5.jpg',
    alt: 'People enjoying Bree Street at dusk'
  },
  {
    id: 'surf-supper',
    title: 'Muizenberg Surf & Snoek Supper',
    category: 'adventure',
    summary: 'Catch a gentle break, then feast on snoek tacos straight from the harbor grills.',
    time: '13:00 - 18:00',
    location: 'Muizenberg',
    image: 'images/capetown6.jpg',
    alt: 'Colorful huts and surfers at Muizenberg'
  },
  {
    id: 'chef-series',
    title: 'Chef\'s Table: Afro-Asian Remix',
    category: 'food',
    summary: 'Seven course tasting menu pairing West Coast seafood with Cape Malay spice and Japanese technique.',
    time: '19:00 - 22:30',
    location: 'Woodstock',
    image: 'images/capetown2.jpg',
    alt: 'Fine dining table'
  }
];

const weatherTips = {
  summer: 'Pack reef-safe sunscreen, a breezy shirt, and a windbreaker for the Cape Doctor.',
  autumn: 'Layer with a lightweight knit; evenings get crisp after golden hour.',
  winter: 'Waterproof shell + cozy beanie. Winter brings wild seas and wine firesides.',
  spring: 'Expect floral bursts and surprise showers. Bring a camera and quick-dry shoes.'
};

const microPlans = [
  {
    mood: 'adventure',
    daypart: 'morning',
    plan: 'Sunrise hike up Lion\'s Head, smoothie bowl at Orchard on Long, then tidal pool dip at Saunders Rocks.'
  },
  {
    mood: 'adventure',
    daypart: 'afternoon',
    plan: 'Learn surfing at Muizenberg, grab coffee at Surfer\'s Corner, and train hop to Kalk Bay for harbor fish & chips.'
  },
  {
    mood: 'adventure',
    daypart: 'evening',
    plan: 'Kayak with dolphins at Sea Point, then sunset gin tasting at The Gin Bar.'
  },
  {
    mood: 'culture',
    daypart: 'morning',
    plan: 'Bo-Kaap walking tour, Cape Malay cooking class, and Iziko Slave Lodge museum stop.'
  },
  {
    mood: 'culture',
    daypart: 'afternoon',
    plan: 'Zeitz MOCAA art immersion, rooftop lunch at The Silo, and V&A Watershed makers market.'
  },
  {
    mood: 'culture',
    daypart: 'evening',
    plan: 'First Thursdays gallery hop, vinyl digs at The Waiting Room, and tapas crawl on Bree Street.'
  },
  {
    mood: 'easy',
    daypart: 'morning',
    plan: 'Cycle the Sea Point Promenade, pastry stop at Jason Bakery, and book browsing at Clarke\'s.'
  },
  {
    mood: 'easy',
    daypart: 'afternoon',
    plan: 'Chapman\'s Peak drive, Noordhoek Farm Village lunch, and equestrian beach walk.'
  },
  {
    mood: 'easy',
    daypart: 'evening',
    plan: 'Picnic at Kirstenbosch summer concert followed by stargazing at the Planetarium.'
  }
];

const wishlistKey = 'cte-wishlist';

const grid = document.getElementById('experienceGrid');
const filterButtons = document.querySelectorAll('.chip');
const wishlistCountEl = document.getElementById('wishlistCount');

const renderExperiences = (filter = 'all') => {
  if (!grid) return;
  const filtered = filter === 'all' ? experiences : experiences.filter((item) => item.category === filter);
  grid.innerHTML = filtered
    .map((item) => `
      <article class="experience-card">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" width="540" height="360">
        <div>
          <div class="card-meta">
            <span>${item.location}</span>
            <span>${item.time}</span>
          </div>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="card-actions">
            <button class="save-btn" data-save="${item.id}">Save</button>
            <button class="btn secondary" data-category="${item.category}">${item.category}</button>
          </div>
        </div>
      </article>
    `)
    .join('');
};

const updateWishlistCount = () => {
  if (!wishlistCountEl) return;
  const stored = Number(localStorage.getItem(wishlistKey) || 0);
  wishlistCountEl.textContent = stored;
};

const handleSave = (id, button) => {
  if (!id || !button) return;
  const current = Number(localStorage.getItem(wishlistKey) || 0) + 1;
  localStorage.setItem(wishlistKey, current);
  button.textContent = 'Saved';
  button.disabled = true;
  updateWishlistCount();
};

if (grid) {
  renderExperiences();
  updateWishlistCount();

  grid.addEventListener('click', (event) => {
    const target = event.target;
    if (target.matches('[data-save]')) {
      handleSave(target.dataset.save, target);
    }
  });
}

filterButtons.forEach((btn) => {
  btn?.addEventListener('click', () => {
    filterButtons.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderExperiences(btn.dataset.filter);
  });
});

const weatherForm = document.getElementById('weatherForm');
const weatherTip = document.getElementById('weatherTip');

weatherForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const season = event.target.season.value;
  const tip = weatherTips[season];
  weatherTip.textContent = tip || 'Cape Town weather keeps you guessing—bring flexible layers!';
});

const planForm = document.getElementById('planForm');
const planResult = document.getElementById('planResult');

planForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const { mood, daypart } = event.target;
  const suggestion = microPlans.find((plan) => plan.mood === mood.value && plan.daypart === daypart.value);
  if (suggestion) {
    planResult.textContent = suggestion.plan;
  } else {
    planResult.textContent = 'Mix Table Mountain cable car with Bree Street tapas for a balanced day.';
  }
});

const updateFooterMeta = () => {
  const yearEls = document.querySelectorAll('#year');
  const modifiedEls = document.querySelectorAll('#lastModified');
  yearEls.forEach((el) => (el.textContent = new Date().getFullYear()));
  modifiedEls.forEach((el) => (el.textContent = `Last update: ${document.lastModified}`));
};

updateFooterMeta();
