class DataModule {
	constructor(events, currentDate) {
		this.events = events;
		this.currentDate = currentDate;
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
		return this.getEventsWithPercent()[0];
	}
	getLowestPercentEvent() {
		return this.getEventsWithPercent()[this.getEventsWithPercent().length - 1];
	}
	eventRevenue(assistance, price) {
		return price * assistance;
	}
	getUpcomingEventsRevenueAssistance() {
		return this.getUpcoming().map((event) => ({
			name: event.name,
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
	getPastEventsRevenueAssistance() {
		return this.getPast().map((event) => ({
			name: event.name,
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
