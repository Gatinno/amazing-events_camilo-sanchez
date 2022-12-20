import DataModule from '../module/dataModule.js'
import getData from '../module/getData.js'
import { template, renderTableUpcomingPast } from '../module/renderStatics.js'
document.addEventListener('DOMContentLoaded', async () => {
  const firstTable = document.getElementsByClassName('first-table')[0]
  const upcomingTable = document.getElementById('upcoming-table')
  const pastTable = document.getElementById('past-table')
  const data = await getData("https://amazing-events.onrender.com/api/events")
  const eventsModule = new DataModule(data.events, data.currentDate)
  const highestPercentEvent = eventsModule.getHighestPercentEvent().name
  const lowestPercentEvent = eventsModule.getLowestPercentEvent().name
  const largestCapacity = eventsModule.getEventsWithCapacity()[0].name
  const upcomingStatics = eventsModule.getUpcomingEventsStatics()
  const pastStatics = eventsModule.getPastEventsStatics()
  firstTable.innerHTML = template(highestPercentEvent, lowestPercentEvent, largestCapacity)
  renderTableUpcomingPast(upcomingStatics, upcomingTable)
  renderTableUpcomingPast(pastStatics, pastTable)
})
