import data from '../data/data.js'
import renderCard from '../module/renderCard.js'
import searchFilter from "../module/searchFilter.js";
import renderCategoriesCheckbox from "../module/renderCategoriesCheckbox.js";
import filterByCategory from "../module/filterByCategory.js";
document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementsByClassName("event-list")[0];
	const checkboxContainer = document.getElementsByClassName("checkbox-filters")[0];
	const searchInput = document.getElementsByClassName("search-input")[0];
	const categories = [...new Set(data.events.map((event) => event.category))];
	let activeCategories = [];
  let eventsByCategory = []
	renderCategoriesCheckbox(categories, checkboxContainer);
	const handleCheck = (e) => {
		if (e.target.checked) {
			activeCategories.push(e.target.value);
		} else {
			activeCategories = activeCategories.filter(
				(category) => category !== e.target.value
			);
		}
    eventsByCategory = filterByCategory(data.events, activeCategories);
    renderCard(
      { currentDate: data.currentDate, events: eventsByCategory },
      cardContainer,
      "past"
    );
	};
	document.handleCheck = handleCheck;
	eventsByCategory = filterByCategory(data.events, activeCategories);
	renderCard(
		{ currentDate: data.currentDate, events: eventsByCategory },
		cardContainer,
		"past"
	);
	searchInput.addEventListener("input", (e) =>
		searchFilter(e.target.value, {currentDate: data.currentDate, eventsByCategory}, cardContainer, "past")
	);
})
