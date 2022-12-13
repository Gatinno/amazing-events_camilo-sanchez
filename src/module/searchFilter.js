import renderCard from './renderCard.js'
const searchFilter = (value, data, container, view) => {
  const filterEvents = data.events.filter(event => event.name.toLowerCase().includes(value.toLowerCase()))
  renderCard({currentDate: data.currentDate, events: filterEvents}, container, view)
}
export default searchFilter