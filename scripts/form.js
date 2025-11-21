const productSelect = document.querySelector('#product');

const products = [
  { id: 'ctn-pack', name: 'Cape Ten Essentials Pack' },
  { id: 'table-mtn-hike', name: 'Table Mountain Guided Hike' },
  { id: 'peninsula-tour', name: 'Peninsula Scenic Drive' },
  { id: 'winelands-kit', name: 'Winelands Picnic Kit' },
  { id: 'surf-session', name: 'Muizenberg Surf Session' },
  { id: 'city-pass', name: 'Cape Explorer City Pass' }
];

const fragment = document.createDocumentFragment();
products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name;
  fragment.appendChild(option);
});
productSelect.appendChild(fragment);
