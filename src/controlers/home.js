import data from '../data/data.js'
import renderCard from '../module/renderCard.js'
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementsByClassName('event-list')[0]
  renderCard(data, cardContainer, 'home')
})
