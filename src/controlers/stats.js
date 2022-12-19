import getData from '../module/getData.js'
document.addEventListener('DOMContentLoaded', async () => {
  const data = await getData("https://amazing-events.onrender.com/api/events")
  console.log(data)
})