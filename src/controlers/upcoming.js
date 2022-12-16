import getData from "../module/getData.js";
import renderCard from "../module/renderCard.js";
import filterCategorySearch from "../module/filterCategorySearch.js";
import renderCategoriesCheckbox from "../module/renderCategoriesCheckbox.js";
document.addEventListener("DOMContentLoaded", async () => {
	const cardContainer = document.getElementsByClassName("event-list")[0];
	const checkboxContainer = document.getElementsByClassName("checkbox-filters")[0];
	const searchInput = document.getElementsByClassName("search-input")[0];
	const data = await getData("https://amazing-events.onrender.com/api/events");
	const categories = [...new Set(data.events.map((event) => event.category))];
	let activeCategories = []
	renderCategoriesCheckbox(categories, checkboxContainer);
	checkboxContainer.addEventListener('change', (e) => {
			activeCategories = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(elemento => elemento.value)
			let filteredEvents = filterCategorySearch(data.events, activeCategories, searchInput.value)
			renderCard(
				{ currentDate: data.currentDate, events: filteredEvents },
				cardContainer,
				"upcoming"
			);
		})
	renderCard(
		{ currentDate: data.currentDate, events: data.events },
		cardContainer,
		"upcoming"
	);
	searchInput.addEventListener("input", (e) =>{
		let filteredEvents = filterCategorySearch(data.events, activeCategories, searchInput.value)
			renderCard(
				{ currentDate: data.currentDate, events: filteredEvents },
				cardContainer,
				"upcoming"
			);
	});
});