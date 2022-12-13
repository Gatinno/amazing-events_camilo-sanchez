import renderCard from './renderCard.js'
const searchFilter = (value, {currentDate, eventsByCategory}, container, view) => {
  const filterEvents = eventsByCategory.filter(event => event.name.toLowerCase().includes(value.toLowerCase()))
  renderCard({currentDate, events: filterEvents}, container, view)
}
export default searchFilter