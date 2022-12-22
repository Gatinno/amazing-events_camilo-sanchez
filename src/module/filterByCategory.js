const filterByCategory = (events, categories) =>
	categories.length
		? events.filter(event => categories.includes(event.category))
		: events;
export default filterByCategory;
