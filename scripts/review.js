const params = new URLSearchParams(window.location.search);
const summary = document.getElementById('summary');
const reviewCountEl = document.getElementById('reviewCount');

const productMap = {
  'ctn-pack': 'Cape Ten Essentials Pack',
  'table-mtn-hike': 'Table Mountain Guided Hike',
  'peninsula-tour': 'Peninsula Scenic Drive',
  'winelands-kit': 'Winelands Picnic Kit',
  'surf-session': 'Muizenberg Surf Session',
  'city-pass': 'Cape Explorer City Pass'
};

const featureMap = {
  'durability': 'Durability',
  'ease-of-use': 'Ease of Use',
  'performance': 'Performance',
  'design': 'Design'
};

const featuresSelected = params.getAll('features')
  .map((value) => featureMap[value] || value);

const fields = [
  { label: 'Product', value: productMap[params.get('product')] || 'Not provided' },
  { label: 'Rating', value: params.get('rating') ? `${params.get('rating')} / 5` : 'Not provided' },
  { label: 'Installed On', value: params.get('installation') || 'Not provided' },
  { label: 'Useful Features', value: featuresSelected.join(', ') || 'Not specified' },
  { label: 'Review Notes', value: params.get('review') || 'Not provided' },
  { label: 'Reviewer', value: params.get('username') || 'Anonymous' }
];

fields.forEach(({ label, value }) => {
  const dt = document.createElement('dt');
  dt.textContent = label;
  const dd = document.createElement('dd');
  dd.textContent = value;
  summary.append(dt, dd);
});

const STORAGE_KEY = 'ct-review-count';
const currentCount = Number(localStorage.getItem(STORAGE_KEY) || 0) + 1;
localStorage.setItem(STORAGE_KEY, currentCount);
reviewCountEl.textContent = currentCount;

const yearEl = document.getElementById('year');
const lastModEl = document.getElementById('lastModified');
if (yearEl && lastModEl) {
  yearEl.textContent = new Date().getFullYear();
  lastModEl.textContent = `Last Modification: ${document.lastModified}`;
}
