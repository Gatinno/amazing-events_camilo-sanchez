const filterByCategory = (events, categories) =>
	categories.length
		? categories
				.map((category) =>
					events.filter((event) => event.category === category)
				)
				.flat()
		: events;
export default filterByCategory;
