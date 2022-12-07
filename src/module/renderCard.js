const renderCard = ({ currentDate, events }, container, view) => {
	switch (view) {
		case "home":
			template(events, container, true)
			break;
		case "upcoming":
      const upcomingEvents = events.filter(event => event.date > currentDate)
			template(upcomingEvents, container)
			break;
		case "past":
      const pastEvents = events.filter(event => event.date < currentDate)
			template(pastEvents, container)
			break;
		default:
			console.error("This view doesn't exist");
			break;
	}
};
const template = (events, container) => {
	let html = "";
	events.forEach(({_id, image, name, description, price}) => {
		html += `
      <div class="card col-8 col-sm-5 col-md-4 col-lg-3 col-xl-2 mt-5 bg-dark text-light mx-3 mx-md-5 text-center border border-light px-0">
        <img src="${image}" class="card-img-top w-100" alt="${name}">
        <div class="card-body d-flex flex-column justify-content-between">
          <h5 class="card-title">${name}</h5>
          <p class="card-text">${description}</p>
          <div class="d-flex justify-content-between align-items-center">
            <span>Price: ${price}</span>
            <a href="/views/details.html?id=${_id}" class="btn btn-secondary">view more</a>
          </div>
        </div>
      </div>
      `;
	});
  container.innerHTML = html
};
export default renderCard;
