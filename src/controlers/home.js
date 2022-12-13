import data from '../data/data.js'
import renderCard from '../module/renderCard.js'
import searchFilter from '../module/searchFilter.js'
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementsByClassName('event-list')[0]
  const searchInput = document.getElementsByClassName('search-input')[0]
  renderCard(data, cardContainer, 'home')
  searchInput.addEventListener('input', (e) => searchFilter(e.target.value, data, cardContainer, 'home'))
})
