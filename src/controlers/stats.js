import getData from '../module/getData.js'
document.addEventListener('DOMContentLoaded', async () => {
  const firstTable = document.getElementsByClassName('first-table')[0]
  const upcomingTable = document.getElementById('upcoming-table')
  const pastTable = document.getElementById('past-table')
  const data = await getData("https://amazing-events.onrender.com/api/events")
  const eventWithHighestCapacity = getEventsWithCapacity(data.events).sort((a, b) => b.capacity - a.capacity)[0]
  const highestAndLowestEvents = getHighestAndLowestEvents( getEventsWithPercent(data.events).sort((a, b) => b.percentAssistance - a.percentAssistance))
  const upcomingEvents = getEventsRevenueAssistancePercent(data.events.filter(event => data.currentDate < event.date))
  const pastEvents = getEventsRevenueAssistancePercent(data.events.filter(event => data.currentDate > event.date))
  renderTableUpcomingPast(upcomingEvents, upcomingTable)
  renderTableUpcomingPast(pastEvents, pastTable)
  firstTable.innerHTML = template(highestAndLowestEvents[0].name, highestAndLowestEvents[1].name, eventWithHighestCapacity.name)
})
const getPercent = (total, assistance) => ((assistance * 100)/total).toFixed(2)
const getEventsWithPercent = (events) => events.map((event) => event.assistance ? ({name: event.name,  percentAssistance: getPercent(event.capacity, event.assistance)}) : null).filter(event => event)
const getEventsWithCapacity = (events) => events.map((event) => ({name: event.name, capacity: event.capacity}))
const getHighestAndLowestEvents = (events) => events.slice(0,1).concat(events.slice(-1))
const eventRevenue = (assistance, price) => (price * assistance)
const getEventsRevenueAssistancePercent = (events) => events.map(event => ({name: event.name, revenue: eventRevenue(event.assistance ? event.assistance : event.estimate, event.price), percentAssistance: getPercent(event.capacity, event.assistance ? event.assistance : event.estimate)}))
const template = (firstElement, secondElement, thirdElement) => {
  let html = `
    <tr class="border border-1 text-center">
      <td class="border border-1">${firstElement}</td>
      <td class="border border-1">${secondElement}</td>
      <td class="border border-1">${thirdElement}</td>
    </tr>
  `
  return html
}
const renderTableUpcomingPast = (array, container) => {
  let html = ''
  array.forEach(element => {
    html += template(element.name, `$${element.revenue}`, `${element.percentAssistance}%`)
  });
  container.innerHTML = html
}