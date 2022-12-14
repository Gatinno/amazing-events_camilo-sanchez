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
	getEventById(id) {
		return this.events.find(event => event._id === id)
	}
	getCategories() {
		return this.categories
	}
	getPercent(total, assistance) {
		return ((assistance * 100) / total).toFixed(2);
	}
	sortEventsByProperty(events, property) {
		return events.sort((a, b) => b[property] - a[property])
	} 
	getEventsWithPercent() {
		return this.sortEventsByProperty(this.events
			.filter((event) => event.assistance)
			.map((event) => ({
				name: event.name,
				percentAssistance: this.getPercent(event.capacity, event.assistance),
			}))
			, "percentAssistance")
	}
	getEventsWithCapacity() {
		return this.sortEventsByProperty(this.events.map((event) => ({
			name: event.name,
			capacity: event.capacity,
		}))
    , "capacity")
	}
	getHighestPercentEvent() {
		const [event] = this.getEventsWithPercent().slice(0)
		return event;
	}
	getLowestPercentEvent() {
		const [event] = this.getEventsWithPercent().slice(-1)
		return event;
	}
	eventRevenue(assistance, price) {
		return price * assistance;
	}
	getCategoriesStats(events) {
		return this.categories.reduce((categoriesStats, category) => {
			let filterEvents = events.filter(event => event.category.toLowerCase().includes(category.toLowerCase()))
			let people = filterEvents.reduce((accumulator, event) => accumulator + (event.assistance || event.estimate), 0)
			let capacity = filterEvents.reduce((accumulator, event) => accumulator + event.capacity, 0)
			let revenue = filterEvents.reduce((accumulator, event) => accumulator + this.eventRevenue((event.assistance || event.estimate), event.price), 0)
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
