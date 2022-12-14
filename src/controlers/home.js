import data from "../data/data.js";
import renderCard from "../module/renderCard.js";
import searchFilter from "../module/searchFilter.js";
import renderCategoriesCheckbox from "../module/renderCategoriesCheckbox.js";
import filterByCategory from "../module/filterByCategory.js";
document.addEventListener("DOMContentLoaded", () => {
	const cardContainer = document.getElementsByClassName("event-list")[0];
	const checkboxContainer = document.getElementsByClassName("checkbox-filters")[0];
	const searchInput = document.getElementsByClassName("search-input")[0];
	const categories = [...new Set(data.events.map((event) => event.category))];
	let searchText = ""
	let activeCategories = [];
  let eventsByCategory = []
	renderCategoriesCheckbox(categories, checkboxContainer);
	checkboxContainer.addEventListener('change', (e) => {
		activeCategories = [...document.querySelectorAll('input[type="checkbox"]:checked')].map(elemento => elemento.value)
		eventsByCategory = filterByCategory(data.events, activeCategories);
		searchFilter(searchText, {currentDate: data.currentDate, eventsByCategory}, cardContainer, "home")
	})
	renderCard(
		{ currentDate: data.currentDate, events: data.events },
		cardContainer,
		"home"
	);
	searchInput.addEventListener("input", (e) =>{
		searchText = e.target.value
		searchFilter(searchText, {currentDate: data.currentDate, eventsByCategory}, cardContainer, "home")
	});
});