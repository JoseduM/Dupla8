const items = document.getElementById('items');
const templateCard = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();
const db = require('./db/db');


document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})

items.addEventListener('click', e => {
  console.log(e.target.parentElement)
  //addCarrito(e);
})

const fetchData = async () => {
  try {
    const res = await fetch('https://api.mercadolibre.com/sites/MLM/search?category=MLM1058');
    const data = await res.json();
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
}

const pintarCards = (data) => {
  data.results.forEach(producto => {

    templateCard.querySelector('h5').textContent = producto.title;
    templateCard.querySelector('img').setAttribute("src",producto.thumbnail);
    templateCard.querySelector('.btn-dark').dataset.id = producto.id;
    templateCard.querySelector('p').textContent = '$'+ producto.price;

    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  items.appendChild(fragment);
}

