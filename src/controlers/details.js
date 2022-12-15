import data from "../data/data.js";
import renderDetails from "../module/renderDetails.js";
document.addEventListener("DOMContentLoaded", () => {
	const container = document.getElementsByClassName("details-content")[0];
	const { events } = data;
	const urlParams = location.search;
	const id = parseInt(new URLSearchParams(urlParams).get("id"));
	renderDetails(id, events, container);
});
