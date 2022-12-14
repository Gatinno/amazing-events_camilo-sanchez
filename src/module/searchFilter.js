import renderCard from "./renderCard.js";
const searchFilter = (
	value,
	{ currentDate, eventsByCategory },
	container,
	view
) => {
	const filterEvents = value
		? eventsByCategory.filter((event) =>
				event.name.toLowerCase().includes(value.toLowerCase())
		  )
		: eventsByCategory;
	renderCard({ currentDate, events: filterEvents }, container, view);
};
export default searchFilter;
