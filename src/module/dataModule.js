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
	getUpcomingEventsStatics() {
		return this.getUpcoming().map((event) => ({
			category: event.category,
			revenue: this.eventRevenue(
				event.estimate,
				event.price
			),
			percentAssistance: this.getPercent(
				event.capacity,
				event.estimate
			),
		}));
	}
	getPastEventsStatics() {
		return this.getPast().map((event) => ({
			category: event.category,
			revenue: this.eventRevenue(
				event.assistance,
				event.price
			),
			percentAssistance: this.getPercent(
				event.capacity,
				event.assistance
			),
		}));
	}
}
export default DataModule;
