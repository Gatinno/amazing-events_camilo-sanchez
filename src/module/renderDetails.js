const renderDetails = (id, array, container) => {
	const {
		image,
		name,
		date,
		description,
		category,
		place,
		capacity,
    assistance,
    estimate,
		price
	} = array.find((element) => element._id === id);
	const html = `
    <div class="event-details d-flex flex-column align-items-center text-light rounded py-3 p-sm-3 flex-lg-row justify-content-between">
      <img class="event__img rounded" src="${image}" alt="${name}">
      <div class="details mt-5 text-center p-3 mt-lg-0">
        <h1>${name}</h1>
        <div class="d-flex justify-content-center gap-5 mt-3"><span>Date: ${date}</span><span>Category: ${category}</span><span>Price: $${price}</span></div>
        <p class="mt-3">${description}</p>
        <div class="mt-3">
          <p>Place: ${place}</p>
          <p class="mt-3">Capacity: ${capacity} people</p>
          <p>${assistance ? `Asistance: ${assistance} people`: `Estimate: ${estimate} people`}</p>
        </div>
      </div>
    </div>
  ` 
  container.innerHTML = html
};
export default renderDetails