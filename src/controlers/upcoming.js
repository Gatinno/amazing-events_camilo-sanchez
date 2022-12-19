import getData from "../module/getData.js";
import renderCard from "../module/renderCard.js";
import renderCategoriesCheckbox from "../module/renderCategoriesCheckbox.js";
import filterCategorySearch from "../module/filterCategorySearch.js";
import DataModule from "../module/dataModule.js";
document.addEventListener("DOMContentLoaded", async () => {
	const cardContainer = document.getElementsByClassName("event-list")[0];
	const checkboxContainer = document.getElementsByClassName("checkbox-filters")[0];
	const searchInput = document.getElementsByClassName("search-input")[0];
	const data = await getData("https://amazing-events.onrender.com/api/events")
	const eventsModule = new DataModule(data.events, data.currentDate)
	const eventsList = eventsModule.getAll()
	const categories = [...new Set(data.events.map((event) => event.category))];
	let activeCategories = [];
	renderCategoriesCheckbox(categories, checkboxContainer);
	checkboxContainer.addEventListener('change', (e) => {
		activeCategories = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(elemento => elemento.value)
		let filteredEvents  = filterCategorySearch(eventsList, activeCategories, searchInput.value)
		renderCard(
			{ events: filteredEvents },
			cardContainer
		);
	})
	renderCard(
		{ events: eventsList },
		cardContainer
	);
	searchInput.addEventListener("input", (e) =>{
		let filteredEvents = filterCategorySearch(eventsList, activeCategories, searchInput.value)
		renderCard(
			{ events: filteredEvents },
			cardContainer
		);
	});
});