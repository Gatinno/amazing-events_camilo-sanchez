const renderDetails = (event, container) => {
	const html = 
  event ? `
    <div class="event-details d-flex flex-column align-items-center text-light rounded py-3 p-sm-3 flex-lg-row justify-content-between">
      <img class="event__img rounded" src="${event.image}" alt="${event.name}">
      <div class="details mt-5 text-center p-3 mt-lg-0">
        <h1>${event.name}</h1>
        <div class="d-flex justify-content-center gap-5 mt-3"><span>Date: ${event.date}</span><span>Category: ${event.category}</span><span>Price: $${event.price}</span></div>
        <p class="mt-3">${event.description}</p>
        <div class="mt-3">
          <p>Place: ${event.place}</p>
          <p class="mt-3">Capacity: ${event.capacity} people</p>
          <p>${event.assistance ? `Asistance: ${event.assistance} people`: `Estimate: ${event.estimate} people`}</p>
        </div>
      </div>
    </div>
  ` : `<h2 class="text-center text-light">Error 404: Event not found</h2>`
  container.innerHTML = html
};
export default renderDetails