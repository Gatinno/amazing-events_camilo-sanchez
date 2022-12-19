class DataModule {
	constructor(events, currentDate) {
		this.events = events;
		this.currentDate = currentDate;
		this.categories = [...new Set(events.map(event => event.category))]
	}
	getAll() {
		return this.events;
	}
	getUpcoming() {
		return this.events.filter((event) => event.date > this.currentDate);
	}
	getPast() {
		return this.events.filter((event) => event.date < this.currentDate);
	}
	getCategories() {
		return this.categories
	}
	getPercent(total, assistance) {
		return ((assistance * 100) / total).toFixed(2);
	}
	getEventsWithPercent() {
		return this.events
			.filter((event) => event.assistance)
			.map((event) => ({
				name: event.name,
				percentAssistance: this.getPercent(event.capacity, event.assistance),
			}))
			.sort((a, b) => b.percentAssistance - a.percentAssistance);
	}
	getEventsWithCapacity() {
		return this.events.map((event) => ({
			name: event.name,
			capacity: event.capacity,
		}))
    .sort((a, b) => b.capacity - a.capacity);
	}
	getHighestPercentEvent() {
		return this.getEventsWithPercent()[0].name;
	}
	getLowestPercentEvent() {
		return this.getEventsWithPercent()[this.getEventsWithPercent().length - 1].name;
	}
	eventRevenue(assistance, price) {
		return price * assistance;
	}
	getCategoriesStats(events) {
		return this.categories.reduce((categoriesStats, category) => {
			let filterEvents = events.filter(event => event.category.toLowerCase().includes(category.toLowerCase()))
			let people = filterEvents.reduce((accumulator, event) => accumulator + (event.assistance ? event.assistance : event.estimate), 0)
			let capacity = filterEvents.reduce((accumulator, event) => accumulator + event.capacity, 0)
			let revenue = filterEvents.reduce((accumulator, event) => accumulator + this.eventRevenue((event.assistance ? event.assistance : event.estimate), event.price), 0)
			categoriesStats.push({category, people, capacity, revenue})
			return categoriesStats
		},[])
	}
	getUpcomingEventsStatics() {
		return this.getCategoriesStats(this.getUpcoming()).map((category) => ({
			category: category.category,
			revenue: category.revenue,
			percentAssistance: this.getPercent(
				category.capacity,
				category.people
			),
		}));
	}
	getPastEventsStatics() {
		return this.getCategoriesStats(this.getPast()).map((category) => ({
			category: category.category,
			revenue: category.revenue,
			percentAssistance: this.getPercent(
				category.capacity,
				category.people
			),
		}));
	}
}
export default DataModule;
