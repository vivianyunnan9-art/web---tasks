/* ========== الجزء الأول: كروت الفنادق ========== */

const hotels = [
  { badge: "Getaway Deal", img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
    name: "Hotel Arts Barcelona", stars: 5, score: 5.0, tag: "Excellent", reviews: 1260,
    loc: "Port Olimpic · 1.8 km from centre", beach: "250 m from beach",
    room: "Luxury Hotel · Sea View Room · King Bed · 40 m²",
    tags: ["Free cancellation", "Spa access", "Breakfast included"], oldPrice: 1800, price: 1500 },

  { badge: "Best Location", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=500",
    name: "W Barcelona", stars: 5, score: 5.0, tag: "Excellent", reviews: 1200,
    loc: "Barceloneta · 2.5 km from centre", beach: "Direct beachfront",
    room: "Beach Hotel · Sea View Room · King Bed · 35 m²",
    tags: ["Breakfast included", "Spa access"], price: 1395 },

  { badge: "", img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500",
    name: "Eurostars Grand Marina", stars: 4, score: 4.4, tag: "Very Good", reviews: 1100,
    loc: "Port Vell · 1.4 km from centre", beach: "900 m from beach",
    room: "Harborfront Hotel · Deluxe Room · King Bed · 33 m²",
    tags: ["Free cancellation", "Breakfast included"], oldPrice: 1350, price: 1215 },

  { badge: "Best Value", img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=500",
    name: "Melia Barcelona Sky", stars: 4, score: 3.8, tag: "Good", reviews: 1050,
    loc: "Poblenou · 3.5 km from centre", beach: "700 m from beach",
    room: "Spa Hotel · Premium Room · King Bed",
    tags: ["Free cancellation", "Spa access", "Beach view"], oldPrice: 1200, price: 1080 },
];

function renderCard(h) {
  return `
    <div class="card mb-3 shadow-sm border-0">
      <div class="row g-0">
        <div class="col-md-4 position-relative">
          <img src="${h.img}" class="hotel-img w-100 rounded-start" alt="${h.name}">
          ${h.badge ? `<span class="badge text-bg-dark badge-corner">${h.badge}</span>` : ''}
          <button class="heart-btn" onclick="toggleHeart(this)">
            <i class="fa-regular fa-heart"></i>
          </button>
        </div>

        <div class="col-md-8">
          <div class="card-body position-relative h-100">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="mb-1">${h.name} <span class="stars">${'★'.repeat(h.stars)}</span></h5>
                <div class="text-muted small mb-2">
                  <i class="fa-solid fa-location-dot"></i> ${h.loc}
                  &nbsp; <i class="fa-solid fa-umbrella-beach"></i> ${h.beach}
                </div>
              </div>
              <div class="text-end small text-muted">
                ${h.tag}<br>${h.reviews} reviews
                <span class="badge score-badge d-inline-block mt-1">${h.score}</span>
              </div>
            </div>

            <p class="mb-2">${h.room}</p>

            <div class="d-flex gap-3 small text-muted flex-wrap">
              ${h.tags.map(t => `<span><i class="fa-solid fa-check"></i> ${t}</span>`).join('')}
            </div>

            <div class="position-absolute bottom-0 end-0 p-3 text-end">
              ${h.oldPrice ? `<span class="badge text-bg-success-subtle text-success mb-1">10% off</span>
                <div class="text-decoration-line-through text-muted small">$${h.oldPrice}</div>` : ''}
              <div class="fs-4 fw-bold">$${h.price}</div>
              <div class="small text-muted">5 nights, 2 adults</div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function toggleHeart(btn) {
  btn.classList.toggle('liked');
  btn.innerHTML = btn.classList.contains('liked')
    ? '<i class="fa-solid fa-heart"></i>'
    : '<i class="fa-regular fa-heart"></i>';
}

document.getElementById('cards').innerHTML = hotels.map(renderCard).join('');

const pag = document.getElementById('pagination');
for (let i = 1; i <= 5; i++) {
  pag.innerHTML += `<li class="page-item ${i === 1 ? 'active' : ''}"><a class="page-link" href="#">${i}</a></li>`;
}


/* ========== الجزء الثاني: مودال اللغة والعملة ========== */

const languages = [
  { name: "English (US)", code: "us" }, { name: "English (UK)", code: "gb" },
  { name: "Deutsch", code: "de" }, { name: "Nederlands", code: "nl" },
  { name: "Français", code: "fr" }, { name: "Español", code: "es" },
  { name: "Español (AR)", code: "ar" }, { name: "Norsk", code: "no" },
  { name: "Italiano", code: "it" }, { name: "Português (PT)", code: "pt" },
  { name: "Português (BR)", code: "br" }, { name: "Suomi", code: "fi" },
  { name: "Svenska", code: "se" }, { name: "Dansk", code: "dk" },
  { name: "Čeština", code: "cz" }, { name: "Русский", code: "ru" },
  { name: "Türkçe", code: "tr" }, { name: "Polski", code: "pl" },
  { name: "Ελληνικά", code: "gr" }, { name: "العربية", code: "sa" },
  { name: "עברית", code: "il" }, { name: "Bahasa Indonesia", code: "id" },
  { name: "Bahasa Melayu", code: "my" }, { name: "日本語", code: "jp" },
];

const currencies = [
  { name: "USD - US Dollar", code: "us" }, { name: "EUR - Euro", code: "eu" },
  { name: "GBP - British Pound", code: "gb" }, { name: "EGP - Egyptian Pound", code: "eg" },
  { name: "SAR - Saudi Riyal", code: "sa" }, { name: "AED - UAE Dirham", code: "ae" },
  { name: "JPY - Japanese Yen", code: "jp" }, { name: "CAD - Canadian Dollar", code: "ca" },
];

function renderList(container, items, activeIndex) {
  container.innerHTML = items.map((item, i) => `
    <div class="col">
      <div class="lang-item p-2 d-flex justify-content-between align-items-center ${i === activeIndex ? 'active' : ''}"
           style="cursor:pointer" onclick="selectItem(this)">
        <span><img src="https://flagcdn.com/w20/${item.code}.png" class="flag-icon me-1"> ${item.name}</span>
        <i class="fa-solid fa-check check"></i>
      </div>
    </div>`).join('');
}

function selectItem(el) {
  el.parentElement.parentElement.querySelectorAll('.lang-item').forEach(x => x.classList.remove('active'));
  el.classList.add('active');
}

renderList(document.getElementById('langList'), languages, 0);
renderList(document.getElementById('currencyList'), currencies, 0);